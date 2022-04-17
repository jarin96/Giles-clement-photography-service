import React from 'react';
import profile from '../../../images/Profile/IMG_4510.jpeg';
const Profile = () => {
    return (
        <div className='container info-background my-5'>
            <div className='row border p-5 rounded bg-gradient d-flex justify-content-center align-items-center'>
                <div className='col-lg-5 col-md-6 col-12'>
                    <img src={profile}
                        class="d-block w-100 " alt=""></img>
                </div>
                <div className='col-lg-7 col-md-6 col-12'>
                    <div className=' my-5 py-3'>
                        <h2 className='text-center mt-2'>GILES CLEMENT</h2>
                        <h3 className='text-center'>Photographer and Portrait Artist</h3>
                        <h3 className='text-center'>Imagery is our life and life is something beautiful</h3>
                        <p className='text-center'>Photographer and portrait artist based in New York with two decades of experience capturing  life on film. I grew up in the Catskill Mountains where a geographically confined, small town upbringing instilled in me a ferocious curiosity about the larger world and a desire to use my camera to tell stories with depth, purpose and heart.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;