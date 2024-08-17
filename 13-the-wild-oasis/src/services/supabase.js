import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://peznrurxyzlkeyqmuifc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlem5ydXJ4eXpsa2V5cW11aWZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4MDQ1OTAsImV4cCI6MjAzOTM4MDU5MH0.wldxnk_-M4U71TKyqSjJ6yCIxOqnoVNwp-WlEo8dDgM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
