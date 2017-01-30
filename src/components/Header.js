import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const styles = {
	hidden: {
		display: 'none'
	}
};

const Header = () => (
	<nav className="navbar navbar-inverse navbar-static-top">
		<div className="container">
			<div id="navbar-collapse" className="collapse navbar-collapse">
				<ul className="nav navbar-nav">
					<li><Link to="/">Home</Link></li>
					<li style={!this.props.loggedIn ? styles.hidden : {}}><Link to="/articles">Articles</Link></li>
				</ul>
				<ul className="nav navbar-nav navbar-right">
					<li style={this.props.loggedIn ? styles.hidden : {}}><Link to="/login">Login</Link></li>
					<li style={!this.props.loggedIn ? styles.hidden : {}}><a href="#" onClick={this.props.onLogout}>Logout</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
);

Header.propTypes = {
	loggedIn: PropTypes.bool.isRequired,
	onLogin: PropTypes.func.isRequired,
	onLogout: PropTypes.func.isRequired
};

export default Header;