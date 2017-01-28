import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-inverse navbar-static-top">
				<div className="container">
					<div id="navbar-collapse" className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							<li><Link to="/">Home</Link></li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;