import React, { useState } from "react";


export default function CreateCategory(props) {

    const [category, setCategory] = useState({title: ""});

    function handleChange(event) {

        const {name, value} = event.target;

        setCategory(prevCat => {
            return {
                ...prevCat, [name]: value
            };
        });
    }
    function submitCategory(event) {
        props.addCat(category);
        setCategory({ // after the note has been added this clears the input field ready for the new note.
            title: ""
          });
          event.preventDefault();
        
    }
    
    return (
        <div>
            <form className="create-category">
                <input
                    name="title"
                    onChange={handleChange} // this allows for below state to be changed, when there is a change in the field. It calls the function to know how to handle the change. It is only handling state and it not adding visible note.
                    value={category.title} // this allows the use of current state from the const [title, setTitle] above.
                    placeholder="Enter New Category Here"
                />
        <button className="button sideAdd" onClick={submitCategory}>+</button>
            </form>
      </div>
    );
}