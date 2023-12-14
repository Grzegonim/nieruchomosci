import { useNavigate  } from "react-router-dom";
import { useState } from "react";

import { Container, Row, Col, Accordion, Image } from "react-bootstrap";
import styles from './Description.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faKey, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import DescriptionList from "../../features/DescriptionList/DescriptionList";

const Description = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const descritpon = [
    {
      name: "KOMPETENCJE",
      description: "Posiadamy wykształcenie w dziedzinie geodezji oraz finansów. W tym roku została nam również przyznana licencja pośredników nieruchomości, poprzedzona zdanym egzaminem zawodowym."
    },
    {
      name: "DOŚWIADCZENIE",
      description: "Jesteśmy praktykami. Od wielu lat działamy w branży geodezyjnej oraz rachunkowej. Na bieżąco aktualizujemy wiedzę z zakresu obowiązujących przepisów prawa."
    },
    {
      name: "KOMPLEKSOWA OBSŁUGA",
      description: "Z uwagi na wieloletnie doświadczenie, jesteśmy w stanie przeprowadzić Państwa przez cały proces inwestycyjny, doradzając przy tym najbardziej optymalne rozwiązanie."
    },
    {
      name: "BEZPIECZEŃSTWO",
      description: "Wybierając nasze biuro, możecie być Państwo spać spokojnie. Jesteśmy w stanie poprowadzić Państwa sprawy ograniczając ryzyko do minimum. W trosce o Państwa dobro, posiadamy również polisę ubezpieczeniową, która ma w jak najlepszy sposób zabezpieczyć Państwa mienie oraz interesy."
    },
    {
      name: "PROFESJONALIZM",
      description: "Każdego klienta traktujemy w sposób indywidualny. Mamy świadomość, że Państwa sytuacje bywają bardzo różne, dlatego staramy się dokładać wszelkich starań by zagwarantować pełną satysfakcję, bez względu na okoliczności."
    },
    {
      name: "NOWOCZESNY SPRZĘT",
      description: "Na wyposażeniu biura posiadamy sprzęt geodezyjny, którym jesteśmy w stanie w Państwa obecności wskazać granice działek. Dysponujemy także dronem, oraz kamerą sferyczną, która umożliwia przygotowanie wirtualnych spacerów."
    }
  ]

  return (
    <Container className={styles["container"]}>
      <h2>MW - NIERUCHOMOŚCI</h2>
      <div className={styles["description-container"]}>
        <div className={styles["photo"]}>
          <Image src={process.env.PUBLIC_URL + '/logo_company.svg'} fluid />
        </div>
        <div className={styles["description"]}>
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            {descritpon.map(desc => <DescriptionList name={desc.name} description={desc.description} />)}
          </Accordion>
        </div>
      </div>
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