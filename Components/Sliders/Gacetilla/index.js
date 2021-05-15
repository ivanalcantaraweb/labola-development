import React, { Component } from "react";
import Slider from "react-slick";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", width: '70px', height: '70px' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", width: '70px', height: '70px' }}
            onClick={onClick}
        />
    );
}


class SliderLegajo extends Component {
    constructor(props) {
        super(props);
        console.log("SliderLegajo", props)
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <Slider {...settings} className={this.props.propClass} >
                <div className={this.props.slideClass}>
                    <img src="/Assets/Images/pakal-el-grande__1280x1912.png"></img>
                </div>
                <div className={this.props.slideClass}>
                    <img src="/Assets/Images/pakal-el-grande__1280x1912.png"></img>
                </div>  <div className={this.props.slideClass}>
                    <img src="/Assets/Images/pakal-el-grande__1280x1912.png"></img>
                </div>  <div className={this.props.slideClass}>
                    <img src="/Assets/Images/pakal-el-grande__1280x1912.png"></img>
                </div>  <div className={this.props.slideClass}>
                    <img src="/Assets/Images/pakal-el-grande__1280x1912.png"></img>
                </div>  <div className={this.props.slideClass}>
                    <img src="/Assets/Images/pakal-el-grande__1280x1912.png"></img>
                </div>
            </Slider>

        );
    }
}


export default SliderLegajo;