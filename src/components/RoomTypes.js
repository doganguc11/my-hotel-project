import React from 'react';
import { Link } from 'react-router-dom';
import resource from '../utils/resource';


const RoomTypes = () => {
  return (
    <div className="container mt-5">
      <h2>Oda Türleri</h2>
      <div className='room-type'>
        <div className="row">
          {resource.rooms.map((room) => (
            <div key={room.id} className="col-md-3">
              <div className="card mb-3 position-relative">
                <p className='room-type-discount position-absolute'>
                  <span className={room.discount ? 'room-type-discount-text bg-danger fw-bolder' : ''}> {room.discount ? room.discount : ''} </span>
                </p>
                <img src={room.imageUrl} className="card-img-top" alt={room.type} />
                <div className="card-body">
                  <h5 className="card-title">{room.type}</h5>
                  <p><strong>{room.price} ₺ / gece</strong></p>
                  <Link to={`/room/${room.id}`} className="btn btn-warning">Detayları Gör</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default RoomTypes;
