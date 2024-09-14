import React from 'react';
import { useParams } from 'react-router-dom';
import resource from '../utils/resource'

const RoomDetails = () => {
  const { id } = useParams(); 
  const room = resource.roomData.find((room) => room.id === parseInt(id));
  console.log(room)

  if (!room) {
    return <h2>Oda bulunamadı!</h2>;
  }

  return (
    <div className="container mt-5">
        <p>{room.id}</p>
      <h2>{room.type} Detayları</h2>
      <img src={room.imageUrl} alt={room.type} className="img-fluid mb-4" />
      <p><strong>Fiyat: {room.price} TL / gece</strong></p>
      <p>{room.description}</p>
      <ul>
        {room.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoomDetails;
