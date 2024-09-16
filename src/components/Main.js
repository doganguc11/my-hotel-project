import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RoomDetails from './RoomDetails';
import RoomTypes from './RoomTypes';

import resource from '../utils/resource';
import SliderComponent from './SliderComponent';
import CustomTextSwitcher from '../context/CustomTextSwitcher';
import AboutUs from './AboutUs';
import Contact from './Contact';

function Main() {
    return (
        <main>
            <CustomTextSwitcher texts={
                resource.main.textSwitcher.map((textSwitch) =>(
                    <p className='subtitle my-2 text-center'>
                        <span className='test'> {textSwitch.switch} </span> 
                        <span> {resource.main.text} </span>
                    </p>
                ))} intervalTime={3000} />
            <SliderComponent />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RoomTypes />} />
                    <Route path="/room/:id" element={<RoomDetails />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default Main
