import Button from '@/components/buttons/Button';
import DynamicText from '@/components/texts/DynamicText';
import { useState } from 'react';

const Volunteer = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    availability: [],
    time: [],
    rolePreferences: [],
  };

  const [formData, setFormData] = useState(initialState);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (checked) {
        setFormData({
          ...formData,
          [name]: [...formData[name], value],
        });
      } else {
        setFormData({
          ...formData,
          [name]: formData[name].filter((item) => item !== value),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleClear = () => {
    setFormData(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSetdc6sUfDc-PB8rsEL4ezpOY8V7Cnpnb7XWnJ1rzTbiSkrUw/formResponse';
    
    const formPayload = {
      'entry.1021913986': formData.firstName,
      'entry.538715420': formData.lastName,
      'entry.1259266339': formData.email,
      'entry.1574918903': formData.phone,
      'entry.470129333': formData.address,
      'entry.137716459': formData.availability.join(', '),
      'entry.751656007': formData.time.join(', '),
      'entry.1968627037': formData.rolePreferences.join(', '),
    };

    const queryString = new URLSearchParams(formPayload).toString();
    const finalUrl = `${googleFormUrl}?${queryString}`;

    fetch(finalUrl, {
      method: 'POST',
      mode: 'no-cors'
    })
    .then(() => {
      // alert('Form submitted successfully!');
      setFormSubmitted(true);
      handleClear();
    })
    .catch((error) => {
      console.error('Error submitting form:', error);
    });
  };

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <DynamicText className="text-xl md:text-2xl lg:text-3xl font-bold text-left mb-4">New Volunteer Information</DynamicText>
      <DynamicText className="text-left text-base md:text-lg lg:text-xl mb-4"><span className="text-red-600">*</span> Required</DynamicText>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <DynamicText htmlFor="firstName" className="block text-left lg:text-xl text-gray-700 w-full md:w-1/3 mb-1 md:mb-0"> <span className="text-red-600">*</span> First Name</DynamicText>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 block w-full md:w-2/3 border border-gray-300 p-1 lg:p-2"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <DynamicText htmlFor="lastName" className="block text-left lg:text-xl text-gray-700 w-full md:w-1/3 mb-1 md:mb-0"><span className="text-red-600">*</span> Last Name</DynamicText>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="mt-1 block w-full md:w-2/3 border border-gray-300 p-1 lg:p-2"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <DynamicText htmlFor="email" className="block text-left lg:text-xl text-gray-700 w-full md:w-1/3 mb-1 md:mb-0"><span className="text-red-600">*</span> Email</DynamicText>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full md:w-2/3 border border-gray-300 p-1 lg:p-2"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <DynamicText htmlFor="phone" className="block text-left lg:text-xl text-gray-700 w-full md:w-1/3 mb-1 md:mb-0">Phone</DynamicText>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 block w-full md:w-2/3 border border-gray-300 p-1 lg:p-2"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center md:col-span-2">
            <DynamicText htmlFor="address" className="block text-left lg:text-xl text-gray-700 w-full md:w-1/6 md:w-1/12 mb-1 md:mb-0">Address</DynamicText>
            <input
              type="text"
              id="address"
              name="address"
              className="mt-1 block w-full border border-gray-300 p-1 lg:p-2"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <DynamicText className="block text-left lg:text-xl text-gray-700 mb-2">Availability</DynamicText>
            <div className="space-y-2">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                <div key={day} className="flex items-center">
                  <input
                    type="checkbox"
                    id={day}
                    name="availability"
                    value={day}
                    className="mr-2"
                    checked={formData.availability.includes(day)}
                    onChange={handleChange}
                  />
                  <DynamicText htmlFor={day}>{day}</DynamicText>
                </div>
              ))}
            </div>
          </div>
          <div>
            <DynamicText className="block text-left lg:text-xl text-gray-700 mb-2">Time</DynamicText>
            <div className="space-y-2">
              {['8 am - 12 noon', '12 noon - 4 pm', '4 pm - 8 pm'].map((time) => (
                <div key={time} className="flex items-center">
                  <input
                    type="checkbox"
                    id={time}
                    name="time"
                    value={time}
                    className="mr-2"
                    checked={formData.time.includes(time)}
                    onChange={handleChange}
                  />
                  <DynamicText htmlFor={time}>{time}</DynamicText>
                </div>
              ))}
            </div>
          </div>
          <div>
            <DynamicText className="block text-left lg:text-xl text-gray-700 mb-2">Role Preferences</DynamicText>
            <div className="space-y-2">
              {['Program Development', 'Mentorship & Tutoring', 'Administrative Support', 'Fundraising & Grant Writing', 'Community Outreach', 'Technology and IT Support'].map((role) => (
                <div key={role} className="flex items-center">
                  <input
                    type="checkbox"
                    id={role}
                    name="rolePreferences"
                    value={role}
                    className="mr-2"
                    checked={formData.rolePreferences.includes(role)}
                    onChange={handleChange}
                  />
                  <DynamicText htmlFor={role}>{role}</DynamicText>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <Button type="submit" className="bg-purple-600 text-white p-2 rounded-md">Submit</Button>
          <button
            type="button"
            className="underline text-red-500"
            onClick={handleClear}
          >
            Clear Form
          </button>
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
}

export default Volunteer;
