import React from 'react';

const ImageLink= ({handleChange,imageUrl, detectFace})=>
(
            <div>

            <p>Brain will detect faces</p>
            <div>

            <input type='text' onChange={handleChange} value={imageUrl} />
            <button onClick={detectFace}>Detect</button>
            </div>
            </div>
        
)


export default ImageLink;