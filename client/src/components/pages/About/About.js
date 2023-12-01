import styles from './About.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faHouseChimney, faUmbrella, faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import Maps from '../../features/Map/Map';

const About = () => {
  return (
    <Container>
      <Col className={styles["header"]}>
        <h2>O nas</h2>
      </Col>
      <Row>
        <Col className={styles["details-container"]} lg={6}>
          <div className={styles["icon"]}><FontAwesomeIcon icon={faGraduationCap} /></div>
          <div>
            <h3>Licencjonowani Pośrednicy</h3>
            <p>
              Nisi do irure ipsum duis et enim incididunt est. Ipsum elit reprehenderit culpa occaecat labore in.
              Id eu exercitation laboris culpa id magna magna non qui aliqua ipsum sit in.
            </p>
          </div>
        </Col>
        <Col className={styles["details-container"]} lg={6}>
          <div className={styles["icon"]}><FontAwesomeIcon icon={faHouseChimney} /></div>
          <div>
            <h3>Kompleksowa pomoc w zakupie nieruchomośći</h3>
            <p>
              Nisi do irure ipsum duis et enim incididunt est. Ipsum elit reprehenderit culpa occaecat labore in.
              Id eu exercitation laboris culpa id magna magna non qui aliqua ipsum sit in.
            </p>
          </div>
        </Col>
        <Col className={styles["details-container"]} lg={6}>
          <div className={styles["icon"]}><FontAwesomeIcon icon={faUmbrella} /></div>
          <div>
            <h3>Bezpieczeństwo</h3>
            <p>
              Nisi do irure ipsum duis et enim incididunt est. Ipsum elit reprehenderit culpa occaecat labore in.
              Id eu exercitation laboris culpa id magna magna non qui aliqua ipsum sit in.
            </p>
          </div>
        </Col>
        <Col className={styles["details-container"]} lg={6}>
          <div className={styles["icon"]}><FontAwesomeIcon icon={faBusinessTime} /></div>
          <div>
            <h3>Oszczędność czasu</h3>
            <p>
              Nisi do irure ipsum duis et enim incididunt est. Ipsum elit reprehenderit culpa occaecat labore in.
              Id eu exercitation laboris culpa id magna magna non qui aliqua ipsum sit in.
            </p>
          </div>
        </Col>
      </Row>
      <Maps />
    </Container>
  )
}

export default About;