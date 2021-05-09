import React, { Component } from "react";
import Slider from "react-slick";


class SliderLegajo extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (

            <Slider {...settings} className={this.props.propClass} >
                <div className={this.props.slideClass}>
                    <div className={this.props.containerInnerSlide}>
                        <div className={this.props.containerImageSlide}>
                            <img src="/Assets/Images/pakal-el-grande__1280x1912.png"></img>
                        </div>
                        <div className={this.props.containerContentSlide}>
                            <h2>El robo de los tesoros del museo nacional de antropología</h2>
                        </div>
                    </div>
                </div>
                <div className={this.props.slideClass}>
                    <h3>2</h3>
                </div>
                <div className={this.props.slideClass}>
                    <h3>3</h3>
                </div>
                <div className={this.props.slideClass}>
                    <h3>4</h3>
                </div>
                <div className={this.props.slideClass}>
                    <h3>5</h3>
                </div>
                <div className={this.props.slideClass}>
                    <h3>6</h3>
                </div>
            </Slider>

        );
    }
}


export default SliderLegajo;