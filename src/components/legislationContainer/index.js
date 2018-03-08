import React from 'react';
import Legislation from '../legislation/index'
import './index.css';

class LegislationContainer extends React.Component {
  render() {
    return (
      <div className='legislation-container'>
        {Object.keys(this.props.legislationArray).map(legislation => {
          return (
            <Legislation
              emailEntered={this.props.emailEntered}
              key={legislation}
              legislation={this.props.legislationArray[legislation]}
              legislationOpen={this.props.legislationOpen}
              setEmailEntered={this.props.setEmailEntered}
              setLegislationOpen={this.props.setLegislationOpen}/>
          )
        }, this)}
      </div>
    );
  }
}
export default LegislationContainer;
