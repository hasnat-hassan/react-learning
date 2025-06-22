import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pgdnopxzyoejttxeztzy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnZG5vcHh6eW9lanR0eGV6dHp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1NzEwOTMsImV4cCI6MjA2NjE0NzA5M30.DCaA24Rainu0dBFZPVhoexZ5WHCp0pOxO4Qimei1fPI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
