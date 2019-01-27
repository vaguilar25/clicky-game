import React from "react";
import "./style.css";

function FriendCard(props) {

  return (
    
    <div >
      <div >
        <img alt={props.name} 
        src={props.image} 
        onClick={() => props.flipCards(props.id)} 
       onMouseDown={() => props.addColorTitle(props.score)} 
        onMouseUp={() => props.addColorTitleBack(props.score)
        }
        className="click-item"   
        />
      </div>
      
     
     
    </div>
  
  );
}
//since our event handlers need to be callbacks, we normally
//can't pass in arguments without invoking them right away. 
//But by wrapping the removeFriend method in an another function, 
//we can pass the id prop into the inner removeFriend method. 
//When the span is clicked, it calls the anonymous callback function, which then calls the removeFriend method with the friend's id as an argument.

export default FriendCard;
