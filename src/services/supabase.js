import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jlfekazftgytoziyfzfn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsZmVrYXpmdGd5dG96aXlmemZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5Nzk4NjAsImV4cCI6MjA1MzU1NTg2MH0.iYdyI0IJZs2dvY-Fh3I6l4G66GRJiWIo9ZzD6LK7N-w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
