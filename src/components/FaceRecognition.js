import React from 'react';
import '../styles/facerecognition.styles.css';

const FaceRecognition = ({imageUrl, box})=>(
    <div>

        <img id='inputImage' src={imageUrl} alt='' height='auto' width='500'/>

        <div 
        className='bounding-box'
        style={{
            top:box.topRow,
            right:box.rightCol,
            bottom:box.bottomRow,
            left:box.leftCol
            
        }}
        />
    </div>
)

export default FaceRecognition;