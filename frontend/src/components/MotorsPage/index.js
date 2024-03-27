import './MotorsPage.css';
import motor from "./motor.jpeg"
import haimMotor from "./haimMotor.jpeg"

function MotorsPage() {
  return (
    <div>
      <div className='p-2 md:hidden'>
        <img className='border border-black' src={motor}></img>
      </div>
      <h2 className='text-center font-bold text-2xl mb-4 underline'>Motors / Openers</h2>

      <div className='text-center m-2'>
        <p className="ml-2 mr-2 mb-4 text-lg" >When it comes to the functionality and convenience of your garage door, the motor and opener play a crucial role. Here's why upgrading or maintaining your garage door motor and opener with us is a smart choice:</p>
      </div>

      <div className='tips-list-el'>
        <p className='font-bold mr-2 whitespace-nowrap border border-black custom-tips-title border-b-0 md:mb-2 md:border-b'>Effortless Operation:</p>
        <p className='flex border border-black mb-2 ml-2 mr-2 p-2 custom-tips-info'>Tired of manually lifting your garage door? Say goodbye to the hassle with our state-of-the-art garage door motors and openers. Our systems provide smooth, quiet operation at the touch of a button, making it easier than ever to access your garage.</p>
      </div>
      <div className='tips-list-el'>
        <p className='font-bold mr-2 whitespace-nowrap border border-black custom-tips-title border-b-0 md:mb-2 md:border-b'>Enhanced Security Features:</p>
        <p className='flex border border-black mb-2 ml-2 mr-2 p-2 custom-tips-info'>Our advanced garage door opener technology includes robust security features such as rolling code technology and encryption, ensuring that your garage remains secure against unauthorized access. Rest easy knowing that your belongings and loved ones are protected.</p>
      </div>
      <div className='tips-list-el'>
        <p className='font-bold mr-2 whitespace-nowrap border border-black custom-tips-title border-b-0 md:mb-2 md:border-b'>Smart Home Integration: </p>
        <p className='flex border border-black mb-2 ml-2 mr-2 p-2 custom-tips-info'>Take control of your garage door from anywhere with our smart home integration options. Whether you're at home or on the go, you can monitor and operate your garage door remotely using your smartphone or other connected devices, adding an extra layer of convenience and security to your lifestyle.</p>
      </div>
      <div className='tips-list-el'>
        <p className='font-bold mr-2 whitespace-nowrap border border-black custom-tips-title border-b-0 md:mb-2 md:border-b'>Compatibility and Adaptability:</p>
        <p className='flex border border-black mb-2 ml-2 mr-2 p-2 custom-tips-info'>Our garage door motors and openers are designed to be compatible with a wide range of garage door systems, ensuring seamless integration with your existing setup. Plus, with customizable settings and features, you can tailor your opener to suit your specific needs and preferences.</p>
      </div>
      <div className='tips-list-el'>
        <p className='font-bold mr-2 whitespace-nowrap border border-black custom-tips-title border-b-0 md:mb-2 md:border-b'>Safety First:</p>
        <p className='flex border border-black mb-2 ml-2 mr-2 p-2 custom-tips-info'>Safety is our top priority. Our garage door motors and openers are equipped with sensors and safety mechanisms to detect obstructions and prevent accidents. With features like automatic reverse functionality, you can trust that your garage door will operate safely around pets, children, and belongings.</p>
      </div>
      <div className='tips-list-el'>
        <p className='font-bold mr-2 whitespace-nowrap border border-black custom-tips-title border-b-0 md:mb-2 md:border-b'>Quiet and Reliable Performance:</p>
        <p className='flex border border-black mb-2 ml-2 mr-2 p-2 custom-tips-info'>Nobody wants a noisy garage door disrupting their peace and quiet. Our motors are engineered for whisper-quiet operation, so you can enjoy smooth, reliable performance without the racket.</p>
      </div>
      <div className='tips-list-el'>
        <p className='font-bold mr-2 whitespace-nowrap border border-black custom-tips-title border-b-0 md:mb-2 md:border-b'>Expert Installation and Maintenance:</p>
        <p className='flex border border-black mb-2 ml-2 mr-2 p-2 custom-tips-info'>Leave the installation and maintenance to the professionals. Our team of skilled technicians will ensure that your garage door motor and opener are installed correctly and functioning optimally. Plus, we offer regular maintenance services to keep your system in top condition and extend its lifespan.</p>
      </div>

      <div>
        <p className="ml-4 mr-4 mb-4 text-lg text-center">At Tahar Garage Door Services, we're dedicated to providing cutting-edge garage door motor and opener solutions that combine innovation, reliability, and convenience. Contact us today to learn more about our products and services, and let us help you upgrade your garage door for a safer, smarter, and more convenient home experience.</p>
      </div>

      <div className='p-2 md:hidden'>
        <img className='border border-black' src={haimMotor}></img>
      </div>

    </div>
  );
};


export default MotorsPage;
