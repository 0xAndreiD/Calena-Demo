import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Counters = () => {
    const parallax = useRef(null);

    useEffect(() => {
        if (parallax.current) {
            parallax.current.style.backgroundImage = `url(${parallax.current.getAttribute('data-image')})`;
        }
    }, [parallax]);

    const [counter, setCounter] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            const counterId = document.querySelector('#counters');
            const pos = window.scrollY;

            if (counterId) {
                if (counterId.offsetTop - 150 <= pos && counterId.offsetTop + counterId.clientHeight >= pos) {
                    setCounter(true);
                }
            }
        };

        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    });

    return (
        <section id="counters" className="parallax" data-image="/images/parallax/counters.jpg" ref={parallax}>

            {/* <!-- Overlay --> */}
            <div className="overlay"></div>

            {/* <!-- Container --> */}
            <Container>

                <Row>

                    {/* <!-- Counter 1 --> */}
                    <Col className="col-12 col-md-6 col-lg-3">
                        <div className="counter wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0">
                            <div className="icon icon-basic-download"></div>
                            <div className="counter-content res-margin">
                                <h5>
                                    <span className="number-count">2023</span>
                                </h5>
                                <p>Total Downloads</p>
                            </div>
                        </div>
                    </Col>

                    {/* <!-- Counter 2 --> */}
                    <Col className="col-12 col-md-6 col-lg-3">
                        <div className="counter wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
                            <div className="icon icon-ecommerce-bag-plus"></div>
                            <div className="counter-content res-margin">
                                <h5>
                                    <span className="number-count">777</span>
                                </h5>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </Col>

                    {/* <!-- Counter 3 --> */}
                    <Col className="col-12 col-md-6 col-lg-3">
                        <div className="counter wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">
                            <div className="icon icon-basic-tablet"></div>
                            <div className="counter-content res-margin">

                                <h5>
                                    <span className="number-count">888</span>
                                </h5>

                                <p>Active Users</p>
                            </div>
                        </div>
                    </Col>

                    {/* <!-- Counter 4 --> */}
                    <Col className="col-12 col-md-6 col-lg-3">
                        <div className="counter wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.9s">
                            <div className="icon icon-basic-star"></div>
                            <div className="counter-content">

                                <h5>
                                    <span className="number-count">1028</span>
                                </h5>

                                <p>App Rates</p>
                            </div>
                        </div>
                    </Col>

                </Row>

            </Container>

        </section>
    );
}

export default Counters;