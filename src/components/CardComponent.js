import React from "react";

const Card = (props) => {
    return(
        <div>
            <h5>{props.user.name}</h5>
            <h5>{props.user.company.name}</h5>
        </div>
    )
};
export default Card;