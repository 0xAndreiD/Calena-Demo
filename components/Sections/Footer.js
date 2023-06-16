import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Footer extends Component {

	componentDidMount() {
		if (typeof window !== 'undefined') {
			window.WOW = require('wowjs/dist/wow.js');
		}

		new WOW.WOW().init();
	}

	render() {
		return (
			<footer>

				{/* <!-- Widgets --> */}
				<div className="footer-widgets">
					<Container>

						<Row>

							{/* <!-- Footer logo --> */}
							<Col className="col-12 col-md-6 col-lg-3 res-margin">
								<div className="widget">
									<p className="footer-logo">
										<img src="/images/logo-white.png" alt="Naxos" data-rjs="2" />
									</p>
									<p>
										Create your dream with Caléna.
									</p>

									{/* <!-- Social links --> */}
									<div className="footer-social">
										<a href="#" title="Twitter"><i className="fab fa-twitter fa-fw"></i></a>
										<a href="#" title="Facebook"><i className="fab fa-facebook-f fa-fw"></i></a>
										<a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
										<a href="#" title="Dribbble"><i className="fab fa-dribbble"></i></a>
										<a href="#" title="Pinterest"><i className="fab fa-pinterest fa-fw"></i></a>
									</div>
								</div>
							</Col>

							{/* <!-- Useful links --> */}
							<Col className="col-12 col-md-6 col-lg-2 offset-lg-1 res-margin">
								<div className="widget">

									<h6>Useful Links</h6>

									<ul className="footer-menu">
										<li><a href="#">Support</a></li>
										<li><a href="#">Privacy Policy</a></li>
										<li><a href="#">Terms &amp; Conditions</a></li>
										<li><a href="#">Affiliate Program</a></li>
										<li><a href="#">Careers</a></li>
									</ul>

								</div>
							</Col>

							{/* <!-- Product help --> */}
							<Col className="col-12 col-md-6 col-lg-3 res-margin">
								<div className="widget">

									<h6>Product Help</h6>

									<ul className="footer-menu">
										<li><a href="#">FAQ</a></li>
										<li><a href="#">Reviews</a></li>
										<li><a href="#">Features</a></li>
										<li><a href="#">Feedback</a></li>
										<li><a href="#">API</a></li>
									</ul>

								</div>
							</Col>

							{/* <!-- Download --> */}
							<Col className="col-12 col-md-6 col-lg-3">
								<div className="widget">

									<h6>Download</h6>

									<div className="button-store">
										<a href="#" className="d-inline-flex align-items-center m-2 m-sm-0 me-sm-3 download-btn">
											<img src="/images/banner/google-play.png" alt="" />
										</a>

										<a href="#" className="d-inline-flex align-items-center m-2 m-sm-0 download-btn">
											<img src="/images/banner/app-store.png" alt="" />
										</a>
									</div>

								</div>
							</Col>

						</Row>

					</Container>
				</div>

				{/* <!-- Copyright --> */}
				<div className="footer-copyright">
					<Container>

						<Row>
							<Col className="col-12">

								{/* <!-- Text --> */}
								<p className="copyright text-center">
									Copyright © 2023 <a href="#" target="_blank">Caléna</a>. All Rights Reserved.
								</p>

							</Col>
						</Row>

					</Container>
				</div>

			</footer>
		);
	}

}