import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Team = () => {
    return (
        <section id="team">
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Our Team</h3>
							<p>We offer premium Furthr accounts to teams of any size as an awesome work perk that saves your staff time, effort and money.</p>
						</div>
						
					</Col>
				</Row>
			
				<Row>
					
					{/* <!-- Member 1 --> */}
					{/* <Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member res-margin">
							<div className="team-image">
								<img src="/images/team/member-1.jpg" alt="" />
								<div className="team-social">
									<div className="team-social-inner">
										<a href="#"><i className="fab fa-twitter"></i></a>
										<a href="#"><i className="fab fa-facebook-f"></i></a>
										<a href="#"><i className="fab fa-linkedin-in"></i></a>
										<a href="#"><i className="fab fa-dribbble"></i></a>
									</div>
								</div>
							</div>
							<div className="team-details">
								<h5 className="title"><a href="/worker">Geoff Pyart</a></h5>
								<span className="position">CEO Co-Founder</span>
							</div>
						</div>
					</Col> */}
					
					{/* <!-- Member 2 --> */}
					<Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member res-margin">
							<div className="team-image">
								<img src="/images/team/member-2.jpg" alt="" />
								<div className="team-social">
									<div className="team-social-inner">
										<a href="#"><i className="fab fa-twitter"></i></a>
										<a href="#"><i className="fab fa-facebook-f"></i></a>
										<a href="#"><i className="fab fa-linkedin-in"></i></a>
										<a href="#"><i className="fab fa-dribbble"></i></a>
									</div>
								</div>
							</div>
							<div className="team-details">
								<h5 className="title"><a href="/worker">Kennedy Leon</a></h5>
								{/* <span className="position">Founder</span> */}
							</div>
						</div>
					</Col>	
					
					{/* <!-- Member 3 --> */}
					<Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member res-margin">
							<div className="team-image">
								<img src="/images/team/member-3.jpg" alt="" />
								<div className="team-social">
									<div className="team-social-inner">
										<a href="#"><i className="fab fa-twitter"></i></a>
										<a href="#"><i className="fab fa-facebook-f"></i></a>
										<a href="#"><i className="fab fa-linkedin-in"></i></a>
										<a href="#"><i className="fab fa-dribbble"></i></a>
									</div>
								</div>
							</div>
							<div className="team-details">
								<h5 className="title"><a href="/worker">Jessica Jung</a></h5>
								{/* <span className="position">Creative Designer</span> */}
							</div>
						</div>
					</Col>
					
					{/* <!-- Member 4 --> */}
					<Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member">
							<div className="team-image">
								<img src="/images/team/member-4.jpg" alt="" />
								<div className="team-social">
									<div className="team-social-inner">
										<a href="#"><i className="fab fa-twitter"></i></a>
										<a href="#"><i className="fab fa-facebook-f"></i></a>
										<a href="#"><i className="fab fa-linkedin-in"></i></a>
										<a href="#"><i className="fab fa-dribbble"></i></a>
									</div>
								</div>
							</div>
							<div className="team-details">
								<h5 className="title"><a href="/worker">Ruby Rose</a></h5>
								{/* <span className="position">CMO</span> */}
							</div>
						</div>
					</Col>

					<Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member">
							<div className="team-image">
								<img src="/images/team/member-5.jpg" alt="" />
								<div className="team-social">
									<div className="team-social-inner">
										<a href="#"><i className="fab fa-twitter"></i></a>
										<a href="#"><i className="fab fa-facebook-f"></i></a>
										<a href="#"><i className="fab fa-linkedin-in"></i></a>
										<a href="#"><i className="fab fa-dribbble"></i></a>
									</div>
								</div>
							</div>
							<div className="team-details">
								<h5 className="title"><a href="/worker">Li Bingbing</a></h5>
								{/* <span className="position">CMO</span> */}
							</div>
						</div>
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Team;