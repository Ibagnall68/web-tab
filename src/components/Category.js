import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Category(props) {  

    function handleClick() {
        props.onDelete(props.id);
    }
    return (
        <div className="note">
            
            <span>{props.title}</span>
            <button className="delete" onClick={handleClick}>
                <DeleteIcon />
            </button>
            
        
       
        
        
        </div>
    );
}
