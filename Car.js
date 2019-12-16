
import React from "react";

export default props=>(
<>
    <h3>Car Name:{props.name}</h3>
    <p>YEAR: <strong>{props.year}</strong></p>
    {props.children}
</>

)