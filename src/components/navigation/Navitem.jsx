import React from 'react'
import { Link } from 'react-router-dom'

const Navitem = ({ text, url }) => {
  return (
    <Link to={url} className="text-white p-2">
      {text}
    </Link>
  );
};

export default Navitem;
