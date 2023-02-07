import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nevigation from "./component/Nevigation";
import Home from "./component/page/Home";
import Member from "./component/page/Member";
import Product from "./component/page/Product";


function App() {
  return (
    <div>
    <BrowserRouter>
        <Nevigation/>
        <Routes>
            <Route path="/" element={<Home/>} exact/>;
            <Route path="/member" element={<Member/>}/>;
            <Route path="/product" element={<Product/>}/>;
        </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
