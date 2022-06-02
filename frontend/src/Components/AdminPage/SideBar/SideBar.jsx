import React, {useState} from 'react'
import "./SideBar.css";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import Admin from '../images/admin.png'

function SideBar() {
    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);

    function close() {
        if(sidebar === true) {
            setSidebar(false);
        }
        console.log('momen')
     }
  
    return (
        <div className='testing' onClick={close}>
        <div className='testing-2' onClick={close}>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar-admin'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              <img src={Admin} alt="" />
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path} className= "choices">
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
      </div>
    );
  }
  
  export default SideBar;