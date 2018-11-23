import React from "react"
import './UserCard.css'
const UserCard = (props) => {

    return (
        <div className="col s12 m4">
            <div className="card">
                <div className="card-image">
                    <img src={props.image} alt={props.image} />
                    <span className="card-title">{props.name}</span>
                </div>
                <div className="card-content">
                    <p>Email: {props.email} </p>
                    <p>Date of birth: {props.birthday}</p>
                </div>

            </div>
        </div>

    )

}
export { UserCard }