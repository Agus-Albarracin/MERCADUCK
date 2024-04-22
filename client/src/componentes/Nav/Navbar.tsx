import { Link, NavLink } from 'react-router-dom'
import { BsBoxSeam } from 'react-icons/bs'
import { HiOutlineMagnifyingGlass, HiUserCircle } from 'react-icons/hi2'
import { LuShoppingCart } from 'react-icons/lu'
import { CiHeart } from 'react-icons/ci'

import './Navbar.css'
interface VerificarProps {
  isActive: boolean
}
interface VerificarProps2 {
  isActive: boolean
}
const verificar = ({ isActive }: VerificarProps): string => {
  return isActive ? 'active' : 'noactive'
}

const verificar2 = ({ isActive }: VerificarProps2): string => {
  return isActive ? 'active2' : 'noactive2'
}

const categories = [
  { name: 'All', route: 'all' },
  { name: 'Computer', route: 'computer' },
  { name: 'Tablets', route: 'tablets' },
  { name: 'Drones & Cameras', route: 'drones-cameras' },
  { name: 'Audio', route: 'audio' },
  { name: 'Cellphone', route: 'cellphone' },
  { name: 'T.V. & Movie Home', route: 'tv-movie-home' },
  { name: 'Wearable Technology', route: 'wearable-technology' },
  { name: 'Offer', route: 'offer' }
]

const Navbar = () => {
  const phone = '+52-999-999-999'

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
          <NavLink className={verificar} to={'support'}>
            Support
          </NavLink>
          <div>Call {phone}</div>
        </div>
      </nav>
      <nav className='second-nav'>
        <div className='second-nav-left'>
          <h1
            style={{
              fontSize: '40px',
              fontFamily: 'sans-serif',
              cursor: 'pointer'
            }}
          >
            NovoTec
          </h1>
          <div className='input-button'>
            <input
              type='text'
              placeholder='Search...'
              className='input-search'
            />
            <button
              className='button-search'
              onClick={() => console.log('123')}
            >
              <HiOutlineMagnifyingGlass
                color='white'
                style={{ height: 19, width: 19 }}
              />
            </button>
          </div>
        </div>
        <div className='second-nav-right'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5
            }}
          >
            <HiUserCircle style={{ height: 30, width: 30 }} />
            <Link className={'nav-link1'} to={'/login'}>
              Login
            </Link>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5
            }}
          >
            <CiHeart style={{ height: 25, width: 25 }} />
            <Link className={'nav-link2'} to={'/favorites'}>
              Favorites
            </Link>
          </div>
          <div style={{ display: 'flex', gap: 5 }}>
            <LuShoppingCart style={{ cursor: 'pointer' }} />
            <div
              style={{
                background: 'black',
                color: 'white',
                width: 15,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                fontSize: 12
              }}
            >
              0
            </div>
          </div>
        </div>
      </nav>
      <nav className='third-nav'>
        {categories.map((ele, index) => {
          return (
            <NavLink className={verificar2} to={`/${ele.route}`} key={index}>
              {ele.name}
            </NavLink>
          )
        })}
      </nav>
    </>
  )
}

export default Navbar
