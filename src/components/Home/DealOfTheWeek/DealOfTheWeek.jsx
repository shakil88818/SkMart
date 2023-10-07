import {} from 'react'
import { Row, Col } from 'react-bootstrap'

import dealOfTheWeek_1 from '../../../assets/Image/dealOfTheWeek_1.png'
import DCountdownTimer from './DCountDownTimer'


const DealOfTheWeek = () => {
  return (
    <>
      <div className="container-xxl sectionGap_top dealBg">
        <Row>
            <Col lg={6} md={6} sm={12}>
                <div>
                <img className="dealImg" src={dealOfTheWeek_1} />
                </div>
            </Col>


            <Col lg={6} md={6} sm={12}>
                <div className='dealPadding'>
                    <p className='exSmallHeading'>DEAL OF THE WEEK</p>
                    <h2 className='dealHeding'>Sk Mart White T-shirt</h2>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    <DCountdownTimer />
                    <button className='button_B mt-5'>Shop Now</button>
                    <p className='dealSmallDesc mt-5'>Limited time offer. The deal will expires <span className='dealSmallBg'>on december, 2023</span> HURRY UP!</p>
                </div>
            </Col>
        </Row>
      </div>
    </>
  )
}

export default DealOfTheWeek
