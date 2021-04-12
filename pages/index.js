import React, { useState } from 'react';
import { GlobalStyle } from '../styles/global';
//libs
import Lottie from 'react-lottie';
//componets
import Card from '../components/Card';
//Animation
import loadingJson from '../public/assets/animation/loading-cicler-play.json';
//styles
import { Container } from './styles';

const Home = () => {
  const [showPort, setShowPort] = useState(false);
  const [isPausedState, setIsPausedState] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: loadingJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleClickLoading = () => {
    setIsPausedState(true);
    setTimeout(() => {
      setShowPort(true);
    }, 2000);
    setIsPausedState(false);
  };

  return (
    <>
      <GlobalStyle />

      <Container showAnimationPort={showPort}>
        <div className='background-grass'>
          <div
            className='loaging-play-animation'
            onClick={() => {
              handleClickLoading();
            }}
          >
            <Lottie
              options={defaultOptions}
              height='21rem'
              width='21rem'
              isPaused={isPausedState}
            />
          </div>
          {showPort && (
            <div className='field-marking'>
              <div className='field-marking-left'>
                <div className='field-marking-area-left' />
                <div className='field-marking-center-left' />
              </div>
              <div className='field-marking-center'>
                <div className='child-cirle-container'>
                  <div className='child-card-container project-one'>
                    <Card
                      iconOne='assets/icons/reactJs.png'
                      iconTwo='assets/icons/nodejs.png'
                      logo='assets/images/BeTheHero.png'
                      projectName='Be The Hero'
                      iconThree='assets/icons/javaScript.png'
                      iconFour='assets/icons/styledComponentsIcon.png'
                      percentageThree='85%'
                      percentageFour='13%'
                      descriptionProject='Aplicação que possibilita ONGs que precisam de ajuda em determinados casos encontrem pessoas dispostas a ajudar.'
                      gitHubRepository='https://github.com/franckantonnyt/Semana_OmniStack_11/tree/master'
                    />
                  </div>
                  <div className='child-card-container project-two'>
                    <Card
                      iconOne='assets/icons/reactNative.png'
                      iconTwo='assets/icons/javaScript.png'
                      logo='assets/images/logoproffys.png'
                      projectName='Proffys'
                      iconThree='assets/icons/typeScript.png'
                      iconFour='assets/icons/CSS3.png'
                      percentageThree='90%'
                      percentageFour='10%'
                      descriptionProject='Aplicação que facilita criar e regular aulas, podendo colocar informações sobre as aulas, o custo e horário das aulas.'
                      gitHubRepository='https://github.com/franckantonnyt/Proffys'
                    />
                  </div>
                  <div className='child-card-container project-three'>
                    <Card
                      iconOne='assets/icons/reactJs.png'
                      iconTwo='assets/icons/typeScript.png'
                      logo='assets/images/happyBackground.png'
                      projectName='Happy'
                      iconThree='assets/icons/nodejs.png'
                      iconFour='assets/icons/CSS3.png'
                      percentageThree='55%'
                      percentageFour='45%'
                      descriptionProject='O Happy é uma aplicação que conecta pessoas à casas de acolhimento institucional para fazer o dia de muitas crianças mais feliz.'
                      gitHubRepository='https://github.com/franckantonnyt/HappyWeb'
                    />
                  </div>
                  <div className='child-card-container project-four'>
                    <Card
                      iconOne='assets/icons/reactJs.png'
                      iconTwo='assets/icons/graphQL.png'
                      logo='assets/images/pokemonGraphQl.png'
                      projectName='Pokemon GraphQL'
                      iconThree='assets/icons/apollo.png'
                      iconFour='assets/icons/CSS3.png'
                      percentageThree='85%'
                      percentageFour='15%'
                      descriptionProject='Projeto que lista pokemons, utilizando GraphQl, Apollo e React para fazer as requisições em uma api.'
                      gitHubRepository='https://github.com/franckantonnyt/FrontEnd_GraphQl'
                    />
                  </div>
                  <div className='child-circle-center'>
                    <div className='child-circle-center-children'>
                      <div className='img-person-perfil'>
                        <div className='img-profile-one' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='field-marking-right'>
                <div className='field-marking-center-right'></div>
                <div className='field-marking-area-right'></div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Home;
