// Component : Footer
// Desc : Theme footer for a application
// Use case : Can be used in all the pages as a footer

import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
	constructor() {
		super();
	}	
	render() {
		return (
		<footer>
		<div className="footer_sec">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-sm-6 col-xs-12 offset-md-6">
						<ul className="social_link">
							<li><a href="https://github.com/ravishankarsrrav"><i className="fa fa-github"></i></a></li>
							<li><a href="https://twitter.com/ravishankar_rav"><i className="fa fa-twitter"></i></a></li>
							<li><a href="https://www.linkedin.com/in/ravishankarsr-rav/"><i className="fa fa-linkedin"></i></a></li>
						</ul>
					</div>
				</div>
				<div className="copyright">
					<div className="row">
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-12 pull-right">
							<ul className="footer_link">
								<li><a href="/terms-and-conditions">About Us</a></li>
								<li><a href="/site-terms">Site Map</a></li>
							</ul>
						</div>
						<div className="col-lg-4 col-sm-5 col-md-4 col-xs-12">
							<p>© 2019 <span>Ravishankar S R.</span> All Right Reserved.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
    );
	}
}

export default Footer;