import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/Cards";
import CardDetails from "./components/CardDetails";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart" element={<CardDetails />} />
      </Routes>
    </>
  );
}

export default App;
