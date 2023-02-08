import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/Footer";
import Welcome from "./components/Jumbotron";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <Welcome size="2" bg="blue" color="white"></Welcome>
      <AllTheBooks></AllTheBooks>
      <MyFooter
        href="#"
        title="Made with love by Palma"
        stile="d-flex justify-content-between"
        bg="black"
        color="white"
        df="flex"
        justbetween="space-between"
        fs="1.2"
      ></MyFooter>
    </div>
  );
}

export default App;
