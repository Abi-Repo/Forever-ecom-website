import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            saepe, suscipit, necessitatibus soluta ipsum ut cupiditate
            doloremque porro dolores sunt similique voluptas hic minus
            laboriosam consectetur accusantium nemo dolore facilis.
          </p>
        </div>

        {/* footer 1st */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* footer 2nd */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>contactus@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* copyright section */}
      <div>
        <div>
          <hr />
          <p className="py-5 text-sm text-center">
            Copyright 2025@ trendo.com - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;


