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
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">
            <div className="startBlock">
              <img src="img/banner_headline.png"/>
              <a className="startButton orangeButton" href="/docs/deploy-your-own-game">Start</a>
            </div>
            <img className="bgLogo" src="img/build_dapps.png"/>
          </div>
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
        <a href={props.href} target="_blank">{props.title}</a>
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
          <Link href="https://faucet.thundercore.com" title="Get Free Thunder Tokens (TT)"/>
          <Link href="https://scan.thundercore.com" title="ThunderScan (Mainnet)"/>
        </Block>

        <Block title="Test on Testnet">
          <Link href="https://faucet-testnet.thundercore.com" title="Get Free Test Tokens"/>
          <Link href="https://scan-testnet.thundercore.com" title="ThunderScan (Testnet)"/>
        </Block>

        <Block title="Dev Tutorials">
          <Link href={docUrl('deploy-your-own-game')} title="Build Your Own Game on ThunderCore in Minutes"/>
          <Link href={docUrl('migrate-to-thunder')} title="Migrate from Ethereum to ThunderCore"/>
          <Link href={docUrl('erc20-smart-contract')} title="Deploy Your Own ERC-20 on ThunderCore"/>
          <Link href={docUrl('get-tokens')} title="How to Get Thunder Tokens"/>
        </Block>

        <Block title="Resources">
          <Link href={docUrl('faqs/general')} title="Frequently Asked Questions (FAQ)"/>
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

          <div className="jumpStartTitle">Developer Jump Start Program</div>

          <div className="jumpStartContent">
            Subscribe to get access to our latest developer news and initiatives, including our upcoming <strong>Developer Jump Start Program! </strong> Learn more about how the program helped our early Beta participants increase revenue by over <div className="over9000">400%</div>
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

module.exports = Index;
