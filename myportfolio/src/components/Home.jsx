import React from 'react'
import { AttentionSeeker } from 'react-awesome-reveal';
// import helloLight from '../media/SushantPortfolio.png';
// import helloDark from '../media/hello-dark.png';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';

const Home = ({ darkMode }) => {
    return (
        <div>
            <AttentionSeeker shakeX>
                <Row>
                    <Container align="center">
                        <Col lg={12} xs={12}>
                            <br />
                        
                            <div className="img">
                            <img  src="https://user-images.githubusercontent.com/87421852/148260804-70c539e2-5496-4a4a-88b2-2fcc9377c712.png" alt=""/>
                            </div>
                        </Col>
                    </Container>
                </Row>
                <Row>
                    <Col lg={12} xs={12}>
                        <h1 className="display-3 hello" align="center"><code> I'm Sushant Salavi</code></h1>
                        <h2 className="lead" align="center">I
                            <span
                                class="txt-rotate"
                                data-period="500"
                                data-rotate='[ " am a Full-Stack Web Developer"]'>
                            </span>
                        </h2>
                    </Col>
                </Row>
            </AttentionSeeker>
            <br></br>
            <hr></hr>
        </div>
    )
}

export default Home
