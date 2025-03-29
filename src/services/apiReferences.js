import supabase from "./supabase";

export async function getReferences() {
  const { data, error } = await supabase
    .from("references")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error(error);
    throw new Error("Referencie nie je možné načítať");
  }

  return data;
}

export async function deleteReference(id) {
  const { data, error } = await supabase
    .from("references")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Referenciu nie je možné odstránit");
  }

  return data;
}
