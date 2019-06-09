// Component : Header
// Desc : Theme Header for a application
// Use case : Can be used in all the pages as a header

import React, { Component } from 'react';
import './header.css';

class Header extends Component {
	constructor() {
		super();
	}	
	render() {
		return (
		<header>
			<div className="top_part sticky">
				<div className="container">
					<nav className="navbar navbar-expand-md navbar-dark">
						<a className="navbar-brand" href="/"><img src="/static/images/logo_small.png" alt=""></img></a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="collapsibleNavbar">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<a className="nav-link" href="/all-cities">All Cities</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/about-us">About Us</a>
								</li>   
							</ul>
						</div>  
					</nav>
				</div>
			</div>
		</header>
    );
	}
}

export default Header;