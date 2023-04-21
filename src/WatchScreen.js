import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './WatchScreen.scss';

function WatchScreen() {
  return (
    <Row>
        <Col Lg={8}>
            <div className='watchScreen_player'>
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"
                frameBorder="0"
                title='MY VIDEO'
                allowFullScreen
                width='100%'
                height='100%'
                ></iframe>

<iframe src="https://www.youtube.com/embed/Slqo8SHnFaU"
                frameBorder="0"
                title='MY VIDEO'
                allowFullScreen
                width='100%'
                height='100%'
                ></iframe>
            </div>
        </Col>
        <Col Lg={4}></Col>
    </Row>
  )
}

export default WatchScreen