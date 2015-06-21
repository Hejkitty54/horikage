/** @jsx React.DOM */
var React = require('react');

var ContactInformation = React.createClass({
    getDefaultProps: function() {
        return {
            info: {
                link: '',
                fontawesome: '',
                title: 'Nope',
                information: ''
            }

        }
    },
    render: function() {
        return (
            <li className='ContactInformation'>
                <a href={this.props.info.link}>
                    <i className={this.props.info.fontawesome}></i>
                    <h4> {this.props.info.title} </h4>
                    <p><span>{this.props.info.information}</span> </p>
                </a>
            </li>

        );}

});

module.exports = ContactInformation;
