// Prefixes public-folder paths with the deployment sub-folder (e.g. "/commander-group") when the site
// is built with NEXT_PUBLIC_BASE_PATH set. next/link handles routes itself; plain <img src> does not.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (p: string) => (p.startsWith("/") ? BASE_PATH + p : p);
