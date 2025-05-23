import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getCurrentDate() {
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const date = new Date();
  const day = date.getDate();
  const month = MONTHS[date.getMonth()]
  const year = date.getFullYear();

  return `${day} ${month} ${year}`
}
