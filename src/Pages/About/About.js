import React from 'react';
import img from '../../images/Profile/jarin.png';
const About = () => {
    return (
        <div className='container info-background my-5'>
            <div className='row border p-5 rounded bg-gradient d-flex justify-content-center align-items-center'>
                <div className='col-lg-5 col-md-6 col-12'>
                    <img src={img}
                        className="d-block border border-danger border border-4 w-100" alt=""></img>
                </div>
                <div className='col-lg-7 col-md-6 col-12'>
                    <div className='py-3'>
                        <h2 className='text-center mt-2'>Jarin Nur A Anam</h2>
                        <p className='text-center'><small>anamjarin@gmail.com</small></p>
                        <p className='text-center mb-5'>I am a Computer Science graduate, passionate about data engineering, web developing and machine learning.My ultimate goal in my career is to make a commendable contribution to the computing world either by starting an innovative venture or doing research which would change the dimensions of future computing and the way we perceive the computers.Now I have determined that a dedicated higher study on Computer Science engineering will enable me to aggregate all my previous knowledge and experience on the field and encourage in achieving my career goal.I am passionate about learning web developing and want to build my career as a junior web developer.For that first i want a suitable job to start my career.For next five to sixth month this is my ultimate goal to give a suitable job for me and also learning new web developing features.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;