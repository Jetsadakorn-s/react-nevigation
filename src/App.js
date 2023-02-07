import { BrowserRouter,Switch,Route } from "react-router-dom";
import Nevigation from "./component/Nevigation";
import Home from "./component/page/Home";
import Member from "./component/page/Member";
import Product from "./component/page/Product";


function App() {
  return (
    <div>
    <BrowserRouter>
        <Nevigation/>
        <Switch>
            <Route path="/" component={Home} exact/>;
            <Route path="/member" component={Member}/>;
            <Route path="/product" component={Product}/>;
        </Switch>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
