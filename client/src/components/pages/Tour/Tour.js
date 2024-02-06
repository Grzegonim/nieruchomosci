import styles from './Tour.module.scss';
import { Container, Col, Row, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard, faCamera } from '@fortawesome/free-solid-svg-icons';


const Tour = () => {
    return (
        <Container className={styles["container"]}>
            <Col className={styles["header"]}>
                <h2>Wirtualny spacer / Fotografia panormaiczna 360</h2>
            </Col>
            <Col className={styles["tour"]}>
                <iframe src="https://sb360.online/i5uvyf" height="450" width="650" allow="microphone;fullscreen" allowfullscreen allowmicrophone ></iframe>
            </Col>
            <Col>
                <p>
                    Prezentujemy Państwu naszą nowoczesną usługę wirtualnego spaceru i fotografii 360.  W odróżnieniu od zwykłego zdjęcia pozwala spojrzeć na to samo wnętrze z innej perspektywy, dzięki czemu pozwoli uczynić prezentację Państwa nieruchomości jeszcze bardziej atrakcyjną i dostępną dla potencjalnych nabywców.
                </p>
            </Col>
            <Row>
                <Col className={styles["about-container"]}>
                <div className={styles["icon-container"]}>
                <FontAwesomeIcon icon={faCamera} />
                </div>
                <div className={styles["description"]}>
                    <h3>Fotografia 360</h3>
                    <p>
                    Dzięki użyciu nowoczesnego sprzętu do fotografii sferycznych nasze wysokiej jakości fotografie 360 stopni pozwalają uwiecznić całe otoczenie nieruchomości, zarówno wewnątrz, jak i na zewnątrz. Dzięki nim potencjalni nabywcy mogą zanurzyć się w atmosferę nieruchomości, obserwując ją z różnych perspektyw.
                    </p>
                </div>
                </Col>
                <Col className={styles["about-container"]}>
                <div className={styles["icon-container"]}>
                <FontAwesomeIcon icon={faClapperboard} />
                </div>
                <div className={styles["description"]}>
                    <h3>Wirtualny Spacer</h3>
                    <p>
                    Zapewniamy możliwość przeglądania nieruchomości online, dzięki wirtualnemu spacerowi. Klienci mogą komfortowo przechadzać się po nieruchomości, niemal jakby byli na miejscu. To rozwiązanie sprawia, że potencjalni nabywcy mogą zobaczyć każdy detal nieruchomości, bez konieczności obecności na miejscu.
                    </p>
                </div>
                </Col>
            </Row>       
        </Container>
    )
}

export default Tour;