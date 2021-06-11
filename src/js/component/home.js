import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//import your own components
import { Card } from "./card.js";
import { Footer } from "./footer.js";
import { Header } from "./header.js";
import { Jumbotron } from "./jumbotron.js";

//create your first component
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
