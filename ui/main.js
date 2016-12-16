  (function(d, s, id){
    var js,
        fjs = d.getElementsByTagName(s)[0],
        p = (('https:' == d.location.protocol) ? 'https://' : 'http://'),
        r = Math.floor(new Date().getTime() / 1000000);
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id; js.async=1;
    js.src = p + "www.opinionstage.com/assets/loader.js?" + r;
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'os-widget-jssdk'));

