import Button from '@/components/buttons/Button';
import  { useState } from 'react';

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

  return (
    <div className="p-8 max-w-6xl mx-auto">

       <h1 className='text-3xl mb-4'>New Volunteer Information</h1>
      <div className="  mb-4"><span className='text-red-600'>*</span>Required</div>

      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-4 mb-6">
          <div className="flex items-center">
            <label htmlFor="firstName" className="block text-gray-700 w-1/3"> <span className='text-red-600'>*</span>First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 block w-2/3 border border-gray-300  p-2"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="lastName" className="block text-gray-700 w-1/3"><span className='text-red-600'>*</span>Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="mt-1 block w-2/3 border border-gray-300  p-2"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="email" className="block text-gray-700 w-1/3"><span className='text-red-600'>*</span>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-2/3 border border-gray-300 p-2"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="phone" className="block text-gray-700 w-1/3">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 block w-2/3 border border-gray-300  p-2"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center md:col-span-2">
            <label htmlFor="address" className="block text-gray-700 w-1/6 md:w-1/12">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className="mt-1 block w-full border border-gray-300  p-2"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <div className="block text-gray-700 mb-2">Availability *</div>
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
                  <label htmlFor={day}>{day}</label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="block text-gray-700 mb-2">Time *</div>
            <div className="space-y-2">
              {['8 - 12', '12 - 4', '4 - 8'].map((time) => (
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
                  <label htmlFor={time}>{time}</label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="block text-gray-700 mb-2">Role Preferences *</div>
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
                  <label htmlFor={role}>{role}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
        <Button type='submit' className='bg-purple-600 text-white'>Submit</Button>
          <button
            type="button"
            className="underline text-red-500"
            onClick={handleClear}
          >
            Clear Form
          </button>
          
        </div>
      </form>
    </div>
  );
}

export default Volunteer;
