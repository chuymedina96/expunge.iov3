/*!
 * Contact Buttons Plugin Demo 0.1.0
 * https://github.com/joege/contact-buttons-plugin
 *
 * Copyright 2015, José Gonçalves
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
 
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
    'facebook':   { class: 'facebook', use: true, link: 'https://www.facebook.com/sharer/sharer.php?u=expunge.io', extras: 'target="_blank"' },
    'twitter':    { class: 'twitter',  use: true, icon: 'twitter',     link: 'https://twitter.com/home?status=expunge.io%0A', title: 'Follow on Twitter' },
    'linkedin':   { class: 'linkedin', use: true, link: 'https://www.linkedin.com/shareArticle?mini=true&url=expunge.io&title=&summary=&source=' },
    'google':     { class: 'gplus',    use: true, link: 'https://plus.google.com/myidongoogle' },
    'pinterest':  { class: 'pinterest', use: true, icon: 'pinterest',   link: 'https://pinterest.com/pin/create/button/?url=&media=expunge.io&description=', title: 'Follow on Pinterest' },
    'phone':      { class: 'phone separated',    use: true, link: "(312)-229-6359" },
    'email':      { class: 'email',    use: true, link: 'expungeio@lafchicago.org' }
  }
});