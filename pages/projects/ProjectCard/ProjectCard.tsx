import React from 'react';
import s from '../../styles/Projects.module.scss'
import {StaticImageData} from 'next/image';

type ProjectPropsType = {
    projectImage: StaticImageData
    projectUrl: string
    projectName: string
    projectDescription: string
}

const ProjectCard = (props: ProjectPropsType) => {
    let backgroundImage = {
        backgroundImage: `url(${props.projectImage?.src || props.projectImage})`
    }

    const onclickHandler = () => {
        window.open(props.projectUrl, '_blank')
    }

    return (
        <div className={s.projectCard}>
            <div className={s.imageWrapper} style={backgroundImage}>
                <button className={s.hiddenBtn} onClick={onclickHandler}>View project</button>
            </div>
            <div className={s.descriptionWrapper}>
                <h3>{props.projectName}</h3>
                <p className={s.projectDescription}>{props.projectDescription}</p>
            </div>
        </div>
    );
};


export default ProjectCard;