/****************************************************************************
  FileName      [ information.js ]
  PackageName   [ src ]
  Author        [ Chin-Yi Cheng ]
  Synopsis      [ display the information of restaurant ]
  Copyright     [ 2022 11 ]
****************************************************************************/

import React from 'react'
import Stars from '../components/stars';
import '../css/restaurantPage.css'

const Information = ({ info, rating }) => {

    const getTag = (tags) => {
        return (
            <>
                {tags.map((e)=>(
                    <div className='tag' key={e}>{e}</div>
                ))}
            </>
        )
    }
    const getPriceTag = (price) => {
        let priceText = ""
        for (let i = 0; i < price; i++)
            priceText += "$"
        return (
            <>
                <div className='tag' key={priceText}>{priceText}</div>
            </>
        )
    }

    const getBusiness = (time) => {
        const isAll = time.All !== undefined;
        if(isAll){
            return(
                <div className='businessTime'>
                    <div className='singleDay'>
                        <div className='day'>Mon</div>
                        <div className='time'>{time.All}</div>
                    </div>
                    <div className='singleDay'>
                        <div className='day'>Tue</div>
                        <div className='time'>{time.All}</div>
                    </div>
                    <div className='singleDay'>
                        <div className='day'>Wed</div>
                        <div className='time'>{time.All}</div>
                    </div>
                    <div className='singleDay'>
                        <div className='day'>Thu</div>
                        <div className='time'>{time.All}</div>
                    </div>
                    <div className='singleDay'>
                        <div className='day'>Fri</div>
                        <div className='time'>{time.All}</div>
                    </div>
                    <div className='singleDay'>
                        <div className='day'>Sat</div>
                        <div className='time'>{time.All}</div>
                    </div>
                    <div className='singleDay'>
                        <div className='day'>Sun</div>
                        <div className='time'>{time.All}</div>
                    </div>
                </div>
            )
        }
        else return (
            <div className='businessTime'>
                <div className='singleDay'>
                    <div className='day'>Mon</div>
                    <div className='time'>{time.Mon === undefined ? "Closed" : time.Mon}</div>
                </div>
                <div className='singleDay'>
                    <div className='day'>Tue</div>
                    <div className='time'>{time.Tue === undefined ? "Closed" : time.Tue}</div>
                </div>
                <div className='singleDay'>
                    <div className='day'>Wed</div>
                    <div className='time'>{time.Wed === undefined ? "Closed" : time.Wed}</div>
                </div>
                <div className='singleDay'>
                    <div className='day'>Thr</div>
                    <div className='time'>{time.Thr === undefined ? "Closed" : time.Thr}</div>
                </div>
                <div className='singleDay'>
                    <div className='day'>Fri</div>
                    <div className='time'>{time.Fri === undefined ? "Closed" : time.Fri}</div>
                </div>
                <div className='singleDay'>
                    <div className='day'>Sat</div>
                    <div className='time'>{time.Sat === undefined ? "Closed" : time.Sat}</div>
                </div>
                <div className='singleDay'>
                    <div className='day'>Sun</div>
                    <div className='time'>{time.Sun === undefined ? "Closed" : time.Sun}</div>
                </div>
            </div>
        )
    }

    return (
        <div className='infoContainer'>
            <h2>{info.name}</h2>
            <div className='infoRow'>
                <div className='rate'>
                    {rating === 0 ? <p>No Rating</p> : <Stars rating={rating} displayScore={true} />}

                </div>
                <div className='distance'>{info.distance / 1000} km</div>
            </div>
            <div className='infoRow'>
                {getPriceTag(info.price)}
                {getTag(info.tag)}
            </div>
            <h5>Business hours:</h5>
            {getBusiness(info.time)}
        </div>
    )
}
export default Information