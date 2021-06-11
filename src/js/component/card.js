import React from "react";
import PropTypes, { object } from "prop-types";

export function Card(props) {
	return (
		<div className="card mb-3" style={{ width: "16rem" }}>
			<img
				className="card-img-top"
				src={props.imagen}
				alt="Card image cap"
			/>
			<div className="card-body d-flex flex-column align-items-center">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card&apos;s content.
				</p>
			</div>
			<div className="card-footer d-flex flex-column align-items-center">
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	imagen: PropTypes.string.isRequired // Necesario el .isRequired
};
