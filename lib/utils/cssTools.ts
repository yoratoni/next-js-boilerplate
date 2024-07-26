import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


/**
 * An utility function to efficiently merge Tailwind CSS classes
 * without style conflicts.
 * @param inputs The Tailwind CSS classes to merge.
 * @returns The merged Tailwind CSS classes.
 */
export function tw(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
