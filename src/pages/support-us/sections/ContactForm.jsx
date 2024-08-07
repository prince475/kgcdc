import Button from '@/components/buttons/Button';
import DynamicText from "@/components/texts/DynamicText";
import { useState } from 'react';

const ContactForm = () => {
  const initialState = {
    'entry.243205282': '',
    'entry.2113106048': '',
    'entry.1990080061': '',
    'entry.2031272898': '',
    'entry.421891505': '',
  };

  const [formData, setFormData] = useState(initialState);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formDataObject = new FormData(form);
    const formActionUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfePIvxcbqkYTPxc2V2wbB2B1azcgbcshWbIjFFD5J8m7xhHA/formResponse'; // Google Forms action URL

    fetch(formActionUrl, {
      method: 'POST',
      body: formDataObject,
      mode: 'no-cors', // Ignore CORS errors
    })
      .then(response => {
        if (response) {
          setFormSubmitted(true);
          setFormData(initialState);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="ml mx-auto  py-8  md:py-12  lg:py-16 ">
      <DynamicText as='h1' className='text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold text-left mb-6'>Contact Form</DynamicText>
      <DynamicText className="mb-4 text-base md:text-lg lg:text-xl text-left">
        Please provide your details below so that we can reach out to you with more information about sponsoring a child. Your support can make a significant difference in their lives.
      </DynamicText>
      <DynamicText className="text-red-500 text-left text-base md:text-lg lg:text-xl font-semibold mb-4">* Required</DynamicText>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 lg:gap-x-16 lg:gap-y-8 mb-6">
          <div className="flex items-center">
            <DynamicText htmlFor="FirstName" className="block text-gray-700 text-left text-base md:text-lg lg:text-2xl font-montserrat w-1/3">
              <span className='text-red-600'>*</span>First Name
            </DynamicText>
            <input
              type="text"
              id="FirstName"
              name="entry.243205282"
              className="mt-1 block w-2/3 border border-gray-300 p-1 md:p-2 lg:p-3"
              value={formData['entry.243205282']}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center">
            <DynamicText htmlFor="LastName" className="block text-gray-700 text-left text-base md:text-lg lg:text-2xl font-montserrat w-1/3">
              <span className='text-red-600'>*</span>Last Name
            </DynamicText>
            <input
              type="text"
              id="LastName"
              name="entry.2113106048"
              className="mt-1 block w-2/3 border border-gray-300 p-1 md:p-2 lg:p-3"
              value={formData['entry.2113106048']}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center">
            <DynamicText htmlFor="Email" className="block text-gray-700 text-left text-base md:text-lg lg:text-2xl font-montserrat w-1/3">
              <span className='text-red-600'>*</span>Email
            </DynamicText>
            <input
              type="email"
              id="Email"
              name="entry.1990080061"
              className="mt-1 block w-2/3 border border-gray-300 p-1 md:p-2 lg:p-3"
              value={formData['entry.1990080061']}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center">
            <DynamicText htmlFor="Phone" className="block text-gray-700 text-left text-base md:text-lg lg:text-2xl font-montserrat w-1/3">
              <span className='text-red-600'>*</span>Phone
            </DynamicText>
            <input
              type="tel"
              id="Phone"
              name="entry.2031272898"
              className="mt-1 block w-2/3 border border-gray-300 p-1 md:p-2 lg:p-3"
              value={formData['entry.2031272898']}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-4 items-center md:col-span-2">
            <DynamicText className="text-left text-base md:text-lg lg:text-xl mb-4">
              We&apos;re here to help! Please leave your inquiry below, and we&apos;ll get back to you as soon as possible.
            </DynamicText>
            <textarea
              id="Message"
              name="entry.421891505"
              className="mt-1 block w-full border border-gray-300 p-2 md:p-3 lg:p-4"
              rows="7"
              value={formData['entry.421891505']}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <Button type="submit" className="bg-[#7030A0] text-white p-2 rounded-md hover:bg-purple-900 transition">Submit</Button>
        </div>
      </form>

      {formSubmitted && (
        <div className="bg-green-100 p-6 rounded-md text-center mt-6">
          <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
          <p>Your form has been submitted successfully. We will reach out to you soon.</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
