import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
   render() {
    return <div className="header" >
       <Link to={"/profile/" }>Профиль</Link>
    </div>
   }
}
