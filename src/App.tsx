import { Home } from "@/pages";
import { PagesPaths } from "@/config/constants";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: PagesPaths.HOME,
    element: <Home />,
  },
]);

const App = () => {
  return (
    <main className="container mx-auto flex items-center justify-center pt-16 px-5 md:px-0">
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
