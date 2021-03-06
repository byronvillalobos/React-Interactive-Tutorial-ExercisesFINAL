import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const BootstrapCard = props => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
		<div className="card m-5">
			<img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};
BootstrapCard.propTypes = {
	title: PropTypes.string,
	// 2) add here the new properties into the proptypes object
	imageUrl: PropTypes.string,
	description: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonLabel: PropTypes.string
};
// 3) Use ReactDOM to add the component into then DOM element #myDiv
// ReactDOM.render(<BootstrapCard />, document.querySelector("#myDiv"));
ReactDOM.render(
	<BootstrapCard
		title="Paul Mccartney"
		imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/220px-Paul_McCartney_in_October_2018.jpg"
		description="(Liverpool, Merseyside; 18 de junio de 1942) es un cantautor, compositor, músico, multiinstrumentista, escritor y actor británico."
		buttonUrl="https://es.wikipedia.org/wiki/Paul_McCartney"
		buttonLabel="Go to wikipedia"
	/>,
	document.querySelector("#myDiv")
);
