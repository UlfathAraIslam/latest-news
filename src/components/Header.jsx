import React from 'react';
import logo from "../assets/logo.png";
import { format} from "date-fns";
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 mt-3'>
            <img src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-semibold text-accent'>{format(new Date(), "EEEE , MMMM d, yyyy")}</p>
        </div>
    );
};

export default Header;