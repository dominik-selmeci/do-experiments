const App = () => {
  return React.createElement(
    "section",
    {},
    React.createElement("h1", {}, "Do experiments!")
  );
};

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
