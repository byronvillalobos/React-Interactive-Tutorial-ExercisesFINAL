import React from "react";
import ReactDOM from "react-dom";

//create your function here
export const BootstrapCard = () => {
	return (
		<div className="card m-5">
			<img className="card-img-top" src="https://i.pinimg.com/236x/32/7a/8d/327a8ddacdc5fa126f12f8d6990ab40d.jpg" alt="Card image cap"></img>
			<div className="card-body">
				<h5 className="card-title">Bob Dylan</h5>
				<p className="card-text">
					Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an
					influential figure in popular music and culture for more than five decades.
				</p>
				<a href="https://en.wikipedia.org/wiki/Bob_Dylan" className="btn btn-primary">
					Go to wikipedia
				</a>
			</div>
		</div>
	);
};

//remember to use ReactDOM.render to include the component into the website
ReactDOM.render(<BootstrapCard />, document.querySelector("#myDiv"));
