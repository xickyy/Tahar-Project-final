import './About.css';

import door from './door.jpeg';


const About = () => {
  return (
    <div>
      <h2 className='text-center text-2xl text-blue-900 underline mb-6 mt-4'>About Tahar Garage Door Services</h2>
      <div className='about-custom-container'>
        <p className='p-2 text-lg'>Tahar Garage Door Services provides excellent customer service, specializing in all of your garage door service Cneeds. We’ve got you covered from fixing a
          minor mishap to installing a completely new garage door! We offer free estimates in a timely manner. We only use high-quality materials so they will withstand all seasons, daily use,
          and remain durable. All materials and labor provided include a warranty. Give us a call today! Family-owned and operated!
          Garage door repair in Lancaster California
          Garage door repair in Rosamond California
          Garage door repair in Quartz Hill California
          Garage door repair in Mojave California
          Garage door repair in Littlerock California
          Garage door repair in Acton California
          Garage door repair in Santa Clarita California
          Garage door repair in Lake Hughes California
          Garage door repair in Leona Valley California
          Garage door repair in Rancho Vista California
          Garage door repair in Sun Village California
          Garage door repair in Lakeview California
          Garage door repair in Elizabeth Lake California
          Garage door repair in Pearblossom California
          Garage door repair in Del Sur California</p>
      </div>

      <div className='px-4 pb-4'>
      <img src={door} className='about-door-img' alt=''></img>
      </div>

    </div>
  );
};


export default About;
