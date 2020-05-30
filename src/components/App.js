import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Category from "../layouts/Category";
import Tab from "../layouts/Tab";

function App() {
    
  return (
    <div>
      <Header/>
      <Category/><Tab/>
      <Footer/>
    </div>
  )
}

export default App;
