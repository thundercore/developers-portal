/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const MAILCHIMP_LIST_ID = "";

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    return (
      <div className="homeContainer">
        <div className="wrapper homeWrapper">
          <div className="startBlock">
            <div className="main-title">Build your DApps</div>
            <div className="main-title-sub">on ThunderCore</div>
            <a className="startButton orangeButton" href="docs/deploy-your-own-game/">START</a>
          </div>
          <img className="bgLogo" src="img/build_dapps.png"/>
        </div>
      </div>
    );
  }
}

class HelpfulLinks extends React.Component {

  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const Link = props => (
      <div className="helpfulLinksBlockLink">
        <a href={props.href} target={props.target || '_blank'}>
          {props.title}
          <div className="icon-chevron">
            <Chevron fill="#424242"/>
          </div>
          {/*<img className="icon-chevron" />*/}
        </a>
      </div>
    );

    const Block = props => (
      <div className="helpfulLinksBlock">
        <div className="helpfulLinksBlockTitle">
          {props.title}
        </div>
        {props.children}
      </div>
    );

    return (
      <div className="helpfulLinks">
        <Block title="Build on Mainnet">
          <Link href="https://faucet.thundercore.com"  title="Get Free Thunder Tokens (TT)"/>
          <Link href="https://scan.thundercore.com" title="ThunderScan (Mainnet)"/>
        </Block>

        <Block title="Test on Testnet">
          <Link href="https://faucet-testnet.thundercore.com" title="Get Free Test Tokens"/>
          <Link href="https://scan-testnet.thundercore.com" title="ThunderScan (Testnet)"/>
        </Block>

        <Block title="Dev Tutorials">
          <Link href={docUrl('deploy-your-own-game')} target="_self" title="Deploy Your Own Game in Minutes"/>
          <Link href={docUrl('migrate-to-thunder')} target="_self" title="Migrate from Ethereum"/>
          <Link href={docUrl('erc20-smart-contract')} target="_self" title="Deploy Your Own ERC-20"/>
          <Link href={docUrl('get-tokens')} target="_self" title="How to Get Thunder Tokens"/>
        </Block>

        <Block title="Resources">
          <Link href={docUrl('faqs/general')} target="_self" title="Frequently Asked Questions (FAQ)"/>
          <Link href="https://discordapp.com/invite/5EbxXfw" title="Get in Touch on Discord"/>
          <Link href="mailto:info@thundercore.com" title="Email Us"/>
        </Block>
      </div>
    )
  }
}

class JumpStart extends React.Component {

  render() {

    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    return (
      <div className="jumpStart">
        <div className="jumpStartImg">
          <img src={'/img/Jumpstart.png'}/>
        </div>

        <form className="jumpStartMain"
          action="https://thundercore.us18.list-manage.com/subscribe/post?u=9e820737f58c3f0aa1940427b&amp;id=3338803d92"
          method="post" id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form" className="validate" target="_blank"
          noValidate>

          <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
            <input type="text" name="b_9e820737f58c3f0aa1940427b_3338803d92" tabIndex="-1" value="" />
          </div>

          <div className="jumpStartTitle">Subscribe to our newsletter for more and latest developer news</div>

          <div className="jumpStartContent">
              Subscribe to get access to our latest developer news and initiatives!
          </div>
          <div className="jumpStartEmail">
            <input type="email" className="emailInput" value="" name="EMAIL" id="mce-EMAIL"/>
            <input type="submit" className="subscribeButton orangeButton" value="Subscribe"/>
          </div>
        </form>
      </div>
    )
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    return (
      <div className="index">
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <HelpfulLinks siteConfig={siteConfig} language={language} />
        </div>
        <div className="jumpStartContainer">
          <JumpStart siteConfig={siteConfig} language={language} />
        </div>
      </div>
    );
  }
}

class Chevron extends React.Component {

  render() {
    const {fill} = this.props;

    return (
      <svg width="9px" height="14px" viewBox="0 0 9 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>icon_chevron-right</title>
        <g id="Page-1" stroke="none" strokeWidth="1" fill={fill} fillRule="evenodd">
          <g id="dev_portal" transform="translate(-917.000000, -948.000000)">
            <g id="panel_01" transform="translate(299.000000, 794.000000)">
              <g id="icon_chevron-right" transform="translate(618.000000, 154.000000)">
                <polygon id="Shape" points="1.6 0 2.0301221e-15 1.63333333 5.25714286 7 2.0301221e-15 12.3666667 1.6 14 8.45714286 7"></polygon>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

module.exports = Index;
