import React from 'react'
import Navitem from './Navitem';

const Navigation = () => {
  return (
    <div className="bg-green-700 p-4 flex justify-between">
      <div>
        <span className="font-bold, text-white">Logo</span>
      </div>

      <div>
        <Navitem text="Products" url="/products/" />
      </div>
    </div>
  );
};

export default Navigation;
