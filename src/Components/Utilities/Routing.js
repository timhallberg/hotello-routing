import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import App from "../../App";

import About from '../../Components/About';
import Test from '../../Components/Test';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/test" element={<Test />}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>


  );
}

export default Routing;
