import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//add the styles here
const mySuperStyles = {
	color: "black",
	fontSize: "16px",
	border: "1px solid black"
};

const Badge = props => {
	return (
		<button style={mySuperStyles} type="button" className="btn btn-primary">
			{props.label}
			<span className="badge badge-light">{props.number}</span>
		</button>
	);
};
Badge.propTypes = {
	label: PropTypes.string,
	number: PropTypes.string
};

ReactDOM.render(<Badge label="I am an alert" number="2" />, document.querySelector("#myDiv"));
