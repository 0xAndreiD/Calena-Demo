import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Overview = (props) => {
    return (
        <section id="overview" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Track time --> */}
				<Row>
					
					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-6 offset-lg-1 order-lg-last res-margin">
							
						{/* <!-- Section title --> */}
						<div className="section-title text-center text-lg-start">
							<h3>Get Service From Anywhere</h3>
							<p>Caléna also offers cashback to our members we they purchase from our partnered luxury brands.</p>
						</div>

						{/* <!-- Items --> */}
						<div className="overview-item">

							{/* <!-- Item 1 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-compass"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Easy to Use</h6>
									<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
								</div>

							</div>

							{/* <!-- Item 2 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-helm"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Monitor &amp; Manage</h6>
									<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
								</div>

							</div>

							{/* <!-- Item 3 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-link"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Stay Connected</h6>
									<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
								</div>

							</div>

						</div>
							
					</Col>
					
					{/* <!-- Image --> */}
					<Col className="col-12 col-lg-5 order-lg-first text-sm-center">
						<img src="/images/overview/track-time.png" alt="" />
					</Col>
					
				</Row>
				
				<div className="empty-100"></div>
				
				{/* <!-- Daily schedule --> */}
				<Row>
					
					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-6 res-margin">
							
						{/* <!-- Section title --> */}
						<div className="section-title text-center text-lg-start">
							<h3>Luxury has never been more rewarding</h3>
							<p>our partnered brands value you and want to personalise your every experience. </p>
						</div>

						{/* <!-- List --> */}
						<ul className="overview-list">

							<li>
								<p><i className="fa-li fas fa-check"></i>
								Caléna also offers cashback to our members we they purchase from our partnered luxury brands.
								</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i>
								It's seamless for our members, purchase as you would usually and Caléna will do the rest. No codes, coupons, membership cards or vouchers.
								</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i>
								We are SUPERCHARING your existing payments cards!
								</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i>
								A frixtionless plyalty platform that offers cashback when purchasing directly with put manually curated luxury & high-end partners.
								</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i>Caléna is the ultimate platform for all your personal and corporate needs. Your details are protected by bank-level security.</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i>
								We give valuable time back to our community by creating one source to connect and collaborate with exclusive brands across multiple categories.
								</p>
							</li>
							
						</ul>

						{/* <!-- Button --> */}
						<p className="text-center text-lg-start">
							<a href="#" className="btn">Learn More</a>
						</p>
					
					</Col>
					
					{/* <!-- Image --> */}
					<Col className="col-12 col-lg-5 offset-lg-1 text-sm-center">
						<img src="/images/overview/daily-schedule.png" alt="" />
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Overview;