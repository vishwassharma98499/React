import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";

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
// useEffect() -
// when state variable changes react rerender the component

// react use reconciliation algorithm (react fibre) from react16
// react create a virtual DOM (represantation of actual DOM) or a represantation of actual dom and its nothing but just nested javascript object

// Diff algorithm basically find out difference between updated and previous virtual DOM
// React is doing effective DOM manipulation (because of virtual DOM using reconciliation algorithm)
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
