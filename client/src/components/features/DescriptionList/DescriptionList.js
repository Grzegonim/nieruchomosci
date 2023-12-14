import { useState } from "react";
import styles from './DescriptionList.module.scss';
import { Accordion } from "react-bootstrap";

const DescriptionList = ({ name, description }) => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <Accordion.Item className={styles["header"]} eventKey={name}>
      <Accordion.Header >{name}</Accordion.Header>
        <Accordion.Body class="border-0">
          {description}
        </Accordion.Body>
    </Accordion.Item>
  )
}

export default DescriptionList;