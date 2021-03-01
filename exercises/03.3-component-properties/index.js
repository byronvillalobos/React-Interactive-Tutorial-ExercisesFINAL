import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export function BootstrapCard(props) {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
		<div className="card m-5">
			<img className="card-img-top">{props.imageUrl}</img>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{description}</p>
				<a href={buttonUrl} className="btn btn-primary">
					{buttonLabel}
				</a>
			</div>
		</div>
	);
}
BootstrapCard.propTypes = {
	title: PropTypes.string,
	// 2) add here the new properties into the proptypes object
	imageUrl: PropTypes.string,
	description: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonLabel: PropTypes.string
};
// 3) Use ReactDOM to add the component into then DOM element #myDiv
ReactDOM.render(<BootstrapCard />, document.querySelector("#myDiv"));
