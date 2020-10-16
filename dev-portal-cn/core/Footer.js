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
            <div className="title">资源</div>
            <a href={this.docUrl('faqs/general')}>常问问题</a>
            <a href="https://discordapp.com/invite/5EbxXfw" target="_blank">在 Discord 上取得联系</a>
            <a href="mailto:info@thundercore.com">电邮我们</a>
          </div>

          <div className="community">
            <div className="title">社区</div>
            <div className="icons">
              <a href="https://twitter.com/ThunderProtocol"
                 target="_blank"
                 className="icon icon-twitter">
                <TwitterIcon />
              </a>

              <a href="https://medium.com/thunderofficial"
                 target="_blank"
                 className="icon icon-medium">
                <MediumIcon />
              </a>

              <a href="https://www.reddit.com/r/thunder_official/"
                 target="_blank"
                 className="icon icon-reddit">
                <RedditIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">{this.props.config.copyright}</div>
      </footer>
    );
  }
}

class RedditIcon extends React.Component {

  render() {
    return (
      <svg viewBox="0 0 52 52" version="1.1" xmlns="http://www.w3.org/2000/svg" >
        <title>icon_reddit_normal</title>
        <desc>Created with Sketch.</desc>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="dev_FAQ" transform="translate(-1298.000000, -2419.000000)">
            <g id="footer" transform="translate(0.000000, 2320.000000)">
              <g id="follow-us" transform="translate(1137.000000, 54.000000)">
                <g id="icon_reddit_normal" transform="translate(162.000000, 46.000000)">
                  <circle id="Oval-Copy-2" stroke="none" fill="currentColor" cx="25" cy="25" r="25"></circle>
                  <g id="iconmonstr-reddit-1" transform="translate(8.000000, 10.000000)" fill="#FFFFFF" fillRule="nonzero">
                    <path d="M34,13.6906 C34,11.648 32.3113333,9.9876 30.2359167,9.9876 C29.223,9.9876 28.305,10.388 27.62925,11.032 C25.0650833,9.3646 21.5956667,8.3034 17.7536667,8.1676 L19.8545833,1.631 L25.5439167,2.9484 L25.5354167,3.0296 C25.5354167,4.6998 26.9166667,6.0578 28.61525,6.0578 C30.3124167,6.0578 31.69225,4.6998 31.69225,3.0296 C31.69225,1.3594 30.311,0 28.61525,0 C27.3119167,0 26.20125,0.8036 25.7521667,1.9306 L19.6194167,0.5096 C19.3516667,0.4452 19.0796667,0.5978 18.9960833,0.8582 L16.6529167,8.148 C12.6324167,8.1956 8.99016667,9.2652 6.31125,10.983 C5.63975,10.3698 4.74866667,9.9862 3.76266667,9.9862 C1.68725,9.9862 0,11.648 0,13.6906 C0,15.0486 0.755083333,16.226 1.86575,16.87 C1.79208333,17.2648 1.74391667,17.6638 1.74391667,18.0698 C1.74391667,23.5452 8.55525,28 16.9291667,28 C25.3030833,28 32.1158333,23.5452 32.1158333,18.0698 C32.1158333,17.6862 32.07475,17.3082 32.0095833,16.9358 C33.18825,16.31 34,15.099 34,13.6906 Z M9.59933333,16.233 C9.59933333,15.0178 10.6051667,14.028 11.8405,14.028 C13.0758333,14.028 14.08025,15.0178 14.08025,16.233 C14.08025,17.4482 13.0758333,18.4366 11.8405,18.4366 C10.6051667,18.4366 9.59933333,17.4482 9.59933333,16.233 L9.59933333,16.233 Z M22.43575,22.7696 C21.3066667,23.8798 19.5344167,24.4202 17.0184167,24.4202 L17,24.416 L16.9815833,24.4202 C14.4641667,24.4202 12.6919167,23.8798 11.56425,22.7696 C11.3588333,22.568 11.3588333,22.239 11.56425,22.0374 C11.7696667,21.8344 12.104,21.8344 12.3094167,22.0374 C13.23025,22.9432 14.7588333,23.3828 16.9815833,23.3828 L17,23.387 L17.0184167,23.3828 C19.2411667,23.3828 20.76975,22.9418 21.6905833,22.036 C21.896,21.833 22.2303333,21.8344 22.43575,22.036 C22.6411667,22.239 22.6411667,22.5666 22.43575,22.7696 Z M22.168,18.4366 C20.9326667,18.4366 19.92825,17.4482 19.92825,16.233 C19.92825,15.0178 20.9326667,14.028 22.168,14.028 C23.4033333,14.028 24.40775,15.0178 24.40775,16.233 C24.40775,17.4482 23.4033333,18.4366 22.168,18.4366 Z" id="Shape"></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

class MediumIcon extends React.Component {

  render() {
    return (
      <svg viewBox="0 0 52 52" version="1.1" xmlns="http://www.w3.org/2000/svg" >
        <title>icon_medium_normal</title>
        <desc>Created with Sketch.</desc>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="dev_FAQ" transform="translate(-1217.000000, -2418.000000)">
            <g id="footer" transform="translate(0.000000, 2320.000000)">
              <g id="follow-us" transform="translate(1137.000000, 54.000000)">
                <g id="icon_medium_normal" transform="translate(81.000000, 45.000000)">
                  <circle id="Oval-Copy" stroke="none" fill="none" cx="25" cy="25" r="25"></circle>
                  <path d="M13.6760037,17.8959436 C13.7145189,17.524844 13.5694015,17.1580533 13.2852474,16.9082892 L10.3907563,13.5079365 L10.3907563,13 L19.3781513,13 L26.32493,27.8571428 L32.4323064,13 L41,13 L41,13.5079365 L38.5252101,15.8218695 C38.3118561,15.9804649 38.2060216,16.2411276 38.2502335,16.4991182 L38.2502335,33.5008819 C38.2060216,33.7588725 38.3118561,34.0195351 38.5252101,34.1781305 L40.9421102,36.4920635 L40.9421102,37 L28.7852475,37 L28.7852475,36.4920635 L31.2889824,34.1216932 C31.535014,33.8818342 31.535014,33.8112875 31.535014,33.4444445 L31.535014,19.70194 L24.5737628,36.9435626 L23.6330532,36.9435626 L15.528478,19.70194 L15.528478,31.2574955 C15.4609051,31.7433236 15.6263627,32.2324462 15.9771242,32.5837743 L19.2334267,36.4356262 L19.2334267,36.9435626 L10,36.9435626 L10,36.4356262 L13.2563025,32.5837743 C13.6045101,32.2318637 13.7603198,31.7394965 13.6760037,31.2574955 L13.6760037,17.8959436 Z" id="Shape" fill="#FFFFFF" fillRule="nonzero"></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

class TwitterIcon extends React.Component {

  render() {
    return (
      <svg  viewBox="0 0 52 52" version="1.1"
           xmlns="http://www.w3.org/2000/svg">
        <title>icon_twitter_normal</title>
        <desc>Created with Sketch.</desc>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="dev_FAQ" transform="translate(-1136.000000, -2417.000000)">
            <g id="footer" transform="translate(0.000000, 2320.000000)">
              <g id="follow-us" transform="translate(1137.000000, 54.000000)">
                <g id="icon_twitter_normal"
                   transform="translate(0.000000, 44.000000)">
                  <circle id="Oval" stroke="none" cx="25" cy="25"
                          r="25"></circle>
                  <g id="iconmonstr-twitter-1"
                     transform="translate(8.000000, 12.000000)" fill="#FFFFFF"
                     fillRule="nonzero">
                    <path
                      d="M34,3.19642125 C32.7490833,3.73907916 31.4046667,4.10454266 29.9936667,4.2692781 C31.4344167,3.42622026 32.5408333,2.09034044 33.06075,0.498359311 C31.7135,1.27912223 30.2203333,1.84669811 28.6308333,2.15263536 C27.3600833,0.827830189 25.5453333,0 23.5393333,0 C19.03575,0 15.7264167,4.10592699 16.7435833,8.36828343 C10.948,8.08449549 5.80833333,5.37120591 2.36725,1.24728261 C0.53975,4.31080804 1.4195,8.3184475 4.52483333,10.3478774 C3.383,10.3118847 2.30633333,10.0059475 1.36708333,9.4951292 C1.29058333,12.6527892 3.60683333,15.6069524 6.9615,16.2645098 C5.97975,16.5247642 4.9045,16.5856747 3.81083333,16.3807937 C4.69766667,19.0885459 7.27316667,21.0584495 10.3275,21.1138228 C7.395,23.3605927 3.70033333,24.364233 0,23.9378589 C3.08691667,25.8717699 6.75466667,27 10.693,27 C23.6441667,27 30.96125,16.3115771 30.51925,6.72508203 C31.8820833,5.7629717 33.065,4.56275636 34,3.19642125 Z"
                      id="Path"></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

module.exports = Footer;
