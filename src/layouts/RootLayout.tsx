import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useThemeVars } from "@/hooks/useThemeVars";
import { useSubdomain } from "@/hooks/useSubdomain";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/** Redireciona subdomínio → rota canônica quando o usuário acessa a raiz. */
function SubdomainRedirect() {
  const vertical = useSubdomain();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (vertical.id !== "landing" && location.pathname === "/") {
      navigate(vertical.basePath, { replace: true });
    }
  }, [vertical, location.pathname, navigate]);

  return null;
}

/** Layout global: header + outlet + footer. */
export function RootLayout() {
  useThemeVars();

  return (
    <>
      <SubdomainRedirect />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
