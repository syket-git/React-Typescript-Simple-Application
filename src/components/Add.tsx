import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
  patients: Props['patients'];
  setPatients: React.Dispatch<React.SetStateAction<Props['patients']>>;
}

const Add: React.FC<IProps> = ({ patients, setPatients }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    image: '',
    phone: '',
    disease: '',
    location: '',
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPatients([
      ...patients,
      {
        name: input?.name,
        age: parseInt(input?.age),
        image: input?.image,
        phone: input?.phone,
        disease: input?.disease,
        location: input?.location,
      },
    ]);
    setInput({
      name: '',
      age: '',
      image: '',
      phone: '',
      disease: '',
      location: '',
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input.name}
          onChange={handleChange}
          name="name"
          placeholder="Name"
        />
        <input
          type="number"
          value={input.age}
          onChange={handleChange}
          name="age"
          placeholder="Age"
        />
        <input
          type="text"
          value={input.image}
          onChange={handleChange}
          name="image"
          placeholder="Image Url"
        />
        <input
          type="text"
          value={input.phone}
          onChange={handleChange}
          name="phone"
          placeholder="Phone Number"
        />
        <input
          type="text"
          value={input.disease}
          onChange={handleChange}
          name="disease"
          placeholder="Disease"
        />
        <input
          type="text"
          value={input.location}
          onChange={handleChange}
          name="location"
          placeholder="Location"
        />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};
export default Add;
