import React from 'react';
import './index.css';
import EmailSenator from '../emailSenator/index'

class Legislation extends React.Component {
  constructor(props) {
    super(props);
    this.toggleLegislation = this.toggleLegislation.bind(this);
    this.actionTaken = this.actionTaken.bind(this);
    this.state = {action: false};
  }

  actionTaken(action) {
    this.setState({action});
  }

  toggleLegislation() {
    const id = this.props.legislation.id;
    if (id === this.props.legislationOpen) {
      window.analytics.track(
        'Click Legislation',
        {
          Action: 'Close',
          'Legislation Name': this.props.legislation.name,
          'Legislation Action Taken': this.state.action,
          'Prognosis Percentage': this.props.legislation.prognosis,
          'Position In List': this.props.legislation.id
        }
      );
      this.props.setLegislationOpen(null);
    } else {
      window.analytics.track(
        'Click Legislation',
        {
          Action: 'Open',
          'Legislation Name': this.props.legislation.name,
          'Legislation Action Taken': this.state.action,
          'Prognosis Percentage': this.props.legislation.prognosis,
          'Position In List': this.props.legislation.id
        }
      );
      this.props.setLegislationOpen(id);
    }
  }

  render() {
    return (
      <div className='legislation'>
        <div className='legislation-name' onClick={this.toggleLegislation}>
          {this.props.legislation.name}
        </div>
        {this.props.legislationOpen === this.props.legislation.id &&
          <div className='legislation-details'>
            <div className='legislation-info'>
              <div className='legislation-header'>Info:</div>
              {this.props.legislation.info}
            </div>
            <div className='legislation-status'>
              <div className='legislation-header'>Status:</div>
              {this.props.legislation.status}
            </div>
            <div className='legislation-prognosis'>
              <div className='legislation-header'>Prognosis:</div>
              {this.props.legislation.prognosis}% chance of being according to Skopos Labs
            </div>
            <div className='email-senator'>
              <div className='legislation-header'>Make your voice heard:</div>
              Email your senator your vote! Enter your email, and choose your stance below!
            </div>
            <EmailSenator
              action={this.state.action}
              actionTaken={this.actionTaken}
              emailEntered={this.props.emailEntered}
              legislation={this.props.legislation}
              setEmailEntered={this.props.setEmailEntered}
              text='Email your senator'/>
          </div>
        }
      </div>
    );
  }
}
export default Legislation;
