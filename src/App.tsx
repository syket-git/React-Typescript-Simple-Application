import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import Add from './components/Add';

export interface IState {
  patients: {
    name: string;
    age: number;
    image: string;
    phone: string;
    location?: string;
    disease: string;
  }[];
}

function App() {
  const [patients, setPatients] = useState<IState['patients']>([
    {
      name: 'Syket Bhattachergee',
      age: 21,
      phone: '01234567890',
      image:
        'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg',
      location: 'Chittagong, Bangladesh',
      disease: 'Acne',
    },
  ]);

  return (
    <div className="App">
      <h2 className="title">Patients List</h2>
      <List patients={patients} />
      <Add patients={patients} setPatients={setPatients} />
    </div>
  );
}

export default App;
