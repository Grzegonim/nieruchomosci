import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStairs, faBuilding, faCalendarDays, faLayerGroup, faDoorOpen, faDollarSign, faMoneyBillTrendUp, faSquareParking, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import styles from './Offer.module.scss';
import Gallery from "../../features/Gallery/Gallery";
import { fetchOfferById, currentOffer } from "../../../redux/currentOfferReducer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Offer = () => {
  const { id } = useParams('id');
  const dispatch = useDispatch();
  const offer = useSelector(currentOffer);

  useEffect(() => {
    dispatch(fetchOfferById(id));
  }, [dispatch]);

  if(offer === null) return <h2>Loading</h2>
  if(offer !== null) return (
    <Container>
      <Row className="mx-1">
        <h3>{ offer.name }</h3>
        <Gallery images={offer.photos} />
        <Col lg={{ order: 2, span: 6 }} md={{ order: 3 }} className={"my-2"}>
          <Row className={styles["details-container"]}>
            <Col className={styles["detail-grey"]} lg={6} md={12}><div className={styles["icon"]}><FontAwesomeIcon icon={faDollarSign} /></div><div className={styles["detail"]}>Cena: <span>{ offer.price } zł</span></div></Col>
            <Col className={styles["detail-grey"]} lg={6} md={12}><div className={styles["icon"]}><FontAwesomeIcon icon={faDollarSign} /></div><div className={styles["detail"]}>Cena za m2: <span>{ offer.pricem2 } zł</span></div></Col>
            <Col className={styles["detail-lightgrey"]} lg={6} md={12}><div className={styles["icon"]}><FontAwesomeIcon icon={faStairs} /></div><div className={styles["detail"]}>Piętro: <span>{ offer.floor }</span></div></Col>
            <Col className={styles["detail-lightgrey"]} lg={6} md={12}><div className={styles["icon"]}><FontAwesomeIcon icon={faDoorOpen} /></div><div className={styles["detail"]}>Liczba pokoi: <span>{ offer.rooms }</span></div></Col>
            <Col className={styles["detail-grey"]} lg={6} md={12}><div className={styles["icon"]}><FontAwesomeIcon icon={faLayerGroup} /></div><div className={styles["detail"]}>Powierzchnia: <span>{ offer.surface } m2</span></div></Col>
            <Col className={styles["detail-grey"]} lg={6} md={12}><div className={styles["icon"]}><FontAwesomeIcon icon={faBuilding} /></div><div className={styles["detail"]}>Zabudowa: <span>{ offer.building }</span></div></Col>
            <Col className={styles["detail-lightgrey"]} lg={6} md={12}><div className={styles["icon"]}><FontAwesomeIcon icon={faMoneyBillTrendUp} /></div><div className={styles["detail"]}>Rynek: <span>{ offer.market }</span></div></Col>
            <Col className={styles["detail-lightgrey"]} lg={6} md={12}><div className={styles["icon"]}><FontAwesomeIcon icon={faCalendarDays} /></div><div className={styles["detail"]}>Rok budowy: <span>{ offer.year }</span></div></Col>
            <Col className={styles["detail-grey"]} lg={6} md={12}><div className={styles["icon"]}><FontAwesomeIcon icon={faSquareParking} /></div><div className={styles["detail"]}>Piwnica: <span>{ offer.basement ? 'Tak' : 'Nie' }</span></div></Col>
            <Col className={styles["detail-grey"]} lg={6} md={12}><div className={styles["icon"]}><FontAwesomeIcon icon={faWarehouse} /></div><div className={styles["detail"]}>Garaż: <span>{ offer.garage ? 'Tak' : 'Nie' }</span></div></Col>
          </Row>
        </Col>
        <Col md={{ order: 4 }} xs={12}>
          <h3>Opis nieruchomości</h3>
          <p>{ offer.description }</p>
        </Col>
      </Row>      
    </Container>
  )
}

export default Offer;