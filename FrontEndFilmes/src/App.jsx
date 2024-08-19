import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavbarApp from './components/NavbarApp';
import { Outlet} from "react-router-dom";


function App() {

  return (
    <>
    <div className="App">
      <NavbarApp></NavbarApp>
    </div>
     <div className="container-app">
      <Outlet></Outlet>
     </div>
    </>
  )
}

export default App
