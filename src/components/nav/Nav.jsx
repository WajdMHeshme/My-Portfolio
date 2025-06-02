import './Nav.css'
import { HiHome } from "react-icons/hi2";
import { BsPersonFill } from "react-icons/bs";
import { MdHomeRepairService } from "react-icons/md";
import { LuSquareCode } from "react-icons/lu";
import { GrContact } from "react-icons/gr";
import { useState } from 'react';

const NavItems = [
  {
    link: '#',
    label: <HiHome />,
  },
    {
    link: '#about',
    label: <BsPersonFill />,
  },
  {
    link: '#services',
    label: <MdHomeRepairService />,
  },
    {
    link: '#projects',
    label: <LuSquareCode />,
  },
      {
    link: '#contact',
    label: <GrContact />,
  },
]

const Nav = () => {
  const [item , setItem] = useState(0);
  return (
    <nav>
      <ul>
        {
          NavItems.map(({link ,label} , index) => {
            return(
              <li onClick={() => setItem(index)} key={index} ><a href={link} className={`${ (item == index) ? 'active' : ''}`}>{label}</a></li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default Nav
