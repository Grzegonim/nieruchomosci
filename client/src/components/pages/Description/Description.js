import { useNavigate  } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import styles from './Description.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faKey, faCircleInfo } from '@fortawesome/free-solid-svg-icons';


const Description = () => {
  const navigate = useNavigate();
  return (
    <Container className={styles["container"]}>
      <h2>MW - NIERUCHOMOŚCI</h2>
      <p>
      Jesteśmy licencjonowanymi pośrednikami w obrocie nieruchomościami. Posiadamy wykształcenie z dziedziny geodezji oraz finansów, poparte wieloletnim doświadczeniem zawodowym. Dlatego powierzając nam swoje sprawy, możecie być Państwo pewni najwyższej jakości świadczonych usług, a przede wszystkim bezpieczeństwa, które gwarantuje znajomość aktualnie obowiązujących przepisów prawa. Z uwagi na naszą specjalistyczną wiedzę, możemy Państwa kompleksowo przeprowadzić przez cały proces inwestycyjny. Od pomocy w wyborze najbardziej optymalnej działki, przez jej podział, aż do spełnienia marzeń ustami Mitusia. 
      </p>
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