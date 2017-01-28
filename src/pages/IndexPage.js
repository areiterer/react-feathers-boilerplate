import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class IndexPage extends Component {
	render() {
		return (
			<div className="container">
				<h2 className="text-center">Welcome!</h2>
				<hr />
				<div className="jumbotron">
					<p>
						<strong>This is my React demo application!</strong>
					</p>
					<p>You can try out the functions of the demo:</p>
					<ol className="lead">
						<li><Link to="/login">Login</Link></li>
						<li><Link to="/register">Registration</Link></li>
					</ol>
				</div>
			</div>
		);
	}
}

export default IndexPage;