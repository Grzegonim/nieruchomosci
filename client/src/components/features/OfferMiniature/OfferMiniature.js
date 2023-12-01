import { Card, Col} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStairs, faBuilding, faCalendarDays, faLayerGroup, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import styles from './OfferMiniature.module.scss';
import { API_URL } from "../../../config";
import { useNavigate  } from "react-router-dom";

const OfferMiniature = ({ id, name, price, building, floor, year, rooms, surface, description, photos }) => {
  const navigate = useNavigate();
  return (
    <Col md={6} lg={4} className="p-0" onClick={() => navigate('/offer/' + id)}>
      <Card className={styles["card-container"] + " m-2"}>
        <Card.Img className={styles["image"]} variant="top" src={API_URL + '/' + photos[0].name} />
        <Card.Body>
            <Card.Title className={styles["title"]}>{ name }</Card.Title>
            <h6>{ price } zł</h6>
            <div className={styles["icons-container"]}>
              <div className={styles["detail"]}>
                <FontAwesomeIcon icon={faBuilding} />
                <span>{ building }</span>
              </div>
              <div className={styles["detail"]}>
                <FontAwesomeIcon icon={faStairs} />
                <span>{ floor }</span>
              </div>
              <div className={styles["detail"]}>
                <FontAwesomeIcon icon={faCalendarDays} />
                <span>{ year }</span>
              </div>
              <div className={styles["detail"]}>
                <FontAwesomeIcon icon={faLayerGroup} />
                <span>{ surface } m2</span>
              </div>
              <div className={styles["detail"]}>
                <FontAwesomeIcon icon={faDoorOpen} />
                <span>{ rooms }</span>
              </div>
            </div>
            <Card.Text>
              { description }
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Numer oferty: OMS/123/2023</small>
          </Card.Footer>
      </Card>
    </Col>
  )
}

export default OfferMiniature;