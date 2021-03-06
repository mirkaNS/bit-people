import React, { Fragment } from 'react';


import { Header } from "./partials/Header"
import { Footer } from "./partials/Footer"

import { UserList } from "./users/UserList"
import * as userService from "../services/UserService"

import "../../node_modules/materialize-css/dist/css/materialize.min.css"
import './App.css';


class App extends React.Component {
  constructor(props) {
    console.log(props)
    super(props)

    this.state = {
      isGrid: this.isGridInUse(),
      myUser: [],
    }
  }

  isGridInUse = () => {
    return !!JSON.parse(localStorage.getItem("isGrid"))
  }

  componentDidMount() {
    userService.fetchUserData()
      .then((myUser) => {
        this.setState({
          myUser: myUser,
        });
      });
  }

  componentWillUpdate() { }

  componentDidUpdate() { }

  onClickChangeMode = (event) => {

    const isGrid = !this.state.isGrid;

    localStorage.setItem("isGrid", isGrid);

    this.setState({ isGrid });
  }

  onClickRefresh = (event) => {

    userService.fetchUserData()
      .then((user) => {
        this.setState({
          myUser: user,
        })
      })
  }



  render() {
    return (
      <Fragment>

        <Header onClick={this.onClickChangeMode} isGrid={this.state.isGrid} refresh={this.onClickRefresh} />

        <main className="container clearfix">

          {/* <button type="button" className="btn btn-info container" onClick={this.onClickChangeMode} >Click to Change</button> */}
          {/* <UserCard list={getData} /> */}
          <UserList list={this.state.myUser} isGrid={this.state.isGrid} />
        </main>
        <Footer />
      </Fragment >

    );
  }
}
export default App;
