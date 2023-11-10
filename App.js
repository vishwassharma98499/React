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
*/

const parent = React.createElement("div", 
             { id: "parent" },[
    React.createElement("div", { id: "child" }
    ,[ React.createElement("h1", {}, "I am h1 tag")
    ,React.createElement("h2", {}, "I am h2 tag")]
    ),
    React.createElement("div", { id: "child2" }
    ,[ React.createElement("h1", {}, "I am h1 tag")
    ,React.createElement("h2", {}, "I am h2 tag")]
    )]
    );

const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello world from react");
//console.log(heading)

const root = ReactDOM.createRoot(document.getElementById("root"));
//const header = ReactDOM.createRoot(document.getElementById("header"));
//root.render(parent);
root.render(parent);// if root has already element it will be replaced by parent
console.log(parent)