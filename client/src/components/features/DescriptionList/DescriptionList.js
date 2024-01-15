import { useState } from "react";
import styles from './DescriptionList.module.scss';
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DescriptionList = ({ name, description, icon }) => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <Accordion.Item className={styles["header"]} eventKey={name}>
      <Accordion.Header><span className={styles["icon-title"]}><FontAwesomeIcon icon={icon} /></span>{name}</Accordion.Header>
        <Accordion.Body class="border-0">
          {description}
        </Accordion.Body>
    </Accordion.Item>
  )
}

export default DescriptionList;