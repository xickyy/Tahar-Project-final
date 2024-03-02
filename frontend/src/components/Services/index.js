import './Services.css';

import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import springs from './images/springs.jpeg';
import springs2 from './images/springs2.jpeg';
import motor from './images/motor.jpeg';
import motor2 from './images/motor2.jpeg';
import header from './images/header.jpeg';
import track from './images/track.jpeg';
import track2 from './images/track2.jpeg';

const Services = () => {
  return (
    <div className=''>

      <img className='w-screen' src={header} alt=''></img>
      <div className='services-grid-container'>
        <Link to='/services/tips' className='service-links'>
          Tips & tricks
        </Link>

        <Link to='/services/doors' className='service-links'>
          Garage Doors
        </Link>

        <Link to='/services/motors' className='service-links'>
          Motors / Openers
        </Link>

        <Link to='/services/sensors' className='service-links'>
          Sensors
        </Link>

        <Link to='/services/tracks' className='service-links'>
          Tracks
        </Link>

        <Link to='/services/springs' className='service-links'>
          Springs
        </Link>
      </div>








      {/* <h2 className='text-center text-4xl text-blue-900 underline'>Services</h2>

      <div className='lg:flex justify-around p-2 m-2'>
        <div className='flex justify-around lg:flex-col xl:flex-row ml-2 xl:my-auto'>
          <img className='w-40 lg:w-64 rounded-lg m-2 custom-service-img' src={springs} alt=''></img>
          <img className='w-40 lg:w-64 rounded-lg m-2 custom-service-img' src={springs2} alt=''></img>
        </div>
        <div className='lg:w-1/2'>
          <h2 className='text-center text-2xl underline'>Springs</h2>
          <p className='mt-4'>Most garage doors have two springs installed at the same time, so when one breaks, it’s safe to say the second spring’s life expectancy has just about expired. In order to save you from future inconvenience, unsafe garage door practices, and damaging your garage door opener, Tahar Garage Door Services will usually recommend to replace both springs. If you’ve had the same tires on your car for a while and one blows out while you’re driving, wouldn’t you replace them both? It’s extremely important for your own safety (and time) to properly maintain high value equipment such as garage doors and automobiles, so replacing both springs on your garage door is the best option.</p>
          <p className='mt-4'>Since garage doors come in all weights and sizes, the right springs need to be installed in order to properly balance the door. If a technician puts the wrong spring on your door, not only will this damage your garage door system, but it will cause the garage door opener to do more work than it was built to do. Your opener is more likely to break quickly if the wrong spring is installed, forcing you to call for another repair. DIY spring replacement also is often an unsafe option because of this. This is why Tahar Garage Door Services only install the right springs for the door’s weight and check their work by performing a balance test.</p>
        </div>
      </div>

      <div className='lg:flex justify-around p-2 m-2'>
        <div className='flex justify-around lg:flex-col xl:flex-row ml-2 xl:my-auto'>
          <img className='w-40 lg:w-64 rounded-lg m-2 custom-service-img' src={motor} alt=''></img>
          <img className='w-40 lg:w-64 rounded-lg m-2 custom-service-img' src={motor2} alt=''></img>
        </div>
        <div className='lg:w-1/2'>
          <h2 className='text-center text-2xl underline'>Opener's / Motors</h2>
          <p className='mt-4'>How Garage Door Openers Work:
            Garage door openers consist of several key components that work together to facilitate the smooth operation of the garage door. The primary components include:

            Motor: The motor is the heart of the garage door opener. It is responsible for generating the power needed to lift and lower the door.

            Drive Mechanism: There are three main types of drive mechanisms: chain drive, belt drive, and screw drive. These mechanisms transmit the motor's power to the garage door, moving it up and down along a track.

            Remote Control: Garage door openers are equipped with remote controls that allow users to open and close the door from a distance. These remotes use radio signals to communicate with the opener.

            Safety Sensors: Modern garage door openers are equipped with safety sensors that detect objects or obstructions in the door's path. If an obstruction is detected, the door reverses its direction to prevent accidents.</p>
          <p className='mt-4'>Common Problems with Garage Door Openers:
            Despite their reliability, garage door openers can encounter several common issues over time. It's important to be aware of these problems to ensure your garage door operates safely and efficiently. Some common issues include:

            Loud or Noisy Operation: A noisy garage door opener may be caused by worn-out or damaged components, such as rollers, hinges, or the drive mechanism.

            Remote Control Problems: Issues with the remote control can stem from dead batteries, signal interference, or a malfunctioning remote. Replacing batteries and reprogramming the remote can often resolve these problems.

            Safety Sensor Malfunctions: If the safety sensors are misaligned or dirty, they may prevent the garage door from closing properly. Regularly clean and check the alignment of these sensors to ensure they function correctly.

            Opener Not Responding: Sometimes, the garage door opener may not respond to remote commands. This could be due to electrical issues, such as a blown fuse or a tripped circuit breaker. In such cases, a professional electrician may be required to diagnose and repair the problem.

            Door Reversal Issues: If the garage door reverses without apparent cause, it may indicate a problem with the safety sensors, the door's balance, or the opener's force settings. Adjustments may be needed to correct these issues.</p>
        </div>
      </div>

      <div className='lg:flex justify-around p-2 m-2'>
        <div className='flex justify-around lg:flex-col xl:flex-row ml-2 xl:my-auto'>
          <img className='w-40 lg:w-64 rounded-lg m-2 custom-service-img' src={track} alt=''></img>
          <img className='w-40 lg:w-64 rounded-lg m-2 custom-service-img' src={track2} alt=''></img>
        </div>
        <div className='lg:w-1/2'>
          <h2 className='text-center text-2xl underline'>Doors off Track</h2>
          <p className='mt-4'>If your garage door is off track, it's important to refrain from operating it further. Attempting to use the door in this condition can cause more damage. It's advisable to contact a professional garage door technician to assess and repair the issue</p>
          <p className='mt-4'>A door that has fallen off It's track may not seem like a big problem and you may think attmpting a DIY might be a good idea however because of many factors including the weight of the door and the tension on the springs and cables can offten times cause further damage to the door or worse, injury to yourself. </p>
        </div>
      </div> */}

    </div>
  );
};



export default Services;
