import React from "react"

import "./Header.css"

const Header = (props) => {

    console.log(props);
    const icon = props.isGrid ? <i className="material-icons">view_module</i> : <i className="material-icons">view_list</i>

    return (

        <header>
            <nav>
                <div className="nav-wrapper container">
                    <a className="brand-logo center">BIT people</a>

                    <ul className="right hide-on-med-and-down">
                        {/* <li><a href="sass.html"><i class="material-icons">search</i></a></li> */}

                        <li onClick={props.onClick}><a>{icon}</a></li>

                        {/* <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li> */}
                        {/* <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li> */}
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export { Header }