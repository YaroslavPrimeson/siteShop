import React, {useEffect, useState} from "react";
import './index.scss'


const Rating = ({ratingProp = 10}) => {
    const [stars, setStars] = useState([])

    useEffect(() => {
            let stars = [];
            for (let i = 0; i < 5; i++) {
                stars.push(
                    // <div className={'star'}>
                    //     {i + 1 <= Math.floor(ratingProp / 2) &&
                    //     <div className={'starRatingWrapper'}>
                    //         <div className={'starRating'}></div>
                    //     </div>
                    //     }
                    //     {(ratingProp / 2) % 2 !== 0 && i + 1 === Math.ceil(ratingProp / 2) &&
                    //     <div className={'starRatingWrapper starRatingHalf'}>
                    //         <div className={'starRating'}></div>
                    //     </div>
                    //     }
                    // </div>
                    <>
                        {i + 1 <= Math.floor(ratingProp / 2) &&
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                             width="20" height="20" viewBox='0 0 35 35'>
                            <path d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,
                                     31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,
                                     12.118l11.547-1.2L16.026,0.6L20.388,10.918z"
                                  fill="#bc9b6e" stroke-width="1" stroke="#bc9b6e"/>
                        </svg>
                        }
                        {(ratingProp ) % 2 !== 0 && i + 1 === Math.ceil(ratingProp / 2) &&
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                             width="20" height="20" viewBox='0 0 35 35'>
                            <defs>
                                <linearGradient id="half_grad">
                                    <stop offset="50%" stop-color="#bc9b6e"/>
                                    <stop offset="50%" stop-color="transparent" stop-opacity="1"/>
                                </linearGradient>
                            </defs>
                            <path d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,
                                     31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,
                                     12.118l11.547-1.2L16.026,0.6L20.388,10.918z"
                                  fill="url(#half_grad)" stroke-width="1" stroke="#bc9b6e"/>
                        </svg>
                        }
                        {i >= Math.ceil(ratingProp / 2) &&
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                             width="20" height="20" viewBox='0 0 35 35'>
                            <path d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,
                                     31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,
                                     12.118l11.547-1.2L16.026,0.6L20.388,10.918z"
                                  fill="transparent" stroke-width="1" stroke="#bc9b6e"/>
                        </svg>
                        }
                    </>
                );
            }
            setStars(stars)
        }
        , [])

    return (
        <div className="rating">
            {stars}
        </div>
    );

}

export default Rating;
