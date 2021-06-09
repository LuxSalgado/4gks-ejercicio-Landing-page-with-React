import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes, { object } from "prop-types";
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

function Jumbotron() {
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

function Card(props) {
	let foto = props.imagen;
	return (
		<div className="card mb-3" style={{ width: "16rem" }}>
			<img className="card-img-top" src={foto} alt="Card image cap" />
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

function Footer() {
	return (
		<footer className="page-footer font-small bg-dark ">
			<div className="footer-copyright text-center py-3 text-white">
				Copyright © Your Website 2021
			</div>
		</footer>
	);
}

export function Home() {
	return (
		<div className="container-fluid m-0 p-0">
			<Header />
			<div className="container">
				<Jumbotron />
				<div className="d-flex justify-content-between">
					<Card
						imagen={
							"https://cdn.pixabay.com/photo/2015/08/28/14/54/lagoon-911963__180.jpg" // Va dentro de llaves
						}
					/>
					<Card
						imagen={
							"https://cdn.pixabay.com/photo/2020/06/23/12/26/panorama-5332396__180.jpg"
						}
					/>
					<Card
						imagen={
							"https://cdn.pixabay.com/photo/2017/05/02/16/43/swan-stone-2278688__180.jpg"
						}
					/>
					<Card
						imagen={
							"https://cdn.pixabay.com/photo/2015/12/04/09/34/olgas-1076322__180.jpg"
						}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
