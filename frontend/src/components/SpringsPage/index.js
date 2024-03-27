import './SpringsPage.css';
import springs from "../Gallery/images/22.jpeg"
import springsHead from "./2.jpeg"

function SpringsPage() {
  return (
    <div>
      <img className='border border-black md:hidden' src={springsHead}></img>

      <h2 className='text-center font-bold text-2xl mb-4 underline'>Springs</h2>


      <div className='text-center m-2'>
        <p className="ml-2 mr-2 mb-4 text-lg" >Focusing on garage door springs, here's how Tahar Garage Door Services can assist you:</p>
      </div>

      <div className='tips-list-el'>
        <p className='font-bold mr-2 whitespace-nowrap border border-black custom-tips-title border-b-0 md:mb-2 md:border-b'>Reliable and Durable Springs:</p>
        <p className='flex border border-black mb-2 ml-2 mr-2 p-2 custom-tips-info'>At Tahar Garage Door Services, we understand the importance of high-quality garage door springs. Our springs are built to withstand the rigors of daily use, providing reliable performance and long-lasting durability.</p>
      </div>
      <div className='tips-list-el'>
        <p className='font-bold mr-2 whitespace-nowrap border border-black custom-tips-title border-b-0 md:mb-2 md:border-b'>Balanced Door Operation:</p>
        <p className='flex border border-black mb-2 ml-2 mr-2 p-2 custom-tips-info'>Garage door springs are responsible for counterbalancing the weight of the door, making it easy to open and close smoothly. Our expertly calibrated springs ensure that your door operates with optimal balance, reducing strain on the opener and prolonging its lifespan.</p>
      </div>
      <div className='tips-list-el'>
        <p className='font-bold mr-2 whitespace-nowrap border border-black custom-tips-title border-b-0 md:mb-2 md:border-b'>Expert Spring Replacement and Repair:</p>
        <p className='flex border border-black mb-2 ml-2 mr-2 p-2 custom-tips-info'>Over time, garage door springs may wear out or break, causing your door to become unbalanced or inoperable. Our experienced technicians are equipped to handle spring replacement and repair quickly and efficiently, restoring your door's functionality and safety.</p>
      </div>
      <div className='tips-list-el'>
        <p className='font-bold mr-2 whitespace-nowrap border border-black custom-tips-title border-b-0 md:mb-2 md:border-b'>Customized Spring Solutions:</p>
        <p className='flex border border-black mb-2 ml-2 mr-2 p-2 custom-tips-info'>Every garage door is unique, and our team at Tahar Garage Door Services understands that one size does not fit all. We offer customized spring solutions tailored to your door's specifications, ensuring a perfect fit and optimal performance.</p>
      </div>
      <div className='tips-list-el'>
        <p className='font-bold mr-2 whitespace-nowrap border border-black custom-tips-title border-b-0 md:mb-2 md:border-b'>Safety First Approach:</p>
        <p className='flex border border-black mb-2 ml-2 mr-2 p-2 custom-tips-info'>Garage door springs are under high tension and can be dangerous to work with if not handled properly. Our technicians prioritize safety at every step of the process, using industry best practices and safety protocols to minimize risks and ensure a safe working environment.</p>
      </div>
      <div className='tips-list-el'>
        <p className='font-bold mr-2 whitespace-nowrap border border-black custom-tips-title border-b-0 md:mb-2 md:border-b'>Preventive Maintenance:</p>
        <p className='flex border border-black mb-2 ml-2 mr-2 p-2 custom-tips-info'>Regular maintenance is key to prolonging the life of your garage door springs and preventing unexpected breakdowns. Tahar Garage Door Services offers comprehensive maintenance plans to keep your springs in top condition, saving you time, money, and headaches in the long run.</p>
      </div>
      <div className='tips-list-el'>
        <p className='font-bold mr-2 whitespace-nowrap border border-black custom-tips-title border-b-0 md:mb-2 md:border-b'>Emergency Spring Services:</p>
        <p className='flex border border-black mb-2 ml-2 mr-2 p-2 custom-tips-info'>A broken garage door spring can bring your daily routine to a halt. That's why we offer emergency spring repair services, available 24/7, to address urgent issues and get your door back up and running as quickly as possible.</p>
      </div>

      <div>
        <p className="ml-4 mr-4 mb-4 text-lg text-center">Trust Tahar Garage Door Services for all your garage door spring needs. Our commitment to quality, reliability, and customer satisfaction sets us apart as your premier choice for garage door services. Contact us today to schedule an appointment or learn more about how we can help you keep your garage door operating smoothly and safely.</p>
      </div>

      <div className='p-2 md:hidden'>
        <img className='border border-black' src={springs}></img>
      </div>

    </div>
  );
};


export default SpringsPage;
