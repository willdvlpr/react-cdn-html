const reactElement = React.createElement;

const Button = () => {
  return reactElement(
    "button",
    {
      className: "login__button",
      onClick: () => (window.location.href = "http://localhost:5500/home.html"),
    },
    "Login"
  );
};

const root = ReactDOM.createRoot(document.querySelector("#button"));

root.render(reactElement(Button));
