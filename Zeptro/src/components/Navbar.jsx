import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='bg-white py-3 shadow-2xl'>
        <div className=' max-w-6xl max-auto flex justify-between items-center'>
            {/* Logo */}
            <div className=''>               
                 <Link to = {'/'}> <h1 className ='font-bold text-3xl'><span className='text-red-500 font-serif'>Z</span>eptro</h1></Link>  
                 <div className='flex gap-1 cursor-pointer text-gray-700 text-sm items-center></div>      
            </div>
        </div>
    </div>
    );
};
export default Navbar;
