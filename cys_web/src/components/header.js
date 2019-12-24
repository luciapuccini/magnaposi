import React from "react";
import "./header.css";

class Header extends React.Component {
  render() {
    console.log(this.props)
    return (
      <header className="header">
        <p>Logo</p>
        <ul className='link-items'>
          {this.props.headerProps.map(item => (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </header>
    );
  }
}

export default Header;
