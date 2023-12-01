import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Modal.module.scss';
import { API_URL } from '../../../config';

const Modal = ({ show, content, photo, toggleModal }) => {
  const [image, setImage] = useState(photo);

  useEffect(() => {
    setImage(photo);
  }, []);

  const changePhoto = (sign) => {
    if(sign === '-') {
      image >= 1 ? setImage(image - 1) : setImage(content.length - 1);
    } else {
      image < content.length - 1 ? setImage(image + 1) : setImage(0);
    }
  }

  if(show) return (
    <div className={styles["modal-container"]}>
      <div className={styles["image-container"]}>
        <div className={styles["close"]}>
          <FontAwesomeIcon icon={faCircleXmark} onClick={toggleModal} />
        </div>
        <button className={styles["arrow-left"]} onClick={() => changePhoto('-')} >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className={styles["arrow-right"]} onClick={() => changePhoto('+')} >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <Image src={API_URL + '/' + content[image].name} fluid />
        </div>
    </div>
  )
}

export default Modal;