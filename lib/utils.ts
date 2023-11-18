import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// allow us to safely combine dynamic tailwind classes with static classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
