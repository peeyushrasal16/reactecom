import logo from './logo.svg';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Products from './components/Products';
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import ProductCategory from './components/ProductCategory';
function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: (
        <>
          <NavBar />
          <h1>Hello world</h1>
          <Link to={"product-category"}>Product Category</Link>
          <Outlet />
          <Footer />
        </>
      ),
      children: [
        {
          path: "product-category",
          element: <ProductCategory />,
        },
      ],
    },
    {
      path: "/products/phone",
      element: (
        <>
          <NavBar />
          <Products link="https://dummyjson.com/products/search?q=phone" />
          <Footer />
        </>
      ),
    },
    {
      path: "/products/fragrances",
      element: (
        <>
          <NavBar />
          <Products link="https://dummyjson.com/products/search?q=fragrances" />
          <Footer />
        </>
      ),
    },
    {
      path: "*",
      element: <>404 not Found</>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
