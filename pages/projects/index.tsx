import React, { useState } from 'react';
import s from '../styles/Projects.module.scss'
import ProjectCard from './ProjectCard/ProjectCard';
import horizon from '../../assets/images/horizon.webp';
import cards from '../../assets/images/cards.jpg';
import sentosa from '../../assets/images/sentosa.jpg'
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';
import 'node_modules/keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider(
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
      },
      created() {
        setLoaded(true)
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
    },
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
            <ProjectCard projectName={'Phuket hozion'} projectImage={horizon}
                         projectUrl={'https://phuket-horizon.ru'}
                         projectDescription={`Phuket tours online booking site`}/>
          </div>
          <div className={`keen-slider__slide ${s.projectItem}`}>
            <ProjectCard projectName={'Sentosa tour'} projectImage={sentosa}
                         projectUrl={'https://sentosatour.com/'}
                         projectDescription={`Singapore visa center website`}/>
          </div>
          {/*<div className={`keen-slider__slide ${s.projectItem}`}>
                        <ProjectCard projectName={'Pizza store'} projectImage={pizza}
                                     projectUrl={'https://ticket1201.github.io/pizza-store/'}
                                     projectDescription={`Online ordering the world's tastiest pizza`}/>
                    </div>*/}
          <div className={`keen-slider__slide ${s.projectItem}`}>
            <ProjectCard projectName={'Cards Quiz'} projectImage={cards}
                         projectUrl={'https://ticket1201.github.io/cards_quiz/'}
                         projectDescription={'A start-up cards quiz application to learn new things'}/>
          </div>
          {/* <div className={`keen-slider__slide ${s.projectItem}`}>
                        <ProjectCard projectName={'TodoList'}
                                     projectUrl={'https://ticket1201.github.io/it-incubator-todolist-ts-01/'}
                                     projectImage={todo}
                                     projectDescription={'Todolist, simple way to organise everything'}/>
                    </div>
                    <div className={`keen-slider__slide ${s.projectItem}`}>
                        <ProjectCard projectName={'Social Network'} projectImage={social}
                                     projectUrl={'https://ticket1201.github.io/samurai-way/'}
                                     projectDescription={'Online platform to connect people'}/>
                    </div>*/}
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabeld = props.disabled ? ` ${s.arrowDisabled}` : ""
  return (
    <svg
      onClick={props.onClick}
      className={`${s.arrow} ${
        props.left ? `${s.arrowLeft}` : `${s.arrowRight}`
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
      )}
    </svg>
  )
}

export default Index;