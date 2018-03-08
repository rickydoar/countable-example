import React from 'react';
import * as EmailValidator from 'email-validator';
import './index.css';

class EmailSenator extends React.Component {
  constructor(props) {
    super(props);
    this.handleAction = this.handleAction.bind(this);
    this.updateInputText = this.updateInputText.bind(this);
    const emailDisabled = !this.props.emailEntered;
    this.state = {emailDisabled, inputText: ''};
  }

  handleAction(e) {
    if (!this.props.emailEntered && !EmailValidator.validate(this.textInput.value)) {
      alert('not a valid email');
      return;
    } else if (!this.props.emailEntered) {
      const email = this.textInput.value.toLowerCase();
      window.analytics.alias(email, {email});
      window.analytics.identify(email, {email});
      window.analytics.track(
        'Email Entered',
        {
          'Legislation Name': this.props.legislation.name,
          'Prognosis Percentage': this.props.legislation.prognosis,
          'Position In List': this.props.legislation.id,
        }
      );
    }
    window.analytics.track(
      'Contact Lawmaker',
      {
        'Legislation Action Taken': e.currentTarget.children[0].innerText,
        'Legislation Name': this.props.legislation.name,
        'Prognosis Percentage': this.props.legislation.prognosis,
        'Position In List': this.props.legislation.id,
      }
    );
    this.props.setEmailEntered();
    this.props.actionTaken(e.currentTarget.children[0].innerText);
  }

  updateInputText(e) {
    const inputText = e.target.value;
    const emailDisabled = inputText === '';
    this.setState({
      inputText: e.target.value,
      emailDisabled,
    });
  }

  render() {
    return (
      <div className='create-container'>
        {!this.props.emailEntered &&
          <input
            placeholder="Enter email"
            type="text"
            ref={(input) => { this.textInput = input; }}
            onChange={this.updateInputText}/>
        }
        {(!this.props.action || this.props.action === 'Yay!') &&
          <div
            className={'save-button segment-button segment-green' +
              (this.state.emailDisabled ? ' save-disabled' : '') +
              (this.props.emailEntered ? ' email-entered' : '') +
              (this.props.action ? ' action-completed' : '')
            }
            onClick={this.handleAction}>
            <div className='button-text'>Yay!</div>
          </div>
        }
        {(!this.props.action || this.props.action === 'Nay!') &&
          <div
            className={'save-button segment-button segment-red' +
              (this.state.emailDisabled ? ' save-disabled' : '') +
              (this.props.action ? ' action-completed' : '')
            }
            onClick={this.handleAction}>
            <div className='button-text'>Nay!</div>
          </div>
        }
      </div>
    );
  }
}
export default EmailSenator;
