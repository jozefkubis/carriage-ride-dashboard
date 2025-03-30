import supabase from "./supabase";

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
