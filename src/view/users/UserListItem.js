import React from "react"
// import './UserListItem.css'
import PropTypes from 'prop-types'

const UserListItem = ({ image, name, email, birthday }) => {
    // console.log(props);
    return (
        <ul className="collection">
            <li className="collection-item avatar">
                <img src={image} alt={image} className="circle" />
                <span className="title">Name: {name}</span>
                <p> <i className="tiny material-icons">email</i> Email: {email} </p>
                <p> <i className="tiny material-icons">cake</i> Date of birth: {birthday}</p>
            </li>
        </ul>
    )
}
















UserListItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    birthday: PropTypes.string
}
UserListItem.defaultProps = {
    image: "https://media.mnn.com/assets/images/2018/07/cat_eating_fancy_ice_cream.jpg.838x0_q80.jpg"
}
export { UserListItem }