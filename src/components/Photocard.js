import React from "react"; //So we can make use of JSX

function PhotoCard(props){
    console.log(props)
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.url} />
            <div>{props.date}</div>
            <p>
                {props.explanation}
            </p>
            <p>
                {props.url}
            </p>
        </div>
    );

}

export default PhotoCard;