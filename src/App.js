import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
//import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurentMenu from "./Components/RestaurentMenu";
//import Grocery from "./Components/Grocery";

// lazy loading, dynamic loading , dynamic import and used to load the component when required
const Grocery = lazy(() => import("./Components/Grocery"));
const About = lazy(() => import("./Components/About"));
// two type of import export for default nothing for export by name use { } for import

// Config driven UI: UI changes as per backend data
/*
Header
  - Logo
  - Nav Items  
Body
  - Search Input
  - Restaurent container
    - restaurent card
      - image
      - name , start rating, cuisines, deliverytime
Footer
  - Copyright
  - links(address contact info etc)

*/
/*
ul unordered list , li is list in html
*/

// best practice name components js file in capital letter
// debugger; to debug the code
// console.log(resData.keys);

// react hooks are normal js utility function
// useState() - superpoweful react variable
// useEffect() - called after the render is done
// when state variable changes react rerender the component
// create sztate variable on top , inside body never in for loop or if or in function

// react use reconciliation algorithm (react fibre) from react16
// react create a virtual DOM (represantation of actual DOM) or a represantation of actual dom and its nothing but just nested javascript object

// Diff algorithm basically find out difference between updated and previous virtual DOM
// React is doing effective DOM manipulation (because of virtual DOM using reconciliation algorithm)

// Optional chaining is a process for querying and calling properties, methods, and subscripts on an optional that might currently be nil . If the optional contains a value, the property, method, or subscript call succeeds; if the optional is nil , the property, method, or subscript call returns nil .

// shimmer ui: fake ui till api load

// UseEffect()
// first is method and second is the data
// if no dependecy it called every time object renders, if there is dependency it is called everytime dependency changes

// createBrowserRouter creates the configuration routes
// RouterProvider provide the configuration to rendering

//rafce and press enter in component class(shortcut)

// function start with use in import fro m react is called hook(common convention)
// useRouteerror() reads the error in path to display on page

// link component is the replacement for ancht tag <a> which does not relod the page and rerender

// TWO types of routing
// client side routing
// server side routing

// CHUNKING or CODE SPLITTING , dynamic bundling, lazy loading all same name to chunk your application or split your code to
// to minimize js file to load during bundling

// to apply css is the SASS and SCSS
// its scripting language that is compiled in CSS or writing CSS with extra features in CSS
// material ui , bootstrap, chakra ui, ant design to built in components(buttons and all)
// tailwind vs code extention tailwind css intellicense

// higher order component is a function that takes a component as input enhances it and returns a back component

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: (
          <Suspense fallback={<h1>loading screen</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading screen</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurentMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
