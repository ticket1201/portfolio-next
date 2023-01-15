import React from 'react';
import s from './Burger.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons';

type BurgerPropsType ={
    callback: (isOpen:boolean) => void
}

const Burger = ({callback}: BurgerPropsType) => {
    return (
        <div className={s.burger} onClick={() => callback(false)}>
            <FontAwesomeIcon icon={faAlignJustify}/>
        </div>
    );
};

export default Burger;