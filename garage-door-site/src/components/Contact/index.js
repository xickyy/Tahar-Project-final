import './Contact.css'

import discount from './seniorDiscount.jpg';
import discount2 from './responderDiscount.jpg';

const Contact = () => {
  return (
    <div>
      <h2 className='text-center underline text-3xl text-blue-900'>Contact</h2>
      <div className='flex flex-col'>
        <p className='text-center text-xl p-2 lg:text-4xl'>You may contact us directly through phone call or text message for a free quote, preferably during office hours however we do handle emergency situations 24 hours a day as well.</p>
        <a className='text-blue-300 text-2xl bg-blue-900 p-8 text-center m-2 rounded-lg shadow-lg shadow-black hover:text-white' href='tel:661-202-8255'>Call or text now! 661-202-8255</a>
      </div>
      <div>
        <p className='text-center text-xl lg:text-2xl'>Dont forget about our discounts we offer as shown below!</p>
        <div className='flex flex-col items-center md:flex-row justify-center'>
          <img className='w-96 p-2' src={discount}></img>
          <img className='w-96 p-2' src={discount2}></img>
        </div>
      </div>
    </div>
  );
};


export default Contact;
