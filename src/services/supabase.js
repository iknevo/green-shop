import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://veyxykogcheakugfyagu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZleXh5a29nY2hlYWt1Z2Z5YWd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwODUzNjgsImV4cCI6MjA1NTY2MTM2OH0.oREDibpI6gAg35-cM63riAtZLQrVJDqC3O9t7209VWI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
