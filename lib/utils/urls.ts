/**
 * Get the current URL origin.
 */
export const currentUrlOrigin = typeof window !== "undefined" && window.location.origin ? window.location.origin : ""
