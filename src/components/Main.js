import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RoomDetails from './RoomDetails';
import RoomTypes from './RoomTypes';

import resource from '../utils/resource';
import SliderComponent from './SliderComponent';

function Main() {
  return (
    <div>
        <SliderComponent />
      {resource.main.text}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoomTypes />} />
        <Route path="/room/:id" element={<RoomDetails />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Main
