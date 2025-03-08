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

// MARK: CREATE-EDIT RIDE
export async function createEditRide(newRide, id) {
  const isUpdating = !!id; // Ak je ID, tak editujeme existujúcu jazdu
  const existingImage = newRide.image?.startsWith?.(supabaseUrl);

  // 1️⃣ Vytvorenie názvu obrázka a určenie cesty
  const imageName = `${Date.now()}-${newRide.image.name}`.replace(/\s/g, "-");
  const imagePath = existingImage
    ? newRide.image
    : `${supabaseUrl}/storage/v1/object/public/productPics/${imageName}`;

  // 2️⃣ Príprava dotazu na vytvorenie alebo úpravu jazdy
  let query = supabase.from("cride");

  if (isUpdating) {
    query = query.update({ ...newRide, image: imagePath }).eq("id", id);
  } else {
    query = query.insert([{ ...newRide, image: imagePath }]);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error("❌ Chyba pri ukladaní jazdy:", error);
    throw new Error("Jazdu nie je možné vytvoriť");
  }

  // 3️⃣ Ak je obrázok nový, nahráme ho do Supabase Storage
  if (!existingImage) {
    const { error: storageError } = await supabase.storage
      .from("productPics")
      .upload(imageName, newRide.image);

    // 4️⃣ Ak sa obrázok nepodarí nahrať, zmažeme vytvorenú jazdu
    if (storageError) {
      await supabase.from("cride").delete().eq("id", data.id);
      console.error("❌ Chyba pri nahrávaní obrázka:", storageError);
      throw new Error("Obrázok nie je možné nahrať");
    }
  }

  return data;
}
