import supabase from "./supabase";

export async function getRides() {
  const { data, error } = await supabase
    .from("cride")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error(error);
    throw new Error("Jazdy nie je možné načítať");
  }

  return data;
}
