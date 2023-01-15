import React from 'react';
import s from '../Skills.module.scss';


type FactPropsType = {
    title: string
    descr: string
}

const Fact = (props:FactPropsType) => {
    return (
        <div className={s.fact}>
            <h3 className={s.factTitle}>{props.title}</h3>
            <p className={s.factDescr}>{props.descr}</p>
        </div>
    );
};

export default Fact;