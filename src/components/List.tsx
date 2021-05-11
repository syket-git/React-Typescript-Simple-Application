import React from 'react';

interface IProps {
  patients: {
    name: string;
    age: number;
    image: string;
    location?: string;
    phone: string;
    disease: string;
  }[];
}

const List: React.FC<IProps> = ({ patients }) => {
  return (
    <div>
      <div className="items">
        <p className="total-patients">Total Patients: {patients?.length}</p>
        {patients?.map((pt) => (
          <div className="item-wrapper">
            <div className="image-wrapper">
              <img src={pt.image} alt="" />
            </div>
            <div className="item-info">
              <h4>{pt.name}</h4>
              <p>Age: {pt.age} years old</p>
              <p>Phone: {pt.phone}</p>
              <p>Disease: {pt.disease}</p>
              <p>Location: {pt.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
