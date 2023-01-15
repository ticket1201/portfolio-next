import React from 'react';
import s from '../styles/Projects.module.scss'
import ProjectCard from './ProjectCard/ProjectCard';
import todo from '../../assets/images/todolist.png'
import social from '../../assets/images/socialNetwork.png'
import cards from '../../assets/images/cards.jpg'
import pizza from '../../assets/images/pizza.jpg'
import sentosa from '../../assets/images/sentosa.jpg'
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';
import 'node_modules/keen-slider/keen-slider.min.css'
import {useKeenSlider} from 'keen-slider/react';

const Index = () => {
    const [sliderRef] = useKeenSlider(
        {
            slides: {
                perView: 3,
            },
            breakpoints: {
                '(max-width: 1520px)': {
                    slides: {
                        perView: 2,
                    },
                },
                '(max-width: 800px)': {
                    slides: {
                        perView: 1,
                    },
                }
            }
        },
        [
            // add plugins here
        ]
    )

    return (
        <Layout>
            <Head>
                <title>Anton Metlitsky&apos;s projects</title>
            </Head>
            <div className={`${s.projectsWrapper}`}>
                <h2 className={s.projectTitle}>Projects</h2>
                <div ref={sliderRef} className={`keen-slider ${s.projectItemWrapper}`}>
                    <div className={`keen-slider__slide ${s.projectItem}`}>
                        <ProjectCard projectName={'Sentosa tour'} projectImage={sentosa}
                                     projectUrl={'https://sentosatour.com/'}
                                     projectDescription={`Singapore visa center website`}/>
                    </div>
                    <div className={`keen-slider__slide ${s.projectItem}`}>
                        <ProjectCard projectName={'Pizza store'} projectImage={pizza}
                                     projectUrl={'https://ticket1201.github.io/pizza-store/'}
                                     projectDescription={`Online ordering the world's tastiest pizza`}/>
                    </div>
                    <div className={`keen-slider__slide ${s.projectItem}`}>
                        <ProjectCard projectName={'Cards Quiz'} projectImage={cards}
                                     projectUrl={'https://ticket1201.github.io/cards_quiz/'}
                                     projectDescription={'Cards quiz application to learn new things'}/>
                    </div>
                    <div className={`keen-slider__slide ${s.projectItem}`}>
                        <ProjectCard projectName={'TodoList'}
                                     projectUrl={'https://ticket1201.github.io/it-incubator-todolist-ts-01/'}
                                     projectImage={todo}
                                     projectDescription={'Todolist, simple way to organise everything'}/>
                    </div>
                    <div className={`keen-slider__slide ${s.projectItem}`}>
                        <ProjectCard projectName={'Social Network'} projectImage={social}
                                     projectUrl={'https://ticket1201.github.io/samurai-way/'}
                                     projectDescription={'Online platform to connect people'}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Index;