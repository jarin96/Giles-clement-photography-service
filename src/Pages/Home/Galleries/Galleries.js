import React from 'react';

import photo1 from '../../../images/photo1.png';
import photo2 from '../../../images/photo2.png';
import photo3 from '../../../images/photo3.png';
import photo4 from '../../../images/photo4.png';
import photo5 from '../../../images/photo5.png';
import photo6 from '../../../images/photo6.png';
import Gallery from '../Gallery/Gallery';

const photos = [
    { id: 1, name: 'Fiona Apple', img: photo1 },
    { id: 2, name: 'Dreams of Falling', img: photo2 },
    { id: 3, name: 'Nick Offerman', img: photo3 },
    { id: 4, name: 'Rhiannon Giddens', img: photo4 },
    { id: 5, name: 'Charlie Gabriel', img: photo5 },
    { id: 6, name: 'Maceo Parker', img: photo6 },
]
const Galleries = () => {
    return (
        <div id='galleries' className='container'>
            <h2 className='text-center mt-5'>Galleries</h2>
            <div className="row">
                {
                    photos.map(photo => <Gallery
                        key={photo.id}
                        photo={photo}
                    ></Gallery>)
                }
            </div>
        </div>
    );
};

export default Galleries;