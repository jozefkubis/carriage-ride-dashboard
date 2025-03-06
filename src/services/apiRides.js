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

export async function deleteRide(id) {
  const { data, error } = await supabase.from("cride").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Jazdu nie je možné odstránit");
  }

  return data;
}
