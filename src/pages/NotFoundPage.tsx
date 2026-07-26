import { Link } from "react-router-dom";
import { paths } from "@/lib/routing/paths";

export default function NotFoundPage() {
  return (
    <main className="px-6 py-32 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-accent">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl text-brand-ink">Página não encontrada</h1>
      <p className="mt-3 text-brand-muted">
        O caminho que você buscou não existe nesta jornada.
      </p>
      <Link
        to={paths.home()}
        className="inline-block mt-8 font-mono text-sm text-brand-accent hover:underline"
      >
        ← Voltar ao início
      </Link>
    </main>
  );
}
