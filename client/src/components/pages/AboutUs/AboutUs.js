import { Container, Row, Col } from "react-bootstrap";
import styles from './AboutUs.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faHandshake, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';


const AboutUs = () => {
  return (
    <Container className={styles["container"]}>
      <h2>Co nas wyróżnia</h2>
      <Row>
        <Col className={styles["about-container"]}>
        <div className={styles["icon-container"]}>
          <FontAwesomeIcon icon={faBriefcase} />
        </div>
          <div className={styles["description"]}>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu ligula, fermentum ut leo tincidunt, blandit sodales mi. Fusce volutpat, dui at aliquet laoreet, erat orci faucibus dui, id euismod diam urna ut leo.</p>
          </div>
        </Col>
        <Col className={styles["about-container"]}>
        <div className={styles["icon-container"]}>
          <FontAwesomeIcon icon={faHandshake} />
        </div>
          <div className={styles["description"]}>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu ligula, fermentum ut leo tincidunt, blandit sodales mi. Fusce volutpat, dui at aliquet laoreet, erat orci faucibus dui, id euismod diam urna ut leo.</p>
          </div>
        </Col>
        <Col className={styles["about-container"]}>
          <div className={styles["icon-container"]}>
            <FontAwesomeIcon icon={faMapLocationDot} />
          </div>
          <div className={styles["description"]}>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu ligula, fermentum ut leo tincidunt, blandit sodales mi. Fusce volutpat, dui at aliquet laoreet, erat orci faucibus dui, id euismod diam urna ut leo.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutUs;