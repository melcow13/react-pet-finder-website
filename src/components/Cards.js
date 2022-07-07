import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'
function Cards(animals) {
    return (
        <div className='cards'>
            <h1>Check out these adorable animals</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <li className='cards__item'>
                            <Link to='/' className='cards__item__link'>
                                <figure className='cards__item__pic-wrap' data-category={animals.animals.name}>
                                    <img src={animals.animals.photos.small} alt='animalpic'
                                        className='cards__item__img' />
                                </figure>
                                <div className='cards__item__info'>
                                    <h5 className='cards__item__text'>
                                        Click for more
                                    </h5>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Cards