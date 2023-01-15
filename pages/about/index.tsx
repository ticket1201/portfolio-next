import React from 'react';
import s from '../styles/About.module.scss'
import img from '../../assets/images/IMG_2597.jpg'
import {Fade} from 'react-awesome-reveal';
import Skills from '../../components/Skills/Skills';
import Popup from 'reactjs-popup';
import Image from 'next/image';
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';


const Index = () => {
    let date = new Date()


    const overlayStyle = {
        backgroundColor: `rgba(0, 0, 0, 0.6)`
    }

    return (
        <Layout>
            <Head>
                <title>Anton Metlitsky&apos;s tech skills, contacts.</title>
            </Head>
            <section className={s.About}>
                <div>
                    <div className={`wrapper ${s.wrapper}`}>
                        <Image src={img} alt="me" className={s.img}/>
                        <h3>
                            Anton Metlitsky. Frontend developer
                        </h3>
                        <div className={s.textWrapper}>
                            <div className={s.descriptionText}>
                                <p>
                                    Hello, I am a creative Frontend developer, more information below. Just click the button to check my skills and tech stack.
                                </p>
                                <Popup trigger={<button>Read more</button>} modal position={'center center'}
                                       overlayStyle={overlayStyle} className={'popup'}>
                                    <Fade className={s.fade} duration={100} delay={0}>
                                        <Skills/>
                                    </Fade>
                                </Popup>
                            </div>
                            <div className={s.aboutTextWrapper}>
                                <p className={s.aboutText}>
                                    <span className={s.aboutTextTitle}>Age:</span>
                                    <span>{date.getFullYear() - 1995}</span>
                                </p>
                                <p className={s.aboutText}>
                                    <span className={s.aboutTextTitle}>Address:</span>
                                    <span>Tbilisi, Georgia</span>
                                </p>
                                <p className={s.aboutText}>
                                    <span className={s.aboutTextTitle}>Email:</span>
                                    <span>anton@metlitsky.com</span>
                                </p>
                                <p className={s.aboutText}>
                                    <span className={s.aboutTextTitle}>Phone:</span>
                                    <span>+995 (591) 51 07 74</span>
                                </p>
                                <p className={s.aboutText}>
                                    <span className={s.aboutTextTitle}>Freelance:</span>
                                    <span>Available</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Index;