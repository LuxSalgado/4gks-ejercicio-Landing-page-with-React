import React from "react";

export function Jumbotron() {
	return (
		<div className="jumbotron d-flex flex-column">
			<h1 className="display-2">A Warm Welcome!</h1>
			<p className="lead h4">
				<b>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</b>
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to action!
				</a>
			</p>
		</div>
	);
}
