import {BrowserRouter, Routes, Route} from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  
  return ( 
  <BrowserRouter>
     <NavBar />
     <Routes>
      <Route path="/" element={<ItemListContainer greeting="PRODUCTOS" />}/>
      <Route path="/category/:id" element={<ItemListContainer greeting="PRODUCTOS" />}/>
      <Route path="/items/:id" element={<div>PRUEBA ROUTER</div>}/>
     </Routes>
     
  </BrowserRouter> 
  );
}

export default App;
