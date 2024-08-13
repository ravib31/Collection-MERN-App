import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='left'>
                <div className='item'>
                    <img src='images/flag.webp' alt='flag'/>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className='item'>
                   <span>INR</span>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className='item'>
                        <Link className="link" to="/products/1">Men</Link>
                </div>
                <div className='item'>
                        <Link className="link" to="/products/2">Women</Link>
                </div>
                <div className='item'>
                        <Link className="link" to="/products/3">Children</Link>
                </div>
                
            </div>
            
            <div className='center'>
                <Link className="link" to="/">रV COLLECTIONS</Link>
            </div>

           
            <div className='right'>
            <div className='item'>
                <Link className="link" to="/">Home</Link>
            </div>
            <div className='item'>
                <Link className="link" to="/">About</Link>
            </div>
            <div className='item'>
                <Link className="link" to="/">Contact</Link>
            </div>
            <div className='item'>
                <Link className="link" to="/">Store</Link>
            </div>
            <div className="icons">
                <SearchIcon/>
                <PersonOutlineIcon/>
                <FavoriteBorderOutlinedIcon/>
                
            </div>
            <div className="cartIcon">
            <ShoppingCartOutlinedIcon/>
            <span>0</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar