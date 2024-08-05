

import { sponsorChild } from '@/pages/support-us/supportUsContent'; 
import ContactForm from './ContactForm';
import Contact from '@/pages/contact/Contact';



const SponsorChild = () => {

  const { image, title, description } = sponsorChild[0];

  return (
    <div className="px-4 md:px-24  py-8">
      <div className="md:flex bg-[#FAF0FF] md:space-x-8 items-center">
        <div className="md:w-1/2 w-full mb-6 md:mb-0">
          <img src={image} alt="Sponsor a child" className="w-full h-auto " />
        </div>
        <div className="md:w-1/2 w-full">
          <h1 className="text-3xl font-bold mb-4 font-montserrat">{title}</h1>
          {description.map((paragraph, index) => (
            <p key={index} className="mb-4 font-montserrat">{paragraph}</p>
          ))}
        </div>
      </div>
      <ContactForm />
      <div className=''> <Contact /></div>
     
    </div>
  );
}

export default SponsorChild;
