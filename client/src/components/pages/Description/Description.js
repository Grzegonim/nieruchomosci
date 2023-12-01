import { useNavigate  } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import styles from './Description.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faKey, faCircleInfo } from '@fortawesome/free-solid-svg-icons';


const Description = () => {
  const navigate = useNavigate();
  return (
    <Container className={styles["container"]}>
      <h2>Lorem Ipsum</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in suscipit urna. Proin cursus diam ac turpis tristique, vel vestibulum turpis pellentesque. In in ante venenatis, facilisis eros sed, imperdiet sem. Fusce nec dui nec erat rutrum lobortis. Ut rutrum rhoncus ex aliquam faucibus. Aenean quis risus cursus elit egestas tristique. Aliquam mi arcu, pretium eget eros id, sodales commodo ligula. Donec molestie ipsum a eros sodales lobortis. Pellentesque turpis magna, dapibus vel enim laoreet, vehicula rutrum quam.</p>
      <Row className={styles["icon-container"]}>
        <Col className={styles["icon"]} onClick={() => navigate('/sell')} xs={12} md={4}>
          <FontAwesomeIcon icon={faHouseChimney} />
          <div className={styles["description"]}>
            <h3>Sprzedaj</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in suscipit urna. </p>
          </div>
        </Col>
        <Col className={styles["icon"]} onClick={() => navigate('/buy')} xs={12} md={4}>
          <FontAwesomeIcon icon={faKey} />
          <div className={styles["description"]}>
            <h3>Kup</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in suscipit urna. </p>
          </div>
        </Col>
        <Col className={styles["icon"]} onClick={() => navigate('/about')} xs={12} md={4}>
          <FontAwesomeIcon icon={faCircleInfo} />
          <div className={styles["description"]}>
            <h3>O nas</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in suscipit urna. </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Description;