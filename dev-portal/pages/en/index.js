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
            <a className="startButton orangeButton" href="docs/dev-faq-general/">START</a>
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
          <Link href={docUrl('dev-faq-general')} target="_self" title="General Information"/>
          <Link href={docUrl('guideline-submit')} target="_self" title="Submit guideline for DApp"/>
          <Link href={docUrl('deploy-your-own-game')} target="_self" title="Deploy Your Own Game in Minutes"/>
          <Link href={docUrl('migrate-to-thunder')} target="_self" title="Migrate from Ethereum"/>
        </Block>

        <Block title="Resources">
          <Link href="https://solidity.readthedocs.io/en/develop/" title="Solidity"/>
          <Link href="https://support-center.thundercore.com/docs/metamask/" title="How to use Metamask"/>
          <Link href="https://wj.qq.com/s2/5812973/29f6" title="Token Listing Submission"/>
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
          <img src={'/img/ttsocial.png'}/>
        </div>

        <form className="jumpStartMain"
          action="https://docs.google.com/forms/d/e/1FAIpQLSeHfya9a8MqO3h015hvH6JG9t57kowIFwZFW0IdZ6XufvEOLA/viewform"
          method="post" id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form" className="validate" target="_blank"
          noValidate>

          <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
            <input type="text" name="b_9e820737f58c3f0aa1940427b_3338803d92" tabIndex="-1" value="" />
          </div>

          <div className="jumpStartTitle">Developer Jumpstart Program</div>

          <div className="jumpStartContent">
              The goal of the ThunderCore Developer Jumpstart Program is to get you through the first stage of developing your crypto DApp or building your startup.
          </div>
          <div className="jumpStartEmail">
            <input type="submit" className="subscribeButton orangeButton" value="Submit Now"/>
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
