import { formatDistance, parseISO } from "date-fns";
import { sk } from "date-fns/locale";
import { differenceInDays } from "date-fns";

// We want to make this function work for both Date objects and strings (which come from Supabase)
export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    locale: sk, // ✅ Nastavenie slovenského jazyka
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "o") // Oprava anglických prekladov
    .replace("ago", "dozadu");

// Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
export const getToday = function (options = {}) {
  const today = new Date();

  // Nastaví dátum na koniec alebo začiatok dňa podľa parametra "end"
  if (options?.end)
    today.setUTCHours(23, 59, 59, 999);
  else
    today.setUTCHours(0, 0, 0, 0);

  return today.toISOString().split("T")[0]; // Vracia iba dátum vo formáte YYYY-MM-DD
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "EUR" }).format(
    value,
  );
