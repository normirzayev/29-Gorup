import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Pages from "./component/Pages";
import "./style/index.css";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Pages />
      <Footer />
    </div>
  );
}
export default App;
