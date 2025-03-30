import supabase, { supabaseUrl } from "./supabase";

export async function getLandingPageData() {
  const { data, error } = await supabase
    .from("landingPage")
    .select("*")
    .single();

  if (error) {
    console.error(error);
    throw new Error("Nastavenia nie je možné načítať");
  }

  return data;
}

export async function updateLandingPageData(id, updates) {
  if (!id) throw new Error("Chýba ID pre aktualizáciu landing page");

  const existingImage = updates.image?.startsWith?.(supabaseUrl);

  const imageName = `${Date.now()}-${updates.image.name}`.replace(/\s/g, "-");
  const imagePath = existingImage
    ? updates.image
    : `${supabaseUrl}/storage/v1/object/public/productPics/${imageName}`;

  const { data, error } = await supabase
    .from("landingPage")
    .update({ ...updates, image: imagePath })
    .eq("id", id) // 🔹 Tu pridávame id do WHERE podmienky
    .select()
    .single();

  if (error) {
    console.error("Chyba pri aktualizácii landing page:", error.message);
    throw new Error("Landing page nie je možné aktualizovať");
  }

  if (!existingImage) {
    const { error: storageError } = await supabase.storage
      .from("productPics")
      .upload(imageName, updates.image);

    if (storageError) {
      console.error("❌ Chyba pri nahrávaní obrázka:", storageError);
      throw new Error("Obrázok nie je možné nahrať");
    }
  }

  return data;
}
