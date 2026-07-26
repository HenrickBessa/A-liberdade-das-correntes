import { Outlet } from "react-router-dom";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";

/** Layout para leitura (ebook e verticais paginadas). */
export function ReaderLayout() {
  return (
    <div className="min-h-[60vh]">
      <div className="max-w-content mx-auto px-6 pt-8">
        <Breadcrumbs />
      </div>
      <Outlet />
    </div>
  );
}
