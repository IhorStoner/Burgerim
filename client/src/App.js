import './App.scss';
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import OrderButtons from './components/OrderButtons/OrderButtons'
import OrderPopup from './components/OrderPopup/OrderPopup';
import createStore from './redux/createStore';
import { Provider } from 'react-redux'
import MenuList from './components/MenuList/MenuList'
import Footer from './components/Footer/Footer'
import AboutUs from './components/AboutUs/AboutUs';
const store = createStore();

function App() {
  return (
    <Provider store={store} className="App">
      <Header />
      <Slider />
      <OrderButtons />
      <OrderPopup />
      <MenuList />
      <Footer />
    </Provider>
  );
}

export default App;
