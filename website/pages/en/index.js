/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

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
        <div className="jumpStartTitle">Developer Jump Start Program</div>
        <div className="jumpStartImg">
          <img src={'/img/Jumpstart.png'}/>
        </div>
        <div className="jumpStartContent">
          Subscribe to get access to our latest developer news and initiatives, including our upcoming <strong>Developer Jump Start Program! </strong> Learn more about how the program helped our early Beta participants increase revenue by over <div className="over9000">400%</div>
        </div>
        <div className="jumpStartEmail">
          <input type="text" />
          <div className="subscribeButton orangeButton">Subscribe</div>
        </div>
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
