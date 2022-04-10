import React from 'react';
import './Intro.css';
import IntroPhoto from '../../img/intro-img.png'

const Intro = () => {


  return (
  <div className='intro'>
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className='intro-introduction'>Hello, my Name Is:</h2>
          <h1 className='intro-name'>John Doe</h1>
          <div className="intro-tittle">
            <div className="intro-tittle-wrapper">
              <div className="intro-tittle-ite">Web Developer</div>
              <div className="intro-tittle-ite">UI/UX Designer</div>
              <div className="intro-tittle-ite">Photographer</div>
              <div className="intro-tittle-ite">Writer</div>
              <div className="intro-tittle-ite">Content Creator</div>
            </div>
          </div>
          <div className="intro-desc">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis in quisquam, minima voluptate quasi fugit architecto eligendi, facilis eveniet repudiandae qui debitis soluta, explicabo repellendus sunt sapiente. Accusantium, quo eum.</p> 
          </div>
          <div className="svg">
          <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
          </div>
          
        </div>
      </div>
      <div className="intro-right">
        <div className="i-bg"></div>
        <img src={IntroPhoto} alt="" className="i-img" />
      </div>
  </div>
  )
};

export default Intro;