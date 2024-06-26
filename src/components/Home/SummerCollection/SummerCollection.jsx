
import { Col, Image, Row } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";


import summer_collection2 from '../../../assets/Image/summer_collection2.jpg'

const SummerCollection = () => {
  return (
    <>
      <div className='sectionGap_top'>
        <div className="container-xxl summerCollection ">
            <Row>
                <Col lg={6} md={6} sm={12} className='ps-0'>
                    <Image src={summer_collection2} className='sumColImg' />
                </Col>


                <Col lg={6} md={6} sm={12} className=''>

                    <div className='sumContent'>
                        <p className='exSmallHeading mt-5'>SUMMER COLLECTION</p>
                        <h4 className='heading'>This is our summer collection</h4>
                        <p className='description smDescpadding'>consectetur adipisicing elit. Illum quas facilis culpa laboriosam debitis fuga accusamus quidem dolore dolores non!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus eum, dolore dicta provident eveniet vitae eius repellat vel officiis quod?</p>
                        <button className='button_A' >Shop Now <FaArrowRightLong/></button>
                    </div>

                </Col>

            </Row>
        </div>
      </div>
    </>
  )
}

export default SummerCollection
