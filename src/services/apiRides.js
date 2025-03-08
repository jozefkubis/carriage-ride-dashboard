import supabase from "./supabase";

// MARK: GET RIDES
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

// MARK: DELETE RIDE
export async function deleteRide(id) {
  const { data, error } = await supabase.from("cride").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Jazdu nie je možné odstránit");
  }

  return data;
}

// MARK: CREATE RIDE
export async function createRide(newRide) {
  const { data, error } = await supabase.from("cride").insert([newRide]);

  if (error) {
    console.error(error);
    throw new Error("Jazdu nie je možné vytvorit");
  }

  return data;
}
