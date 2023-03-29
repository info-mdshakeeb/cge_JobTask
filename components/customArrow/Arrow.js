const { default: Slide } = require("../slider/SlideR");

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: "50%", margin: "10px" }}
            onClick={onClick}
        >
        </div >);
}
export default SamplePrevArrow;