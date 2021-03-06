import React from 'react'
import stylesheet from '../booking/Header.css'
import logo from '../images/Devine Tally logo.png'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { BsSearch } from "react-icons/bs";




function Header() {
  return (
    <div className='header' >
      <img src={logo} style={{objectFit:'contain', height:'200px', marginRight:'25%'}} />
      <div className='header__center'>
                <input type="text" />
                <BsSearch/>
            </div>
            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
               
            </div>
            </div>
  )
}

export default Header