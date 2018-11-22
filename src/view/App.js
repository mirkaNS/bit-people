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
      isGrid: false,
      myUser: []
    }
  }

  componentDidMount() {
    userService.fetchUserData()
      .then((myUser) => {
        this.setState({ myUser: myUser })
      })
  }

  componentWillUpdate() { }

  componentDidUpdate() { }

  onClickChangeMode = (event) => {
    // const myUser = userService.getData();
    // this.setState({ myUser })

    const isGrid = !this.state.isGrid;
    this.setState({ isGrid })

  }

  render() {
    return (
      <Fragment>

        <Header />

        <main className="container clearfix">

          <button type="button" className="btn btn-info container" onClick={this.onClickChangeMode} >Click to Change</button>
          {/* <UserCard list={getData} /> */}
          <UserList className="profile" list={this.state.myUser} isGrid={this.state.isGrid} />
        </main>
        <Footer />
      </Fragment >

    );
  }
}
export default App;
