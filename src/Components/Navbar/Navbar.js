import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="leftSide">
          <h1 className="logo">Sportify</h1>
          <div className="search-bar-div">
            <svg
              className="search-icon"
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 12.3261H11.71L11.43 12.0236C12.41 10.7461 13 9.08771 13 7.28362C13 3.26082 10.09 0 6.5 0C2.91 0 0 3.26082 0 7.28362C0 11.3064 2.91 14.5672 6.5 14.5672C8.11 14.5672 9.58999 13.9061 10.73 12.808L11 13.1217V14.007L16 19.5985L17.49 17.9289L12.5 12.3261V12.3261ZM6.5 12.3261C4.01 12.3261 2 10.0738 2 7.28362C2 4.49343 4.01 2.24111 6.5 2.24111C8.99 2.24111 11 4.49343 11 7.28362C11 10.0738 8.99 12.3261 6.5 12.3261Z"
                fill="black"
              />
            </svg>
            <input className="search-bar" type="text" />
          </div>
        </div>
        <div className="rightSide">
          <ul>
            <li>
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                PRODUCT
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                ABOUT
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                CONTACT
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                <span className="shopping-cart">
                  {" "}
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.33337 24C7.86671 24 6.68004 25.2 6.68004 26.6666C6.68004 28.1333 7.86671 29.3333 9.33337 29.3333C10.8 29.3333 12 28.1333 12 26.6666C12 25.2 10.8 24 9.33337 24ZM1.33337 2.66663V5.33329H4.00004L8.80004 15.4533L7.00004 18.72C6.78671 19.0933 6.66671 19.5333 6.66671 20C6.66671 21.4666 7.86671 22.6666 9.33337 22.6666H25.3334V20H9.89337C9.70671 20 9.56004 19.8533 9.56004 19.6666L9.60004 19.5066L10.8 17.3333H20.7334C21.7334 17.3333 22.6134 16.7866 23.0667 15.96L27.84 7.30663C27.9467 7.11996 28 6.89329 28 6.66663C28 5.93329 27.4 5.33329 26.6667 5.33329H6.94671L5.69337 2.66663H1.33337ZM22.6667 24C21.2 24 20.0134 25.2 20.0134 26.6666C20.0134 28.1333 21.2 29.3333 22.6667 29.3333C24.1334 29.3333 25.3334 28.1333 25.3334 26.6666C25.3334 25.2 24.1334 24 22.6667 24Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
