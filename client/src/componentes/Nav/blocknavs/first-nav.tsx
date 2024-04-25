import { NavLink } from 'react-router-dom';
import { BsBoxSeam } from 'react-icons/bs';
import { VerificarProps } from "../types.ts"

import '../Navbar.css';

const verificar = ({ isActive }: VerificarProps): string => {
  return isActive ? 'active' : 'noactive'
}

const FirstNav = () => {

  return (
    <>
      <nav className='first-nav'>

        <div className='first-nav-left'>
          <BsBoxSeam style={{ height: 19, width: 19, paddingRight: 22 }} />
          <div>Envío gratis en compras de más de $499</div>
        </div>

        <div className='first-nav-right'>
          <NavLink to={'/about'} className={verificar}>
            About
          </NavLink>
          <NavLink className={verificar} to={'/contact'}>
            Contact
          </NavLink>
          <NavLink className={verificar} to={'/support'}>
            Support
          </NavLink>
        </div>
        
      </nav>
    </>
  );
};

export default FirstNav;
