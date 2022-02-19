import {Home} from "./pages/home/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/cart" exact component={Cart}/>
            </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
