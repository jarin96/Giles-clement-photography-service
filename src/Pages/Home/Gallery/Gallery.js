import React from 'react';

const Gallery = ({ photo }) => {
    const { name, img } = photo;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div class="card" style={{ width: "18rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title text-center">{name}</h5>
                </div>
            </div>
        </div>
    );
};

export default Gallery;