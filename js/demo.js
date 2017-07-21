// Google Fonts
WebFontConfig = {
  google: { families: [ 'Lato:400,700,300:latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

// Initialize Share-Buttons
$.contactButtons({
  effect  : 'slide-on-scroll',
  buttons : {
    'facebook':   { class: 'facebook', use: true, link: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fchuymedina96.github.io%2Fexpunge.iov3%2F', extras: 'target="_blank"' },
    'twitter':    { class: 'twitter',  use: true, link: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fchuymedina96.github.io%2Fexpunge.iov3%2F&text=If%20you%20have%20a%20record%2C%20you%20may%20be%20able%20to%20expunge%20it.%20Check%20out%20%23expungeio!%20', title: 'Follow on Twitter' },
    'linkedin':   { class: 'linkedin', use: true, link: 'http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fchuymedina96.github.io%2Fexpunge.iov3%2F&title=If%20you%20have%20a%20record%2C%20you%20may%20be%20able%20to%20expunge%20it.%20Check%20out%20%23expungeio!%20' },
    'google':     { class: 'gplus',    use: true, link: 'https://plus.google.com/share?url=https%3A%2F%2Fchuymedina96.github.io%2Fexpunge.iov3%2F' },
    'phone':      { class: 'phone separated', use: true, link: '(312)-229-6359' },
    'email':      { class: 'email',    use: true, link: 'expungeio@lafchicago.org' }
  }
});