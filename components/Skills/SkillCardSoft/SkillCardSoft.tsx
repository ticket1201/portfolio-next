import React from 'react';
import s from './../Skills.module.scss'

type SkillCardPropsType = {
    lvl: string
    skillTitle: string
    percent: string
}


const SkillCardSoft = (props:SkillCardPropsType) => {
    let style = {
        width: props.percent
    }

    return (
        <div className={s.skillCard}>
            <div className={s.textWrapper}>
                <p className={s.CardTitle}>{props.skillTitle}</p>
                <p>{props.lvl}</p>
            </div>

            <div className={s.line}>
                <div className={s.lineUp} style={style}></div>
            </div>
        </div>
    );
};

export default SkillCardSoft;