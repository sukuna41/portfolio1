// app/api/certificates/route.js
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase.from("certificates").select("*");

  return Response.json(data);
}
