/* ==========================================================================
   SUPABASE CONFIG — completar con los datos del proyecto de Supabase.
   Es seguro exponer la URL y la ANON KEY en el frontend SIEMPRE que las
   tablas tengan Row Level Security (RLS) activado con políticas de solo
   lectura pública (ver supabase/schema.sql). Nunca poner acá la
   service_role key.
   ========================================================================== */

window.SUPABASE_CONFIG = {
  url: 'https://TU-PROYECTO.supabase.co', // TODO: reemplazar por la URL real del proyecto
  anonKey: 'TU-ANON-KEY-PUBLICA', // TODO: reemplazar por la anon/public key real
};
