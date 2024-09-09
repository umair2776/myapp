import React, { useState } from 'react';

const Prenav = () => {
  const [refresh, setRefresh] = useState(false); // Step 2: Initialize state with false

  const handleRefresh = () => {
    setRefresh(true); // Step 4: Update state
    window.location.reload(); // Step 5: Refresh the entire page
  };


  return (
    <div className='prenav' onClick={handleRefresh}>
      <div className="orders" style={{ fontSize: '14px' }}>
        Free delivery nationwide for orders above PKR3000
      </div>
      <div className="mov-bar">
        <marquee style={{ fontSize: '14px', textAlign: 'center' }}>
          Use code ‘StyloApp’ on Stylo mobile app to avail a discount of 1000 on spending 5000 and ‘Stylo20’ for a discount of 500 on spending 2500 respectively.
        </marquee>
      </div>
      <div className="contact" style={{ fontSize: '14px' }}>
        +92 42 111178956 support@stylo.pk
      </div>
    </div>
  );
};

export default Prenav;
