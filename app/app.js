'use strict';

var React = require('react');
var Menu = require('./menu');
var Gallery = require('./gallery');
var Contact = require('./contact');

var menu =  [
  {name: 'japanese', link:'Japanese', image:'menu/ta.b.jpg'},
  {name: 'calligraphy', link:'Calligraphy',image:'menu/am.b.jpg'},
  {name: 'girls', link:'Girls',image:'menu/ar.b.jpg'},
  {name: 'others', link:'Other',image:'menu/ta.b.jpg'},
  {name: 'contact', link:'Contact', image:'menu/co.b.jpg'}
];

var contact = [{
  link: '',
  title: 'PHONE',
  fontawesome: 'fa fa-phone',
  information: '073-430 14 84'
},
  {
    link: 'mailto:horikage@hotmail.co.jp',
    title: 'EMAIL',
    fontawesome: 'fa fa-envelope-o',
    information: 'horikage@hotmail.co.jp'
  },
  {
    link: 'http://www.facebook.com/Horikage',
    title: 'FACEBOOK',
    fontawesome: 'fa fa-facebook-official',
    information: 'Horikage @ Facebook'
  }
];

var MainPage = React.createClass({
  getInitialState: function(){
    return { hidden: true };
  },

  enter: function (){
    this.setState({hidden:false});
  },
  render: function (){
    return <div><img src="hp.jpg" onClick={this.enter} className={!this.state.hidden ? 'hidden': 'intro'} /><div className={this.state.hidden ? 'hidden': ''}><Menu items={ menu } /><Gallery /><Contact items={ contact } /></div></div>;
  }
});


(function() {
  React.initializeTouchEvents(true);
  console.log('begin');
  console.log('markup done');
  React.render(<MainPage />, document.body);
  console.log('render done');

})();
