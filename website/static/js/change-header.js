var path = location.pathname.substring(1);

if (!!path.includes("docs/support-center")){
  var timeoutID = window.setInterval(( () => {
    var img = document.getElementsByClassName("logo")[0]
    img.setAttribute('src',"/img/thundercore_icon_white.svg")
    if(img.src.includes("/img/thundercore_icon_white.svg") ) {
      window.clearInterval(timeoutID);
    }
  }), 100);
};
