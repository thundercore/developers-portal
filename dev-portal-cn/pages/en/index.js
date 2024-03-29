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
            <div className="main-title">在 ThunderCore 上</div>
            <div className="main-title-sub">搭建你的 DApps</div>
            <a className="startButton orangeButton" href="/docs/dev-faq-general/">开始开发</a>
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
        <Block title="主网开发">
          <Link href="https://faucet.thundercore.com"  title="免费获取 Thunder Tokens (TT币)"/>
          <Link href="https://scan.thundercore.com" title="ThunderCore Scan (主网)"/>
        </Block>

        <Block title="测试网测试">
          <Link href="https://faucet-testnet.thundercore.com" title="免费获取 TT 测试币"/>
          <Link href="https://scan-testnet.thundercore.com" title="ThunderCore Scan (测试网)"/>
        </Block>

        <Block title="开发教程">
          <Link href={docUrl('dev-faq-general')} target="_self" title="基本资讯"/>
          <Link href={docUrl('deploy-your-own-game')} target="_self" title="快速部署你的游戏"/>
          <Link href={docUrl('migrate-to-thunder')} target="_self" title="从以太坊迁移"/>
          <Link href={docUrl('erc20-smart-contract')} target="_self" title="部署你自己的 ERC-20 代币"/>
        </Block>

        <Block title="开发资源">
          <Link href="https://solidity.readthedocs.io/en/develop/" title="Solidity"/>
          <Link href="https://support-center-cn.thundercore.com/docs/metamask/" title="如何使用 Metamask"/>
          <Link href="https://github.com/thundercore/token-list" title="上币申请"/>
          <Link href="https://documenter.getpostman.com/view/9835955/TzJu8ch2" title="NFT SDK - Numbers "/>
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
               <form className="jumpStartMain" action="https://form.typeform.com/to/PhvuMI7o?utm_source=dev_portal&utm_medium=footer&utm_campaign=dev_jumpstart" target="_blank">
          <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
            <input type="text" name="b_9e820737f58c3f0aa1940427b_3338803d92" tabIndex="-1" value="" />
          </div>

          <div className="jumpStartTitle">开发者快速推动计划</div>

          <div className="jumpStartContent">
            订阅以获取我们最新的开发人员新闻和计划，包括我们即将推出的<strong>开发者快速推动计划！</strong>早期测试版参与者收入已增长超过<div className="over9000">400%</div>。
          </div>

          <div className="jumpStartEmail">
            <input type="email" className="emailInput" value="" name="EMAIL" id="mce-EMAIL"/>
            <input type="submit" className="subscribeButton orangeButton" value="订阅"/>
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
