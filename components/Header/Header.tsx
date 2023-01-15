import React from 'react';
import s from './Header.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase, faEnvelope, faHouseChimney, faUser} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import useWindowDimensions from '../../hooks/useWindowDimensions';

type HeaderPropsType = {
    isClosed: boolean
    callback: (isOpen: boolean) => void
}

const Header = ({isClosed, callback}: HeaderPropsType) => {
    const active = {
        color: `black`,
        letterSpacing: `2px`
    }

    let date = new Date()
    const {width} = useWindowDimensions()

    let styleFade = isClosed && !!width && width < 1200 ? s.hidden : '';

    return (
        <div className={`${s.fade} ${styleFade}`}>
            <div className={`${s.click}`} onClick={() => callback(true)}>
                <header className={s.header}>
                    <h2>PORTFOLIO</h2>
                    <nav className={s.nav}>
                        <Link onClick={() => callback(true)} href={'/'} className={s.navItem}>
                            <FontAwesomeIcon icon={faHouseChimney}/>
                            Home
                        </Link>
                        <Link onClick={() => callback(true)} href={'/about'} className={s.navItem}>
                            <FontAwesomeIcon icon={faUser}/>
                            About
                        </Link>
                        <Link onClick={() => callback(true)} href={'/projects'} className={s.navItem}>
                            <FontAwesomeIcon icon={faBriefcase}/>
                            Projects
                        </Link>
                        <Link onClick={() => callback(true)} href={'/contacts'} className={s.navItem}>
                            <FontAwesomeIcon icon={faEnvelope}/>
                            Contact
                        </Link>
                    </nav>
                    <p>© {date.getFullYear()}. All Rights Reserved</p>
                </header>
            </div>
        </div>
    );
};

export default Header;