import React, { Component, PropTypes } from 'react';

class ResendVerificationForm extends Component {
  constructor(props) {
    super(props);

    this._handleResend = this._handleResend.bind(this);
  }

  _handleResend() {
    this.props.onResend(this.props.email);
  }

  render() {
    return (
      <div>
        <p>Your email address has not been verified yet. If you did
          not get a verification mail, you can request a new one.</p>
        <button onClick={this._handleResend}
        className="btn btn-lg btn-primary btn-block">Request new verification</button>
      </div>
    );
  }
}

ResendVerificationForm.propTypes = {
  email: PropTypes.string.isRequired,
  onResend: PropTypes.func.isRequired
};

export default ResendVerificationForm;