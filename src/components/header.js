
import PropTypes from "prop-types"
import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

class Header extends React.Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar fixed="top" light expand="sm">
        <div className="container">
        <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about">О Нас</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contacts">Контакты</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">Правила</NavLink>
              </NavItem>
            </Nav>
          </Collapse>   
        </div>
         
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

// const Header = ({ siteTitle }) => (
//   <header className="header"
//     style={{
//       background: `black`,
//       marginBottom: `1rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: `auto`,
//         padding: `10px`,
//         backgroundColor:`black`,
//         textAlign: `right`,
//       }}
//     >
//       <h1 className="menu" style={{ margin: 0 }}>
//         <Link 
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//             backgroundColor:`black`,
//             fontSize:`30px`,
            
//           }}
//         >Syndicate Trade \
//         </Link>
//         <Link
//          to="/contacts/"
//          style={{
//           color: `white`,
//           textDecoration: `none`,
//           backgroundColor:`black`,
//           fontSize:`30px`,
//         }}
//          > Контакты \
//          </Link>
//          <Link
//          to="/about/"
//          style={{
//           color: `white`,
//           textDecoration: `none`,
//           backgroundColor:`black`,
//           fontSize:`30px`,
//         }}
//          > О Нас \
//          </Link>
//       </h1>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }


// export default Header
