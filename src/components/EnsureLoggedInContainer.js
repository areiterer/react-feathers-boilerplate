import { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';


class EnsureLoggedInContainer extends Component {
	componentDidMount() {
		if (!this.props.isLoggedIn) {
			browserHistory.replace('/login');
		}
	}

	render() {
		return this.props.isLoggedIn
			? this.props.children
			: null
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.loggedIn
	}
};

EnsureLoggedInContainer = connect(mapStateToProps, null)(EnsureLoggedInContainer);

export default EnsureLoggedInContainer;