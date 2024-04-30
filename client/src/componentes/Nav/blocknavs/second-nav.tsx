import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { LuShoppingCart } from 'react-icons/lu'
import { CiHeart } from 'react-icons/ci'
import GoogleLoginComponent from "../../../helpers/googleLogin/GoogleOAuth"

const SecondNav: React.FC = () => {
    const [loginGoogle, setloginGoogle] = useState(false);

    const handleLoginClick = () => {
        setloginGoogle(!loginGoogle);
    };
    return (
        <>
            <nav className='second-nav'>
                <div className='second-nav-left'>
                    <span
                        style={{
                            fontSize: '70px',
                            fontFamily: 'sans-serif',
                            cursor: 'pointer'
                        }}
                    >
                        <img src="src\assets\navlogo.svg" alt="navlogo"></img>
                    </span>
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
                                color='Black'
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
                        <Link className={'nav-link1'} to={'/login'} style={{ cursor: 'pointer', color: "White" }} onClick={handleLoginClick}>
                        <GoogleLoginComponent />
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
                        <CiHeart style={{ height: 30, width: 30, color: "Yellow" }} />
                        <Link className={'nav-link2'} to={'/favorites'} style={{ cursor: 'pointer', color: "White" }}>
                            Favorites
                        </Link>
                    </div>
                    <div style={{ display: 'flex', gap: 5 }}>
                        <LuShoppingCart style={{ cursor: 'pointer', height: 25, width: 25, color: "Yellow" }} />
                        <div
                            style={{
                                background: 'black',
                                color: 'white',
                                width: 15,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50%',
                                fontSize: 18
                            }}
                        >
                            Count Car {/** modificar segun la propiedad */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default SecondNav;

