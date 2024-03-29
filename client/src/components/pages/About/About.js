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
            Posiadamy licencje pośredników w obrocie nieruchomościami numer, numer. Codziennie aktualizujemy wiedzę nie tylko z zakresu obrotu nieruchomości, ale również z przepisów szeroko pojętego prawa budowlanego oraz podatkowego. W ten sposób możemy spełnić oczekiwania nawet najbardziej wymagającego klienta.
            </p>
          </div>
        </Col>
        <Col className={styles["details-container"]} lg={6}>
          <div className={styles["icon"]}><FontAwesomeIcon icon={faHouseChimney} /></div>
          <div>
            <h3>Kompleksowa pomoc w zakupie nieruchomośći</h3>
            <p>
              Nasze biuro oferuje kompleksową pomoc poczynając od od gruntownej analizy lokalizacji, uwzględniając zarówno aspekty rynkowe, jak i indywidualne preferencje klienta.
              Sprawdzimy wybraną działkę również pod kątem prawnym, a także geodezyjnym. Ograniczymy do minimum udział w kompletowaniu dokumentacji oraz formalnościach.
            </p>
          </div>
        </Col>
        <Col className={styles["details-container"]} lg={6}>
          <div className={styles["icon"]}><FontAwesomeIcon icon={faUmbrella} /></div>
          <div>
            <h3>Bezpieczeństwo</h3>
            <p>
              Rozumiemy, że bezpieczeństwo w przeprowadzaniu transakcji powinno być priorytetem. Każdego klienta traktujemy indywidualnie, zapewniając wsparcie na każdym etapie, tak, żeby we wszystkich etapach procesu inwestycyjnego mógł spać spokojnie. Dodatkowo, wszystkie prowadzone przez nas transakcje są objęte ubezpieczeniem.
            </p>
          </div>
        </Col>
        <Col className={styles["details-container"]} lg={6}>
          <div className={styles["icon"]}><FontAwesomeIcon icon={faBusinessTime} /></div>
          <div>
            <h3>Oszczędność czasu</h3>
            <p>
            W dzisiejszym świecie czas jest droższy od pieniędzy. Staramy się ograniczyć Państwa udział do minimum, maksymalizując przy tym bezpieczeństwo. Z nami zapomną Państwo o wizytach w urzędach, sądach oraz innych instytucjach, w których wizyta jest niezbędna w procesie obrotu nieruchomościami.
            </p>
          </div>
        </Col>
      </Row>
      <Maps />
    </Container>
  )
}

export default About;