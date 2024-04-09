import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zreqyetuvavifdjftlhb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyZXF5ZXR1dmF2aWZkamZ0bGhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxNDczMzUsImV4cCI6MjAyNzcyMzMzNX0.APec7xdKKpwSh6jiNnLEMz09oEAEgf2JnPFaaaZctXo";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
