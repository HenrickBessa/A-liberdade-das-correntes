import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";
import { ReaderLayout } from "@/layouts/ReaderLayout";
import LandingPage from "@/pages/landing/LandingPage";
import EbookIndexPage from "@/pages/ebook/EbookIndexPage";
import PartPage from "@/pages/ebook/PartPage";
import ChapterPage from "@/pages/ebook/ChapterPage";
import VerticalIndexPage from "@/pages/verticals/VerticalIndexPage";
import VerticalDetailPage from "@/pages/verticals/VerticalDetailPage";
import NotFoundPage from "@/pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> },

      {
        path: "ebook",
        element: <ReaderLayout />,
        children: [
          { index: true, element: <EbookIndexPage /> },
          { path: "parte/:partId", element: <PartPage /> },
          { path: "capitulo/:chapterId", element: <ChapterPage /> },
        ],
      },

      {
        path: "vertical/:verticalSlug",
        element: <ReaderLayout />,
        children: [
          { index: true, element: <VerticalIndexPage /> },
          { path: ":itemId", element: <VerticalDetailPage /> },
        ],
      },

      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
