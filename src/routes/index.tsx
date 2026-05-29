import { lazy, Suspense, type ReactNode } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { PageLoader } from "../components/ui/PageLoader";
const Home = lazy(() =>
  import("../pages/Home").then((m) => ({ default: m.Home })),
);
const About = lazy(() =>
  import("../pages/About").then((m) => ({ default: m.About })),
);
const Products = lazy(() =>
  import("../pages/Products").then((m) => ({ default: m.Products })),
);
const Internship = lazy(() =>
  import("../pages/Internship").then((m) => ({ default: m.Internship })),
);
const InternshipApply = lazy(() =>
  import("../pages/InternshipApply").then((m) => ({
    default: m.InternshipApply,
  })),
);
const Contact = lazy(() =>
  import("../pages/Contact").then((m) => ({ default: m.Contact })),
);
const Verify = lazy(() =>
  import("../pages/Verify").then((m) => ({ default: m.Verify })),
);
const VerifyCertificate = lazy(() =>
  import("../pages/VerifyCertificate").then((m) => ({
    default: m.VerifyCertificate,
  })),
);

function LazyPage({ children }: { children: ReactNode }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <LazyPage>
            <Home />
          </LazyPage>
        ),
      },
      {
        path: "about",
        element: (
          <LazyPage>
            <About />
          </LazyPage>
        ),
      },
      {
        path: "products",
        element: (
          <LazyPage>
            <Products />
          </LazyPage>
        ),
      },
      {
        path: "careers",
        element: (
          <LazyPage>
            <Internship />
          </LazyPage>
        ),
      },
      {
        path: "careers/apply",
        element: (
          <LazyPage>
            <InternshipApply />
          </LazyPage>
        ),
      },
      {
        path: "internship",
        element: <Navigate to="/careers" replace />,
      },
      {
        path: "internship/apply",
        element: <Navigate to="/careers/apply" replace />,
      },
      {
        path: "contact",
        element: (
          <LazyPage>
            <Contact />
          </LazyPage>
        ),
      },
      {
        path: "verify",
        element: (
          <LazyPage>
            <Verify />
          </LazyPage>
        ),
      },
      {
        path: "verify/:slug",
        element: (
          <LazyPage>
            <VerifyCertificate />
          </LazyPage>
        ),
      },
    ],
  },
]);
