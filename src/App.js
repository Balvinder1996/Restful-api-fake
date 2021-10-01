import './App.scss';
import Axios from 'axios'
import Router from './components/Router/Router';
Axios.defaults.baseURL='https://fakestoreapi.com';
function App() {
  return (
    <>
     <Router/>
    </>
  )
}

export default App;
