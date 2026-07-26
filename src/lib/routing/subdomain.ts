import { apexDomain, getVerticalBySubdomain } from "@/config/routes.config";

/** Extrai o prefixo de subdomínio do hostname atual. */
export function parseSubdomain(hostname = window.location.hostname): string {
  if (hostname === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
    return "";
  }

  const host = hostname.replace(/^www\./, "");
  const apex = apexDomain.replace(/^www\./, "");

  if (host === apex) return "";

  if (host.endsWith(`.${apex}`)) {
    return host.slice(0, -(apex.length + 1)).split(".")[0] ?? "";
  }

  const segments = hostname.split(".");
  if (segments[0] === "www") return segments[1] ?? "";
  return segments[0] ?? "";
}

export function getDefaultPathForHost(hostname?: string): string {
  const subdomain = parseSubdomain(hostname);
  return getVerticalBySubdomain(subdomain).basePath;
}
