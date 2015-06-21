/** @jsx React.DOM */
var React = require('react');
var ContactInformation = require('./contactinformation');

var Contact = React.createClass({

    getInitialState: function(){
        return { visible: false };
    },


    componentWillMount: function() {
        window.addEventListener("horikage-page", this.menuswitched, false);
    },
    componentWillUnmount: function() {
        window.removeEventListener("horikage-page", this.menuswitched, false);
    },

    menuswitched: function(e) {
        this.setState({visible: e.detail.page === 'contact'});
    },

    render: function() {

        return (
            <section className='Contact'>
                {
                    this.state.visible ?
                        <div>
                            <h1> Contact Horikage </h1>
                            <h2> Get in touch with me to get the ball rolling </h2>
                            <ul>
                                { this.props.items.map(function(m, index){
                                    return <ContactInformation key={index} info={ m } />
                                }) }
                            </ul>
                        </div>
                    : null
                }
            </section>
        );

    }
});

module.exports = Contact;
