import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AcknowledgeComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [color, setColor] = useState('#aaaa00');
  const location = useLocation();
  const { formData } = location.state || {};

  useEffect(() => {
    const formDataColor = formData.color;
    setColor(formDataColor);
  }, [formData.color]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={`container mx-auto mt-5 p-4 border border-info`} style={{ backgroundColor: color }}>
      <div className="fixed top-0 right-0 p-3" style={{ width: '300px' }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search details..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <h2 className='text-green-600'>Thank you for submitting the form!</h2>
      <p className="text-lg">Here are the details you provided:</p>
      <ul className="list-disc list-inside border border-green-600">
        <li className="list-item">Full Name: {formData.fullname}</li>
        <li className="list-item">Email: {formData.email}</li>
        <li className="list-item">Phone: {formData.phone}</li>
        <li className="list-item">Message: {formData.message}</li>
      </ul>

      {searchQuery !== "" && (
        <>
          <h3 className='mt-4'>Search results....</h3>
          <ul className="list-disc list-inside border border-green-600">
            {Object.entries(formData)
              .filter(([key, value]) => key !== 'color' && String(value).toLowerCase().includes(searchQuery.toLowerCase()))
              .map(([key, value]) => (
                <li key={key} className="list-item">
                  {key}: {value}
                </li>
              ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default AcknowledgeComponent;
