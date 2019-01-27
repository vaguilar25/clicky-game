import React from "react";
import "./style.css";

function Title(props) {
  return (
  
    <nav class="navbar">
      <ul>
        <li class="brand"><a href="/">Clicky Game</a></li>
        <li class={props.color}>{props.headTitle}</li>
        <li> Score {props.score} | Top Score {props.topScore}</li>
      </ul>
            
    </nav>
   


  )

}

export default Title;
