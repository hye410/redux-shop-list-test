import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import { Provider } from "react-redux";
import store from './store';

function App() {
  return (

    <BrowserRouter>
      {/* <Provider store={store}> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      {/* </Provider> */}
    </BrowserRouter>

  );
}

export default App;
