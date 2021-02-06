import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      <Header></Header>
      <Footer title="Macus"></Footer>
      <Sidebar></Sidebar>
      <Menu></Menu>
    </div>
  );
}

export default App;
