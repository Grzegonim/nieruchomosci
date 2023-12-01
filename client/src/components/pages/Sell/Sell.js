import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import OfferMiniature from "../../features/OfferMiniature/OfferMiniature";
import { uploadOffers, offersList } from "../../../redux/offersReducer";

const Sell = () => {
  const dispatch = useDispatch();
  const offers = useSelector(offersList);

  useEffect(() => {
    dispatch(uploadOffers());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        { offers.map(offer => <OfferMiniature key={offer.id} {...offer} />) }
      </Row>
    </Container>
  )
}

export default Sell;