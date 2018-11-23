import React from "react"
import { UserListItem } from "./UserListItem"
import { UserCard } from "./UserCard"
import "./UserList.css"


const UserList = (props) => {

    const userList = props.list.map((user, i) => {
        console.log(user)
        const date = new Date(user.birthday).toLocaleDateString("en-GB").split("/").join(".");
        return <UserListItem key={i} name={user.name} image={user.image.thumbnail} email={user.hideEmail()} birthday={date + "."} />
    })

    const userCard = props.list.map((user, i) => {
        const date = new Date(user.birthday).toLocaleDateString("en-GB").split("/").join(".");
        return <UserCard key={i} name={user.name.charAt(0).toUpperCase() + user.name.slice(1)} image={user.image.large} email={user.hideEmail()} birthday={date + "."} />
    })

    return (
        <div className="row">
            {props.isGrid ? userCard : userList}
        </div>
    );
}

export { UserList }