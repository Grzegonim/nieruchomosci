import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { addOffer } from "../../../redux/offersReducer";

const AddOffer = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    pricem2: 0,
    floor: '',
    rooms: 0,
    surface: 0,
    building: '',
    market: '',
    year: 0,
    garage: false,
    basement: false,
    //location: '',
  });
  const [imagesData, setImagesData] = useState({
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : (name === 'year' || name === 'price' || name === 'pricem2' || name === 'surface' || name === 'rooms' ? parseInt(value, 10) : value),
    }));
  };

  const handleChangeImages = (e) => {
    const { name, files } = e.target;
    if (name === 'images') { 
      const imagesArray = Array.from(files);
      setImagesData((prevData) => ({
        ...prevData,
        images: imagesArray,
      }));
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const imagesFormData = new FormData();
  
    // Create an array of Promises for each file append operation
    const promises = imagesData.images.map(async (photo, index) => {
      imagesFormData.append(`photos`, photo);
    });
  
    // Wait for all Promises to resolve
    await Promise.all(promises);
  
    // Log FormData entries
    //console.log(imagesData.images)
    for (const entry of imagesFormData.entries()) {
      //console.log(entry);
    }
    dispatch(addOffer(formData, imagesFormData));
  };


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Nazwa</Form.Label>
        <Form.Control
          required
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="price">
        <Form.Label>Cena</Form.Label>
        <Form.Control
          required
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="pricem2">
        <Form.Label>Cena za m2</Form.Label>
        <Form.Control
          required
          type="number"
          name="pricem2"
          value={formData.pricem2}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="floor">
        <Form.Label>Piętro</Form.Label>
        <Form.Control
          required
          type="text"
          name="floor"
          value={formData.floor}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="rooms">
        <Form.Label>Liczba pokoi</Form.Label>
        <Form.Control
          required
          type="number"
          name="rooms"
          value={formData.rooms}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="surface">
        <Form.Label>Powierzchnia</Form.Label>
        <Form.Control
          required
          type="number"
          name="surface"
          value={formData.surface}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="building">
        <Form.Label>Budynek</Form.Label>
        <Form.Control
          required
          type="text"
          name="building"
          value={formData.building}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="market">
        <Form.Label>Rynek</Form.Label>
        <Form.Control
          required
          type="text"
          name="market"
          value={formData.market}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="year">
        <Form.Label>Rok Budowy</Form.Label>
        <Form.Control
          required
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
        />
      </Form.Group>

{/*      <Form.Group controlId="location">
        <Form.Label>Lokalizacja</Form.Label>
        <Form.Control
          required
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </Form.Group>*/}

      <Form.Group controlId="garage">
        <Form.Check
          type="checkbox"
          label="Garaż"
          name="garage"
          value={formData.garage}
          onChange={handleChange}
        />
        <Form.Check
          type="checkbox"
          label="Piwnica"
          name="basement"
          value={formData.basement}
          onChange={handleChange}
        />
      </Form.Group>
      
      <Form.Group controlId="description">
        <Form.Label>Opis</Form.Label>
        <Form.Control
          required
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          multiple
          type="file"
          name="images"
          accept="image/*"
          onChange={handleChangeImages}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default AddOffer;