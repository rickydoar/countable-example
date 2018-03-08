import React, { Component } from 'react';
import LegislationContainer from './components/legislationContainer/index'
import logo from './apple.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailEntered: false,
      legislationArray,
      legislationOpen: null,
    };
    this.setLegislationOpen = this.setLegislationOpen.bind(this);
    this.setEmailEntered = this.setEmailEntered.bind(this);
  }

  setEmailEntered() {
    this.setState({emailEntered: true});
  }

  setLegislationOpen(id) {
    this.setState({legislationOpen: id});
  }

  componentDidMount() {
    window.analytics.page();
    window.analytics.track("Product Detail Viewed", {
      carouselPosition: 5,
      productName: "Manage Bills",
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Countable</h1>
        </header>
        <p className="App-intro">
          To get started, click on the laws currently being considered in Congress. Knowledge is power!
        </p>
        <LegislationContainer
          emailEntered={this.state.emailEntered}
          legislationArray={this.state.legislationArray}
          legislationOpen={this.state.legislationOpen}
          setEmailEntered={this.setEmailEntered}
          setLegislationOpen={this.setLegislationOpen}/>
      </div>
    );
  }
}

const legislationArray = [
  {
    id: 1,
    name: 'H.R. 861: To terminate the Environmental Protection Agency.',
    info: 'It’s been a rough 2017 for the Environmental Protection Agency.Four days into Donald Trump’s presidency, EPA staff were banned from speaking with reporters or updating social media, as the administration delayed implementation of 30 Obama-era environmental rules. EPA’s new administrator Scott Pruitt — who remains a plaintiff in multiple suits against the EPA — saw his emails released, revealing the extent to which he cooperated with fossil fuel interests and other anti-environmental donors as Oklahoma attorney general. Just this week, the White House unveiled their proposed budget which would slash EPA funding by 31 percent, its lowest level adjusted for inflation in four decades. Now a Republican bill in Congress might abolish the EPA entirely.',
    status: 'Introduced on Feb 3, 2017. This bill is in the first stage of the legislative process. It was introduced into Congress on February 3, 2017. It will typically be considered by committee next before it is possibly sent on to the House or Senate as a whole.',
    prognosis: 11
  },
  {
    id: 2,
    name: 'H.R. 175: ObamaCare Repeal Act',
    info: 'This bill is an alternate proposal to repeal (but not replace) the Affordable Care Act (ACA, also known as Obamacare). The leading proposal is H.R. 1628.',
    status: 'Introduced on Jan 3, 2017. This bill is in the first stage of the legislative process. It was introduced into Congress on January 3, 2017. It will typically be considered by committee next before it is possibly sent on to the House or Senate as a whole.',
    prognosis: 2
  },
  {
    id: 3,
    name: 'H.R. 354: Defund Planned Parenthood Act of 2017',
    info: 'To provide for a moratorium on Federal funding to Planned Parenthood Federation of America, Inc.',
    status: 'Introduced on Jan 6, 2017. This bill is in the first stage of the legislative process. It was introduced into Congress on January 6, 2017. It will typically be considered by committee next before it is possibly sent on to the House or Senate as a whole.',
    prognosis: 6
  },
  {
    id: 4,
    name: 'H.R. 1457: MOBILE Act of 2017',
    info: 'To establish requirements for use of a driver\'s license or personal identification card by certain financial institutions for opening an account or obtaining a financial product or service, and for other purposes.',
    status: 'Ordered Reported on Dec 13, 2017',
    prognosis: 33
  },
  {
    id: 5,
    name: 'H.R. 1426: Federal Savings Association Charter Flexibility Act of 2017',
    info: 'To amend the Home Owners\' Loan Act to allow Federal savings associations to elect to operate as national banks, and for other purposes.',
    status: 'Ordered Reported on Jan 18, 2018',
    prognosis: 31
  },
  {
    id: 6,
    name: 'H.R. 2255: HOME Act',
    info: 'To clarify that nonprofit organizations may accept donated mortgage appraisals, and for other purposes.',
    status: 'Ordered Reported on Jan 18, 2018',
    prognosis: 28
  },
  {
    id: 7,
    name: 'H.R. 695: Child Protection Improvements Act of 2017',
    info: 'H.R. 695 directs the Department of Justice to establish a program to allow organizations that provide services to youth, the elderly, and the disabled to obtain information from criminal background checks in the Federal Bureau of Investigation (FBI) fingerprint database. Specifically, the legislation ensures these organizations have access to the FBI’s fingerprint searches in a timely and effective manner and protects privacy rights by ensuring that specific information of a criminal record is not disclosed without the explicit consent of the volunteer or employee.',
    status: 'Passed Senate with Changes (back to House) on Oct 16, 2017',
    prognosis: 60
  },
  {
    id: 8,
    name: 'H.R. 4292: Financial Institution Living Will Improvement Act of 2017',
    info: 'To reform the living will process under the Dodd-Frank Wall Street Reform and Consumer Protection Act.',
    status: 'Ordered Reported on Nov 15, 2017',
    prognosis: 29
  },
  {
    id: 9,
    name: 'S. 65: Presidential Conflicts of Interest Act of 2017',
    info: 'The president and vice president are currently exempt from any financial conflict of interest rules. And President Trump, with his global business and real estate empire, has created an “unprecedented” number of White House conflicts of interest. Introduced by Sen. Elizabeth Warren (D-MA) and Rep. Katherine Clark (D-MA5), the legislation would require the president and vice president to both reveal and divest themselves from any potential financial conflicts of interest. The bill would also apply for presidential and vice presidential spouses, children, and appointees. The legislation would also require both major party presidential nominees to publicly release their tax returns from the preceding three years, adapted from Sen. Ron Wyden’s (D-OR) Presidential Tax Transparency Act, which GovTrack Insider previously covered in November.',
    status: 'Introduced on Jan 9, 2017. This bill is in the first stage of the legislative process. It was introduced into Congress on January 9, 2017. It will typically be considered by committee next before it is possibly sent on to the House or Senate as a whole.',
    prognosis: 15
  },
  {
    id: 10,
    name: 'H.R. 367: Hearing Protection Act of 2017',
    info: 'This bill amends the Internal Revenue Code to: (1) eliminate the $200 transfer tax on firearm silencers, and (2) treat any person who acquires or possesses a firearm silencer as meeting any registration or licensing requirements of the National Firearms Act with respect to such silencer. Any person who pays a transfer tax on a silencer after October 22, 2015, may receive a refund of such tax. The bill amends the federal criminal code to preempt state or local laws that tax or regulate firearm silencers.',
    status: 'Introduced on Jan 9, 2017. This bill is in the first stage of the legislative process. It was introduced into Congress on January 9, 2017. It will typically be considered by committee next before it is possibly sent on to the House or Senate as a whole.',
    prognosis: 13
  },
  {
    id: 11,
    name: 'H.R. 1628: American Health Care Act of 2017',
    info: 'The American Health Care Act of 2017 (AHCA) was a leading proposal in the first half of 2017 by House Republicans to "repeal and replace" the Affordable Care Act (aka Obamacare, but we\'ll abbreviate it ACA) and "defund" Planned Parenthood. It was also the vehicle for passage of the Senate Republicans\' leading proposals. The bill was brought to the House and Senate floors under the rules of the budget reconciliation process, by which one bill each year is immune to a Senate filibuster so long as it meets certain requirements related to the budget. By being immune to a filibuster, only 51 votes were needed in the Senate rather than 60. But during Senate proceedings the bill was nevertheless ruled out of order for having provisions that were not related to the budget, forcing several votes with 60-vote thresholds.',
    status: 'Passed House (Senate next) on May 4, 2017',
    prognosis: 29
  },
];

export default App;
