import styles from './ContactBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAt, faMapPin } from '@fortawesome/free-solid-svg-icons';

const ContactBar = () => {
  return (
    <div className={styles["contact-container"]}>
      <div className={styles["contact-detail"]}><FontAwesomeIcon icon={faPhone} /><span>555000888</span></div>
      <div className={styles["contact-detail"]}><FontAwesomeIcon icon={faAt} /><span>nieruchomosci@womit.com</span></div>
      <div className={styles["contact-detail"]}><FontAwesomeIcon icon={faMapPin} /><div className={styles["address"]}><span>ul. Czartoryskiego 25/12</span><span>66-400 Gorzów Wielkopolski</span></div></div>      
    </div>
  )
}

export default ContactBar;