import supabase, { supabaseUrl } from "./supabase";

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
  const imageName = `${Date.now()}-${newRide.image.name}`.replace(/\s/g, "-");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/productPics/${imageName}`;

  // 1. Vytvorenie jazdy
  const { data, error } = await supabase
    .from("cride")
    .insert([{ ...newRide, image: imagePath }]);

  if (error) {
    console.error(error);
    throw new Error("Jazdu nie je možné vytvorit");
  }

  // 2. Pridanie obrazku
  const { error: storageError } = await supabase.storage
    .from("productPics")
    .upload(imageName, newRide.image);

  // 3. Vymazanie jazdy ak sa vyskytol error pocas naharavania image
  if (storageError) {
    await supabase.from("cride").delete().eq("id", data[0].id);
    console.error(storageError);
    throw new Error("Obrázok nie je možné nahrať");
  }

  return data;
}
