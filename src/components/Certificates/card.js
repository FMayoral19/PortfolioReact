import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img 
                src={`../images/${props.coverImg}`} 
                className="card--image"  alt=""
            />
            <div className="card--stats">
                <span className="gray">{props.Organization}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">Grade: {props.grade}</span>
            </p>
        </div>
    )
}