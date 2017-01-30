import React from 'react';
import { Link } from 'react-router';

const IndexPage = () => (
	<div className="container">
		<h2 className="text-center">Welcome!</h2>
		<hr />
		<div className="jumbotron">
			<p>
				<strong>This is my React demo application!</strong>
			</p>
			<p>It was built for practicing and testing authentication topics with React, Redux and FeathersJS</p>
			<p>At the moment the app consists of the following functions</p>

			<div className="row">
				<div className="col-xs-offset-3 col-xs-6">
					<ul style={{ textAlignAll: 'left' }}>
						<li>Register a new user</li>
						<li>Login/Logout</li>
						<li>Authorized routes: Show the <Link to="/articles">Articles</Link> page only to logged on users</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
);

export default IndexPage;