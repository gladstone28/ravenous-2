import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';

const BusinessList = ({ businesses }) => (
  <div className="BusinessList">
    {businesses.map(business => (
      <Business key={business.id} business={business} />
    ))}
  </div>
);

export default BusinessList;
