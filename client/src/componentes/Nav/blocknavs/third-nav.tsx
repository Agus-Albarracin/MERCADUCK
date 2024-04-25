import React from 'react';
import { NavLink } from 'react-router-dom'
import { VerificarProps2 } from "../types.ts"

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

// The cats must be array of database's objects in the cat's props... 
// Visualmind its okay, change for props in database later...

const ThirdNav: React.FC = () => {
    const verificar2 = ({ isActive }: VerificarProps2): string => {
        return isActive ? 'active2' : 'noactive2'
    }
    return (
        <>
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
    );
};

export default ThirdNav;