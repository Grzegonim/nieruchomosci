import { Carousel } from "react-bootstrap";
import styles from './Home.module.scss';
import Description from "../Description/Description";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
  return (
    <>
      <Carousel className={styles.carousel } fade>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + '/realestate1.jpg'}
              alt="First slide"
            />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + '/realestate2.jpg'}
              alt="First slide"
            />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + '/realestate3.jpg'}
              alt="First slide"
            />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Description />
      <AboutUs />
    </>
  )
}

export default Home;