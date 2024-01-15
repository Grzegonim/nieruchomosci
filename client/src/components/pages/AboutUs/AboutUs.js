import { Container, Row, Col } from "react-bootstrap";
import styles from './AboutUs.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faHandshake, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';


const AboutUs = () => {
  return (
    <Container className={styles["container"]}>
      <h2>Dlaczego my?</h2>
      <Row>
        <Col className={styles["about-container"]}>
        <div className={styles["icon-container"]}>
          <FontAwesomeIcon icon={faBriefcase} />
        </div>
          <div className={styles["description"]}>
            <h3>Formalności</h3>
            <p>Wizyty w urzędach, sądach oraz innych instytucjach związanych z obsługą nieruchomości, z pewnością mogą przysporzyć wiele stresu. Dlatego wszystkie formalności spełnimy za Ciebie.</p>
          </div>
        </Col>
        <Col className={styles["about-container"]}>
        <div className={styles["icon-container"]}>
          <FontAwesomeIcon icon={faHandshake} />
        </div>
          <div className={styles["description"]}>
            <h3>Indywidualna Obsłga Klienta</h3>
            <p>Wiemy jak ważna jest dla Państwa dyspozycyjność, dlatego telefon odbieramy nawet poza godzinami pracy biura. Jesteśmy w stanie dostosować się do waszego planu dnia.</p>
          </div>
        </Col>
        <Col className={styles["about-container"]}>
          <div className={styles["icon-container"]}>
            <FontAwesomeIcon icon={faMapLocationDot} />
          </div>
          <div className={styles["description"]}>
            <h3>Wszechstronność</h3>
            <p>Z uwagi na nasze doświadczenie zawodowe jesteśmy na bieżąco z przepisami prawa. Posiadamy nowoczesny sprzęt, dzięki któremu możemy świadczyć nowoczesną usługę. Śledzimy również najnowsze trendy w social mediach.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutUs;