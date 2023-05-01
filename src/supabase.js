// import * as dotenv from "dotenv";

import { createClient } from "@supabase/supabase-js";
// dotenv.config();

const supabaseUrl = "https://ppyxnenbiyiqweoqpext.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBweXhuZW5iaXlpcXdlb3FwZXh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNjc0NTcsImV4cCI6MTk5Mzk0MzQ1N30.QecaPCwDLSHpBfc--jrwCj0UtIJdKGJQRLnL9amAhSY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
