-- ============================================================================
-- SCHEMA — tabla "noticias" (tablón / linktree editorial)
-- Ejecutar esto en el SQL Editor del dashboard de Supabase (Project > SQL
-- Editor). No requiere backend propio: la web lee esta tabla directamente
-- vía REST (PostgREST) usando la anon/public key, protegida por RLS.
--
-- Este archivo NO se ejecuta automáticamente desde ningún lado — es un
-- script de referencia para correr manualmente una sola vez al crear el
-- proyecto de Supabase.
-- ============================================================================

create extension if not exists "pgcrypto"; -- para gen_random_uuid()

create table if not exists public.noticias (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  url text,
  image_url text,
  category text,          -- ej: 'noticia', 'entrevista', 'evento', 'curso', 'convocatoria', 'anuncio', 'link'
  date date not null default current_date,
  pinned boolean not null default false,
  active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

-- Índice para el orden que usa assets/js/noticias.js (pinned, sort_order, date)
create index if not exists noticias_orden_idx
  on public.noticias (pinned desc, sort_order asc, date desc);

-- -- Row Level Security -------------------------------------------------------
-- Lectura pública SOLO de filas activas; nada de escritura pública (se
-- administra desde el dashboard de Supabase, autenticado como owner del
-- proyecto — no hace falta un sistema de auth propio para esta primera
-- etapa).
alter table public.noticias enable row level security;

drop policy if exists "Lectura pública de noticias activas" on public.noticias;
create policy "Lectura pública de noticias activas"
  on public.noticias
  for select
  using (active = true);

-- No se crean políticas de insert/update/delete: por defecto, con RLS
-- activado y sin políticas para esas operaciones, quedan bloqueadas para
-- el rol "anon" y "authenticated". Se administra desde el dashboard
-- (Table editor), autenticado como owner del proyecto.

-- ============================================================================
-- Estructura preparada a futuro (NO se crea todavía): artículos, papers y
-- contenido destacado podrían migrar a Supabase con el mismo criterio
-- (tabla + RLS de solo lectura pública). Por ahora viven como archivos
-- JSON versionados en el propio repo (ver assets/data/), más simples de
-- mantener mientras el volumen de contenido es bajo.
-- ============================================================================
