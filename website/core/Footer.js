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
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <a href="https://www.thundercore.com/team" target="_blank" rel="noreferrer noopener">
              Team
            </a>
            <a href="https://jobs.lever.co/thundertoken" target="_blank" rel="noreferrer noopener">
              Careers
            </a>
          </div>
          <div>
            <a href="https://docs.thundercore.com/thunder-whitepaper.pdf" target="_blank" rel="noreferrer noopener">
                Whitepaper
            </a>
            <a href="https://docs.thundercore.com/thunder-litepaper.pdf" target="_blank" rel="noreferrer noopener">
                Litepaper
            </a>
          </div>
          <div>
            <a href="https://medium.com/thundercore">Medium</a>
            <a href="https://twitter.com/thunderprotocol" target="_blank" rel="noreferrer noopener">
              Twitter
            </a>
            <a href="https://www.reddit.com/r/thunder_official/" target="_blank" rel="noreferrer noopener">
              Reddit
            </a>
            <a href="https://discordapp.com/invite/5EbxXfw" target="_blank" rel="noreferrer noopener">
              Discord
            </a>
            <a href="https://github.com/">GitHub</a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
