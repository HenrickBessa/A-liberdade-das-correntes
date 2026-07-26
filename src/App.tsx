import { SubdomainProvider } from "@/hooks/useSubdomain";
import { AppRouter } from "@/routes";

export default function App() {
  return (
    <SubdomainProvider>
      <AppRouter />
    </SubdomainProvider>
  );
}
