import React from 'react';
import { Grid, Cell } from 'react-foundation';
import Navbar from './Navbar';
import Footer from './Footer';

function ProjectTile(props) {
	return (
		<Cell small={12} medium={6} large={4} className="card-container">
			<a className="card-link" href={props.url} target="_blank" rel="noopener noreferrer">
				<div className="project-tile">
					<div className="img-container">
						<img
							className="card-img"
							src={props.imgurl}
							alt={props.name}
						/>
					</div>
					<div className="card-heading">{props.name}</div>
					<div className="card-text">{props.description}</div>
				</div>
			</a>
		</Cell>
	);
}

function Projects() {
	return (
		<div>
			<Navbar />
			<section className="section secondary" id="projects">
				<h1>Portfolio</h1>
				<Grid id="cards">
					<ProjectTile 
						name="YelpCafe"
						description="An app where users can submit cafes and review them"
						url="https://yelpcafe-betich.herokuapp.com"
						imgurl={`${process.env.PUBLIC_URL}/images/yelpcafe.png`}
					/>
					<ProjectTile 
						name="Quote Machine"
						description="Randomly generated quotes about programming"
						url="https://codepen.io/Betich/full/LYGYYMv"
						imgurl={`${process.env.PUBLIC_URL}/images/quote-machine.png`}
					/>
					<ProjectTile 
						name="React Calculator"
						description="A Calculator made with react"
						url="https://codepen.io/Betich/full/yLegyBK"
						imgurl={`${process.env.PUBLIC_URL}/images/react-calculator.png`}
					/>
					<ProjectTile 
						name="Pomodoro"
						description="Timer that follows the pomodoro technique"
						url="https://codepen.io/Betich/full/NWxvLqV"
						imgurl={`${process.env.PUBLIC_URL}/images/pomodoro.png`}
					/>
					<ProjectTile 
						name="Markdown converter"
						description="Preview Markdown"
						url="https://codepen.io/Betich/full/eYJmNvO"
						imgurl={`${process.env.PUBLIC_URL}/images/markdown-converter.png`}
					/>
					<ProjectTile 
						name="Drum Machine"
						description="Press buttons to play sounds from the drum pad"
						url="https://codepen.io/Betich/full/QWyboLY"
						imgurl={`${process.env.PUBLIC_URL}/images/drum-machine.png`}
					/>
				</Grid>
			</section>
			<Footer />
		</div>
	);
}

export default Projects;
