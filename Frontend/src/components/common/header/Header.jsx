import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
// import Signin from '../../forms/signin'
// import { useHistory} from 'react-router-dom'

const Header = () => {
  const [navList, setNavList] = useState(false);
  // const history = useHistory();
  // const handleSignInClick = () => {
  //   history.push("/forms/signin.jsx"); // Navigate using history
  // };

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="../images/logo.png" alt="" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className='button flex'> */}
          {/* Link to the sign-in page */}

          <Link to="/Signup" className="button">
           Signup
          </Link>

          {/* </div> */}

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
