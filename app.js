const heading = React.createElement("div", { id: "parent" }, [
  [
    React.createElement("h3", { id: "child1" }, "i am first child of child1"),
    React.createElement("h4", { id: "child2" }, "i am second child of child1"),
  ],
  [
    React.createElement("h3", { id: "child1" }, "i am first child of child1"),
    React.createElement("h4", { id: "child2" }, "i am second child of child1"),
  ],
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
