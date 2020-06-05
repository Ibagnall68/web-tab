import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "../layouts/SideBar";
import Category from "./Category";
import CreateCategory from "./CreateCategory";


function App() {
    
    const [category, setCategory] = useState([]);
    

    function addCategory (newCat) {
      setCategory(prevCat => {
        return [...prevCat, newCat];
        
      });
    }

    function deleteCategory (id) {
      setCategory(prevCat => {
        return prevCat.filter((catItem, index) => {
          return index !== id;
        });
      });
    }
  return (
    <div>
      
        {/* <Header/> */}
      
        <SideBar />
        <CreateCategory addCat={addCategory} />
       
       {category.sort((a, b) => a.title > b.title ? 1 : -1).map((catItem, index) => { //map is like forEach. It is going through(loop) each item(noteItem) in the notes(above) array and will return below Note and props to the Note component to handle. */}
          
        return (

          <Category // this is calling the Note function from the Note component and passing it the information below.
            key={index} // what is the key of the new note that needs to be passed to the Note component for handling. The key is mandatory but can be UUID? or in this instance we use the id index.
            id={index} // what is the title of the new note that needs to be passed to the Note component for handling.
            title={catItem.title} // what is the title of the new note that needs to be passed to the Note component for handling.
            onDelete={deleteCategory}
            />
            
              
              
            ); 
            
         })}

       
    );
        <Footer />
          
          
    </div>
   
  );
}

export default App;
