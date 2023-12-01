import { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Col, Image } from "react-bootstrap";
import Modal from "../Modal/Modal";
import styles from './Gallery.module.scss';
import { API_URL } from "../../../config";
import { useDispatch, useSelector } from "react-redux";
import { currentOffer } from "../../../redux/currentOfferReducer";
import { nextPhoto, prevPhoto } from "../../../redux/galleryPhotoReducer";
const Gallery = ({ images }) => {
  const gallery = [process.env.PUBLIC_URL + '/realestate1.jpg', process.env.PUBLIC_URL + '/realestate2.jpg', process.env.PUBLIC_URL + '/realestate3.jpg',process.env.PUBLIC_URL + '/realestate1.jpg', process.env.PUBLIC_URL + '/realestate2.jpg', process.env.PUBLIC_URL + '/realestate3.jpg',process.env.PUBLIC_URL + '/realestate1.jpg', process.env.PUBLIC_URL + '/realestate2.jpg', process.env.PUBLIC_URL + '/realestate3.jpg',process.env.PUBLIC_URL + '/realestate1.jpg', process.env.PUBLIC_URL + '/realestate2.jpg', process.env.PUBLIC_URL + '/realestate3.jpg'];
  const [show, setShow] = useState(false);  
  const [photo, setPhoto] = useState(0);
  const dispatch = useDispatch();
  const ref = useRef(null);
  const offer = useSelector(currentOffer);


  const changePhoto = (sign) => {
    if(sign === '-') {
      dispatch(nextPhoto())
      photo >= 1 ? setPhoto(photo - 1) : setPhoto(images.length - 1);
    } else {
      dispatch(prevPhoto())
      photo < images.length - 1 ? setPhoto(photo + 1) : setPhoto(0);
    }
  }
  
  const prev = () => {
    requestAnimationFrame(() => {
      const scrollLeft = ref.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(ref.current.children[0]).width
      );
      ref.current.scrollLeft = scrollLeft - itemWidth * 3;
    });
  };
  const next = () => {
    requestAnimationFrame(() => {
      const scrollLeft = ref.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(ref.current.children[0]).width
      );
      ref.current.scrollLeft = scrollLeft + itemWidth * 1;
    });
  };
  const toggleModal = () => {
    setShow(!show);
    show ? document.body.style.overflow = "scroll" : document.body.style.overflow = "hidden";
  }

  if(!offer) return <h2>Loading....</h2>
  if(offer) return (
    <>
      <Col lg={{ order: 1, span: 6 }} md={{ order: 1 }} className={styles["image-container"] + " my-2"}>
      <Image src={API_URL + '/' + images[photo].name} onClick={() => toggleModal()} fluid />
        <button className={styles["arrow"]} onClick={() => changePhoto('-')} >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className={styles["arrow"]} onClick={() => changePhoto('+')} >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </Col>
      <Col lg={{ order: 3 }} md={{ order: 2 }} className={styles["miniatures-container"] + " my-3"}>
          <div className={styles["arrows"]}>
              <FontAwesomeIcon icon={faCircleChevronLeft} onClick={() => prev()}/>
              <FontAwesomeIcon icon={faCircleChevronRight} onClick={() => next()} />
          </div>
          <Col className={styles["images-container"] + " my-3"} ref={ref}>
            {images.map(img => <div key={ img.id } className={styles["miniature"]}><Image key={img.name} src={API_URL + '/' + img.name} className={images.indexOf(img) === photo && styles['active']} onClick={() => setPhoto(images.indexOf(img))} fluid /></div>)}
          </Col>
          </Col>
          <Modal content={images} photo={photo} show={show} toggleModal={() => toggleModal()} />
      </>
  )
}

export default Gallery;