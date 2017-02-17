import React, { Component, PropTypes } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';

import LoginForm from '../LoginForm';
import ResendVerificationForm from '../ResendVerificationForm';

import * as actions from '../../actions/actions';

class LoginPage extends Component {
  componentDidMount() {
    let action = this.props.params.action;
    if (action === 'verify' && this.props.params.slug) {
      console.log('verify my mail!');
      this.props.verifyEmail(this.props.params.slug);
    }
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={8} xsOffset={2} sm={6} smOffset={3} md={4} mdOffset={4} lg={4} lgOffset={4}>
            {
              this.props.params.action === 'pendingVerification'
                ? <ResendVerificationForm email={this.props.params.slug}
                                          onResend={this.props.resendVerificationMail}/>
                : !this.props.loggedIn
                  ? <LoginForm onLogin={this.props.login}/>
                  : <h2>You are already logged in.</h2>
            }
          </Col>
        </Row>
      </Grid>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
};

const
  mapDispatchToProps = (dispatch) => {
    return {
      login: (email, password) => {
        dispatch(actions.login(email, password));
      },
      verifyEmail: (slug) => {
        dispatch(actions.verifyEmail(slug));
      },
      resendVerificationMail: (email) => {
        dispatch(actions.resendVerificationMail(email));
      }
    }
  };

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  }
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps
  }
};

export { LoginPage };
export const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(LoginPage);