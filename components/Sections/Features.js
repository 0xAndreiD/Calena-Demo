import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Features = (props) => {
    return (
        <section id="features" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Awesome Features</h3>
							<p>Caléna has brought luxury brands from around the globe to one platform, which promises to deliver more than a customer-centric experience.</p>
						</div>
						
					</Col>
				</Row>
			
				<Row className="d-flex align-items-center">
					
					{/* <!-- Left --> */}
					<Col className="col-12 col-md-6 col-lg-4"> 				
						
						<ul className="features-item">
							
							{/* <!-- Feature box --> */}
							<li> 
								<div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>
									
									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-gear"></div>
									</div>
									
									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Customer Service</h4>
										<p>Our app provides a seamless and immersive experience that allows users to connect to the brand’s every relevant touchpoint in a beautiful and simplistic way.
										</p>
									</div>
									
								</div>
							</li>
							
							{/* <!-- Feature box --> */}
							<li> 
								<div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>
									
									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-lock"></div>
									</div>
									
									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Security you can trust</h4>
										<p>Our app provides a seamless and immersive experience that allows users to connect to the brand’s every relevant touchpoint in a beautiful and simplistic way.</p>
									</div>
									
								</div>
							</li>
							
							{/* <!-- Feature box --> */}
							<li> 
								<div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>
									
									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-message-txt"></div>
									</div>
									
									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Free Live Chat</h4>
										<p>Our app provides a seamless and immersive experience that allows users to connect to the brand’s every relevant touchpoint in a beautiful and simplistic way.</p>
									</div>
									
								</div>
							</li>
							
						</ul>
					</Col>
					
					{/* <!-- Center --> */}
					<Col className="col-12 col-lg-4 d-none d-lg-block"> 
						<div className="features-thumb text-center">
							<img src="/images/features/awesome-features.png" alt="" />
						</div>
					</Col>
					
					{/* <!-- Right --> */}
					<Col className="col-12 col-md-6 col-lg-4"> 
						
						<ul className="features-item">
							
							{/* <!-- Feature box --> */}
							<li> 
								<div className="feature-box d-flex"> 
									
									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-share"></div>
									</div>
									
									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Social Share</h4>
										<p>Our app provides a seamless and immersive experience that allows users to connect to the brand’s every relevant touchpoint in a beautiful and simplistic way.</p>
									</div>
									
								</div>
							</li>
							
							{/* <!-- Feature box --> */}
							<li> 
								<div className="feature-box d-flex"> 
									
									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-sheet-multiple"></div>
									</div>
									
									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>We don’t store your card</h4>
										<p>Our app provides a seamless and immersive experience that allows users to connect to the brand’s every relevant touchpoint in a beautiful and simplistic way.</p>
									</div>
									
								</div>
							</li>
							
							{/* <!-- Feature box --> */}
							<li> 
								<div className="feature-box d-flex"> 
									
									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-alarm"></div>
									</div>
									
									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Action Reminder</h4>
										<p>Our app provides a seamless and immersive experience that allows users to connect to the brand’s every relevant touchpoint in a beautiful and simplistic way.</p>
									</div>
									
								</div>
							</li>
							
						</ul>
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Features;