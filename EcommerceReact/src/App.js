import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Router from "./Router";

const App = () => {
  return (
    <>
    <Router />
      {/* {<Navbar/>
      Ecommerce Application
      <Button as="a" variant="primary">
        Button as link
      </Button>} */}
    </>
  );
};

export default App;
