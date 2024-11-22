
import React from 'react'
import './image.css';

function Imagemanipulation() {
    return (
        <div className='imageCard'>
            Image
            <div className='logoDiv'>
                <img src='./study_image.jpeg' alt="study"  />
            </div>
            <div>
                <button>Enhance height</button>
                &nbsp; &nbsp; <br />
                <button>Enhance width</button>
                <br /><br />
                <button>Rotate</button>
                &nbsp;
                <button>Color Change</button>
    
            </div>
        </div>
    
      )
    }

export default Imagemanipulation
