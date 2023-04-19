// import Footer from "./component/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./component/Navbar";
import Pages from "./component/Pages";
import "./style/index.css";
import axios from "axios";
function App() {

  axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

  return (
    <div className="app">
      <Navbar />
      <Pages />
      {/* <Footer /> */}
    </div>
  );
}
export default App;
