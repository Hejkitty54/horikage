/** @jsx React.DOM */

var React = require('react');
var ImageGallery = require('./imagegallery.jsx');
var Images = require('./images');
var ReactCSSTransitionGroup = require('react/addons').addons.CSSTransitionGroup;

var Gallery = React.createClass({

    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function() {
        return {
            isPaused: true,
            isPlaying: false,
            slideInterval: 4000,
            showThumbnails: true,
            showBullets: false,
            currentIndex: null,
            currentPage: 'others',
            showGallery: true,
            loaded: false,
            mounted: false
        };
    },

    componentWillMount: function() {
        window.addEventListener("horikage-page", this.refetchImages, false);
    },

    componentDidMount: function() {
        this.setState({ mounted: true });
    },

    componentWillUnmount: function() {
        window.removeEventListener("horikage-page", this.refetchImages, false);
    },

    refetchImages: function(e) {
        this.setState({currentPage: e.detail.page, currentIndex: null, showGallery: e.detail.page !== 'contact'});
    },

    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.slideInterval != prevState.slideInterval) {
            // refresh setInterval
            this._pauseSlider();
            this._playSlider();
        }
    },

    _pauseSlider: function() {
        if (this.refs.imageGallery) {
            this.refs.imageGallery.pause();
            this.setState({isPaused: true, isPlaying: false});
        }
    },

    _playSlider: function() {
        if (this.refs.imageGallery) {
            this.refs.imageGallery.play();
            this.setState({isPaused: false, isPlaying: true});
        }
    },

    _handleSlide: function(index) {
        this.setState({currentIndex: index});
    },

    render: function() {
        var images = Images(this.state.currentPage);
        var gallery;
        console.log('rendered');
        if(this.state.mounted) {
            var gallery =
                    <ImageGallery key='Gallery'
                        ref='imageGallery'
                        items={images}
                        showBullets={this.state.showBullets}
                        showThumbnails={this.state.showThumbnails}
                        slideInterval={parseInt(this.state.slideInterval)}
                        autoPlay={false}
                        onSlide={this._handleSlide}
                    />;
        }

        return (<section className='Gallery'>
                        <ReactCSSTransitionGroup transitionName="GalleryTransition">
                            {gallery}
                        </ReactCSSTransitionGroup>
                    </section>

        );
    }

});

module.exports = Gallery;