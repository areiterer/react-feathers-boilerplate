import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const styles = {
	hidden: {
		display: 'none'
	}
};

const Header = (props) => (
	<nav className="navbar navbar-inverse navbar-static-top">
		<div className="container">
			<div id="navbar-collapse" className="collapse navbar-collapse">
				<ul className="nav navbar-nav">
					<li><Link to="/">Home</Link></li>
					<li style={!props.loggedIn ? styles.hidden : {}}><Link to="/articles">Articles</Link></li>
				</ul>
				<ul className="nav navbar-nav navbar-right">
					<li style={props.loggedIn ? styles.hidden : {}}><Link to="/login">Login</Link></li>
					<li style={props.loggedIn ? styles.hidden : {}}><Link to="/register">Register</Link></li>
					<li style={!props.loggedIn ? styles.hidden : {}}><a href="#" onClick={props.onLogout}>Logout</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
);

Header.propTypes = {
	loggedIn: PropTypes.bool.isRequired,
	onLogout: PropTypes.func.isRequired
};

export default Header;