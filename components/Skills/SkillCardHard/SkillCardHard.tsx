import React from 'react';
import s from '../Skills.module.scss';

type SkillCardPropsType = {
    skillTitle: string
}



const SkillCardHard = (props:SkillCardPropsType) => {
    return (
        <div className={s.hardSkillCard}>
            <div className={s.textWrapper}>
                <p className={s.hardName}>{props.skillTitle}</p>
            </div>
        </div>
    );
};

export default SkillCardHard;