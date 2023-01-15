import s from './Hero.module.scss';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faGithub, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons';



const Hero = () => {
    return (
        <div className={`${s.fade}`}>
            <section className={s.hero}>
                <div className={`${s.wrapper}`}>
                    <div className={s.imageWrapper}>
                        <div className={s.img}></div>
                    </div>
                    <div className={s.textWrapper}>
                        <h1>Anton Metlitsky</h1>
                        <p>Creative Frontend developer living in Tbilisi and happy to make your pages look awesome.</p>
                        <div className={s.iconsWrapper}>
                            <a href="https://github.com/ticket1201" target={'_blank'} rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                            <a href="https://www.linkedin.com/in/anton-metlitsky-3568a113a" target={'_blank'}
                               rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100001814025172" target={'_blank'}
                               rel="noreferrer">
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </a>
                            <a href="https://t.me/followticket" target={'_blank'} rel="noreferrer">
                                <FontAwesomeIcon icon={faTelegram}/>
                            </a>
                            <a href="mailto:anton@metlitsky.com">
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export async function getServerSideProps() {
    return {
        props: {},
    }
}

export default Hero;