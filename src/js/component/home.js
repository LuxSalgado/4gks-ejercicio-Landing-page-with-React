import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

function Header() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container d-flex">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<ul className="nav justify-content-end ml-auto">
					<li className="nav-item">
						<a className="nav-link text-white" href="#">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-secondary" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-secondary" href="#">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-secondary" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export function Home() {
	return (
		<div className="container-fluid m-0 p-0">
			<Header />
			<div className="container"></div>
		</div>
	);
}
