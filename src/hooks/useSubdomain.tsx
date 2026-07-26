import { createContext, useContext, ReactNode } from "react";
import { parseSubdomain } from "@/lib/routing/subdomain";
import { getVerticalBySubdomain, type VerticalConfig } from "@/config/routes.config";

const SubdomainContext = createContext<VerticalConfig>(getVerticalBySubdomain(""));

export function SubdomainProvider({ children }: { children: ReactNode }) {
  const subdomain = parseSubdomain();
  const vertical = getVerticalBySubdomain(subdomain);

  return (
    <SubdomainContext.Provider value={vertical}>{children}</SubdomainContext.Provider>
  );
}

export function useSubdomain() {
  return useContext(SubdomainContext);
}
