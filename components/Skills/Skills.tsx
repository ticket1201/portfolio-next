import React from 'react';
import s from './Skills.module.scss'
import SkillCardSoft from './SkillCardSoft/SkillCardSoft';
import SkillCardHard from './SkillCardHard/SkillCardHard';
import Fact from './Fact/Fact';


const Skills = () => {
    return (
        <section className={s.skills}>
            <div className={s.wrapper}>
                <div className={`${s.cardContainer}`}>
                    <h3>Hard Skills</h3>
                    <div className={s.hardSkillWrapper}>
                        <SkillCardHard skillTitle={'JavaScript'}/>
                        <SkillCardHard skillTitle={'Typescript'}/>
                        <SkillCardHard skillTitle={'HTML5'}/>
                        <SkillCardHard skillTitle={'CSS3'}/>
                        <SkillCardHard skillTitle={'SASS'}/>
                        <SkillCardHard skillTitle={'Tailwind'}/>
                        <SkillCardHard skillTitle={'React'}/>
                        <SkillCardHard skillTitle={'Hooks'}/>
                        <SkillCardHard skillTitle={'Redux-Toolkit'}/>
                        <SkillCardHard skillTitle={'Firebase'}/>
                        <SkillCardHard skillTitle={'Formik'}/>
                        <SkillCardHard skillTitle={'React-hook-form'}/>
                        <SkillCardHard skillTitle={'Express'}/>
                        <SkillCardHard skillTitle={'Node.js'}/>
                        <SkillCardHard skillTitle={'FLUX'}/>
                        <SkillCardHard skillTitle={'Git'}/>
                        <SkillCardHard skillTitle={'Axios'}/>
                        <SkillCardHard skillTitle={'Moment'}/>
                        <SkillCardHard skillTitle={'Dayjs'}/>
                        <SkillCardHard skillTitle={'Thunk'}/>
                        <SkillCardHard skillTitle={'Rest API'}/>
                        <SkillCardHard skillTitle={'Vercel'}/>
                    </div>
                </div>
                <div className={`${s.cardContainer}`}>
                    <h3>Soft Skills</h3>
                    <SkillCardSoft skillTitle={'English'} lvl={'B1'} percent={'70%'}/>
                    <SkillCardSoft skillTitle={'Russian' } lvl={'Native'} percent={'100%'}/>
                    <SkillCardSoft skillTitle={'Belarusian'} lvl={'Native'} percent={'100%'}/>
                </div>
            </div>
            <div className={`${s.cardContainer}`}>
                <h3>Fun Facts</h3>
                <div className={s.factWrapper}>
                    <Fact title={'3+'} descr={'Project Completed'}/>
                    <Fact title={'5.4K+'} descr={'Lines of Code'}/>
                    <Fact title={'14+'} descr={'Technologies learned'}/>
                </div>
            </div>
        </section>
    );
};

export default Skills;