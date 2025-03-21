import { PAGE_SIZE } from "../utils/constans";
import { getToday } from "../utils/helpers";
import supabase from "./supabase";

export async function getBookings({ page }) {
  let query = supabase.from("bookings").select("*, cride(*)", {
    count: "exact",
  });

  // Ak je zadaná stránka, nastav rozsah dotazu
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  // Získaj výsledky z databázy
  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Rezervácie nie je možné načítať");
  }

  return { data, count };
}

export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cride(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Rezerváciu nie je možné načítať");
  }

  return data;
}

// Returns all BOOKINGS that are were created after the given date. Useful to get bookings created in the last 30 days, for example.
export async function getBookingsAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice, extrasPrice")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

// Returns all STAYS that are were created after the given date
export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    // .select('*')
    .select("*, guests(fullName)")
    .gte("startDate", date)
    .lte("startDate", getToday());

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

// Activity means that there is a check in or a check out today
export async function getStaysTodayActivity() {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName, nationality, countryFlag)")
    .or(
      `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`,
    )
    .order("created_at");

  // Equivalent to this. But by querying this, we only download the data we actually need, otherwise we would need ALL bookings ever created
  // (stay.status === 'unconfirmed' && isToday(new Date(stay.startDate))) ||
  // (stay.status === 'checked-in' && isToday(new Date(stay.endDate)))

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  return data;
}


export async function updateBooking(id, updates) {
  const { data, error } = await supabase
    .from("bookings")
    .update(updates) // ✅ Dynamicky aktualizujeme len zmenené polia
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Chyba pri aktualizácii rezervácie:", error.message);
    throw new Error("Rezerváciu nie je možné aktualizovať");
  }

  return data;
}


export async function deleteBooking(id) {
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Rezerváciu nie je možné odstránit");
  }
  return data;
}
