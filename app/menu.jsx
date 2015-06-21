/** @jsx React.DOM */
var React = require('react');

var Menu = React.createClass({

    getInitialState: function(){
        return { focused: 0 };
    },

    clicked: function(index, menu){
        this.setState({focused: index});
        var customEvent = new CustomEvent("horikage-page",  {
            detail: {page: menu.name},
            bubbles: true
        });
        this.getDOMNode().dispatchEvent(customEvent);

    },

    render: function() {
        var self = this;
        return (
            <section className='Menu'>
                <ul>{ this.props.items.map(function(m, index){

                    var style = '';

                    if(self.state.focused == index){
                        style = 'focused';
                    }

                    // Notice the use of the bind() method. It makes the
                    // index available to the clicked function:

                    return <li key={m.name} className={style} onClick={self.clicked.bind(self, index, m)}>
                        <img src={m.image} /></li>;

                }) }

                </ul>


            </section>
        );

    }
});

module.exports = Menu;
