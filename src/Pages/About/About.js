import React from 'react';
import img from '../../images/photo2.png';
const About = () => {
    return (
        <div className='container info-background my-5'>
            <div className='row border p-5 rounded bg-gradient d-flex justify-content-center align-items-center'>
                <div className='col-lg-5 col-md-6 col-12'>
                    <img src={img}
                        class="d-block w-100 " alt=""></img>
                </div>
                <div className='col-lg-7 col-md-6 col-12'>
                    <div className='d-flex justify-content-center align-items-center my-5 py-3'>
                        <p>Luisa Kloep is a 26 year-old newly minted graduate with a masters degree in fashion and sales management. Like many of her peers, she is bright, talented, and enthusiastic about her new career. She’s also unemployed and feeling dejected about the job search she started five months ago.

                            Luisa, who came to me for advice, started her graduate program with her sights set on becoming a buyer for a fashion retailer in Germany. But months into her job search, she reached out to tell me she had exhausted all of her options. She had applied to every entry-level “buyer” job in Germany — and after completing over 25 applications and four interviews, she had come up empty. And now, she conceded, she was out of options.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;