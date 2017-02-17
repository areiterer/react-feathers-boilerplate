import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';

const styles = {
	hidden: {
		display: 'none'
	}
};

const Header = (props) => (
	<Navbar inverse collapseOnSelect>
		<Navbar.Header>
			<Navbar.Brand>
				<Link to="/">Demo App</Link>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
				<IndexLinkContainer to="/">
					<NavItem eventKey={1}>Home</NavItem>
				</IndexLinkContainer>
				<LinkContainer style={!props.loggedIn ? styles.hidden : {}} to="/articles">
					<NavItem eventKey={2}>Articles</NavItem>
				</LinkContainer>
			</Nav>
			<Nav pullRight>
				<LinkContainer style={props.loggedIn ? styles.hidden : {}} to="/login">
					<NavItem eventKey={1}>Sign in</NavItem>
				</LinkContainer>
				<LinkContainer style={props.loggedIn ? styles.hidden : {}} to="/register">
					<NavItem eventKey={2}>Sign up</NavItem>
				</LinkContainer>
				<NavItem onClick={props.onLogout} eventKey={3} style={!props.loggedIn ? styles.hidden : {}}>Logout</NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

Header.propTypes = {
	loggedIn: PropTypes.bool.isRequired,
	onLogout: PropTypes.func.isRequired
};

export default Header;