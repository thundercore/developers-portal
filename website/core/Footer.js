/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <div className="content">
          <a className="thunder-icon" href="http://thundercore.com">
            <img
              src="/img/thundercore_icon_white.svg"
              alt={this.props.config.title}
              width="66"
              height="58"
            />
          </a>

          <div className="site-links">
            <div className="title">Resources</div>
            <a href={this.docUrl('faqs')}>FAQ</a>
            <a href="https://discordapp.com/invite/5EbxXfw">Get in Touch on Discord</a>
            <a href="mailto:info@thundercore.com">Email Us</a>
          </div>

          <div className="community">
            <div className="title">Community</div>
            <div className="icons">
              <a href="https://twitter.com/ThunderProtocol"
                 className="icon icon-twitter"></a>

              <a href="https://medium.com/thunderofficial"
                 className="icon icon-medium"></a>

              <a href="https://www.reddit.com/r/thunder_official/"
                 className="icon icon-reddit"></a>
            </div>
          </div>
        </div>
        <div className="copyright">{this.props.config.copyright}</div>
      </footer>
    );
  }
}

module.exports = Footer;
