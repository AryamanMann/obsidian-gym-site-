import React from 'react';
import aboutimage from '../images/about.png'

function Review() {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={aboutimage} alt="" />
            </div>
            <div className='about-text'>
                <h1>REVIEWS</h1>
                <p>A perfect gym has perfect beginnings means that everything you promote is for the maximum benefit of your customers. Obsidian gym definitely shows that through there atmosphere and equipment.</p>
                <button>READ MORE</button>
            </div>
        </div>       
    )
}

export default Review;