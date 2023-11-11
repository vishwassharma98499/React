/*
<div id = "parent">
 <div id = "child">
   <h1> i am h1 tag<h1>
    <h2> i am h2 tag<h2>
   </div>
   <div id = "child2">
   <h1> i am h1 tag<h1>
    <h2> i am h2 tag<h2>
   </div>
   </div>

   React Object ==> HTML(browser undertand(convert by ReactDOM in render method))
  
package.json is configuration for npm
bundler package the app for production
npm install -D ( we have 2 type of dependency to install, 1 is normal and dev dependency)
dev dependency is generally required in development phase but normal are req in production as well
"parcel": "^2.10.2" here keret ^(equivalent/latest to minor version) or ~ tilde(cequivalent/latest to major version) in package.json
use ^ to upgrade only minor version suggested and nothing for exact version

package-lock.json keeps record of exact version dependency

transitive dependency: project dependency is parcel a, parcel has its own dependecy and they have their own, all this is called transitive dependency
every pacage in node module folder have its own pacage.json
npm install recreate node_modules

npx Parcelname (execute the npm installed pacage) 

Parcel:
- dev build
- local server
- HMR (hot module replacement) save the file and if any change it automatically refresh webpage
- file watching alog uses( written in c++)
- faster build(because of caching)
- Image optimisation
- minification file during production( bundle , optimise, compress)
- consistent hashing
- code spliting
- differential bundling(support older browwer)
- tree shaking (remove unused code)
npx parcel build index.html for production build(remove app.js main line from pacage.json to remove error)

browserlist take care of all supported browser( write last 2 browser in project.json)
*/

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from react"
);
//console.log(heading)

// JSX is not html in js its js like syntax
// JSX code transpiled(converted) before reaches js engine by parcel through BABEl ( inside parcel)
// JSX attributes are in camel case , and className instead of class
const JSXheading = (
  <h1 id="heading" className="jsxClass">
    "jsx heading"
  </h1>
);
// wrap JSX in () for multiple line eg ( <h1 id="heading" className="jsxClass" >"jsx heading"</h1>;)
const root = ReactDOM.createRoot(document.getElementById("root"));
//const header = ReactDOM.createRoot(document.getElementById("header"));
//root.render(parent);
//root.render(JSXheading);// if root has already element it will be replaced by parent
//console.log(parent)

// React component - 2 types
// class based component (old way) use js class
// functional component new way (use js function)

// react functional comp just a js function that return jsx
// it always start with capital letter

const Title = () => (
  <h1 className="head" tabIndex="5">
    react Title component
  </h1>
);

// component composition
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1>react functional component</h1>
  </div>
);

root.render(<HeadingComponent />);
// also you can use short hand syntax
// const HeadingComponent = () => <h1>"react functional component"</h1>;
// or const HeadingComponent = () => (
//  <h1>"react functional component"</h1>
//   );
