import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';
import Image from '../components/elements/Image';
import Modal from '../components/elements/Modal';
// import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className="no-top">
          <div className="hero-content flex left">
            <div className="flex column start around">
              <Image
                  className="big-img"
                  src={'/Group 182.png'}
                  alt="profilePic"
                  width={200}
                  height={300} 
                  />
                <div>
                  <div className="flex">
                      <p className="black left-align no-margin">shared equities</p>
                      <Image
                        className="no-margin"
                        src={'/Icon feather-edit-3.png'}
                        alt="profilePic"
                        width={20}
                        height={10} 
                        />
                    </div>
                    <Image
                      className="small-img"
                      src={'/Group 181.png'}
                      alt="profilePic"
                      width={200}
                      height={200} 
                      />
                  </div>
                  
            </div>
            
              <div className='middle-dashboard' >
                <h4 className="left-align">Mission to Mars 2032</h4>
                <p className="black left-align">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <h5 className="left-align">Your Team</h5>
                <div className='flex'>
                  <div className="flex column">
                    <Image
                    className=""
                    src={'/Group 46.png'}
                    alt="profilePic"
                    width={100}
                    height={150} 
                    />
                  <Image
                    className=""
                    src={'/icons.png'}
                    alt="profilePic"
                    width={100}
                    height={20} 
                    />
                    <p className="black">Bill Patterson</p>
                    <p className="black small-txt">Designer</p>

                  </div>
                  <div className="flex column">
                    <Image
                    className=""
                    src={'/Group 64.png'}
                    alt="profilePic"
                    width={100}
                    height={150} 
                    />
                  <Image
                    className=""
                    src={'/icons.png'}
                    alt="profilePic"
                    width={100}
                    height={20} 
                    />
                    <p className="black">Mary Lavera</p>
                    <p className="black small-txt">Business Developer</p>

                  </div>
                  <div className="flex column">
                    <Image
                    className=""
                    src={'/Group 77.png'}
                    alt="profilePic"
                    width={100}
                    height={150} 
                    />
                  <Image
                    className="icons"
                    src={'/icons.png'}
                    alt="profilePic"
                    width={100}
                    height={20} 
                    />
                    <p className="black">Bill Patterson</p>
                    <p className="black small-txt">Front End Developer</p>

                  </div>
                  <Image
                  className="self-center"
                  src={'/plus.png'}
                  alt="profilePic"
                  width={75}
                  height={20} 
                  />
                </div>
                <Image
                  className="self-center"
                  src={'/Group 180.png'}
                  alt="profilePic"
                  width={1000}
                  height={20} 
                  />
              </div>

            {/* <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Landing template for <span className="text-color-primary">startups</span>
            </h1> */}
            <br/>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;