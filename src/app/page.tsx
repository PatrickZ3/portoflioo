"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import ThemeToggle from './components/ThemeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub  } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const socialMediaLinks = [
    {
      href: 'https://www.linkedin.com/in/pslay/',
      icon: faLinkedin,
      label: 'LinkedIn'
    },
    {
      href: 'https://github.com/PatrickZ3',
      icon: faGithub,
      label: 'GitHub'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      name: "Coaca",
      image: "/coacaShowcase.png",
      description: "A simple weather app."
    },
    {
      name: "Project 2",
      image: "/PatAnimated.png",
      description: "A description of Project 2."
    },
    {
      name: "Project 3",
      image: "/PatAnimated.png",
      description: "A description of Project 3."
    }
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };


  return (
    <div className="min-h-screen transition-colors duration-300">

      <div className="container">
        <div className="box box1">
          <div className="window-header">
            <Image
              src="https://media.giphy.com/media/ea74cjF0jieXu/giphy.gif"
              alt="Hoppip Cat Pixel GIF"
              width={30}
              height={30}
              style={{ borderRadius: '5px' }}
            />

            <div className="window-controls">
              <div style={{ backgroundColor: "#FF5F56" }}></div>
              <div style={{ backgroundColor: "#FFBD2E" }}></div>
              <div style={{ backgroundColor: "#27C93F" }}></div>
            </div>
          </div>
          <div className="window-content">
            <div className="content-switch">
              <div className={'font-bold'}>Patrick Santoso lay</div>
              <ThemeToggle />
            </div>
          </div>
        </div>

        <div className="box box2 relative">
          <div className="window-header">
            <span>Profile Picture</span>
            <div className="window-controls">
              <div style={{ backgroundColor: "#FF5F56" }}></div>
              <div style={{ backgroundColor: "#FFBD2E" }}></div>
              <div style={{ backgroundColor: "#27C93F" }}></div>
            </div>
          </div>
          <div className="window-content">
            <Image
              src="/PatAnimated.png"
              alt="Pat Animated"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="box box3">
          <div className="window-header">
            <span>Social Media</span>
            <div className="window-controls">
              <div style={{ backgroundColor: "#FF5F56" }}></div>
              <div style={{ backgroundColor: "#FFBD2E" }}></div>
              <div style={{ backgroundColor: "#27C93F" }}></div>
            </div>
          </div>
          <div className="window-content">
            <div className="flex justify-center items-center space-x-15">
              {socialMediaLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  aria-label={link.label}
                >
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="box box9">
          <div className="window-header">
            <span>???</span>
            <div className="window-controls">
              <div style={{ backgroundColor: "#FF5F56" }}></div>
              <div style={{ backgroundColor: "#FFBD2E" }}></div>
              <div style={{ backgroundColor: "#27C93F" }}></div>
            </div>
          </div>
          <div className="window-content">???</div>
        </div>

        <div className="box box4">
          <div className="window-header">
            <span>Biography</span>
            <div className="window-controls">
              <div style={{ backgroundColor: "#FF5F56" }}></div>
              <div style={{ backgroundColor: "#FFBD2E" }}></div>
              <div style={{ backgroundColor: "#27C93F" }}></div>
            </div>
          </div>
          <div className="window-content p-0">
            <div className="text-lg font-semibold">
              I’m a software engineer with experience in full-stack development. I enjoy exploring new technologies, optimizing system performance, and creating seamless user experiences. I have a strong preference for frontend development and genuinely enjoy bringing ideas to life with intuitive and visually appealing designs.
            </div>
            <div className="text-md">
              I am a problem solver, creator, and lifelong learner. I love working on diverse projects, playing trading card games, photography, and making videos. I am also passionate about tech innovations and exploring new cultures.
            </div>
            <div className="text-md">
              Thank you for checking out my work. Feel free to connect and share your thoughts!
            </div>
          </div>
        </div>

        <div className="box box5">
          <div className="window-header">
            <span>Professional Experience</span>
            <div className="window-controls">
              <div style={{ backgroundColor: "#FF5F56" }}></div>
              <div style={{ backgroundColor: "#FFBD2E" }}></div>
              <div style={{ backgroundColor: "#27C93F" }}></div>
            </div>
          </div>
          <div className="window-content">
            <div className="text-lg font-extrabold">
              Armonía | www.armoniaservices.com
            </div>
            <div className="text-md font-bold">
              Software Engineer
            </div>
            <div className="text-xs">
              Sep 2024 - Dec 2024
            </div>
          </div>
        </div>

        <div className="box box6">
          <div className="window-header">
            <span>Projects</span>
            <div className="window-controls">
              <div style={{ backgroundColor: "#FF5F56" }}></div>
              <div style={{ backgroundColor: "#FFBD2E" }}></div>
              <div style={{ backgroundColor: "#27C93F" }}></div>
            </div>
          </div>
          <div className="window-content">
          <div className="flex justify-between items-center">
          <button 
                onClick={goToPreviousSlide} 
                className="arrow-button"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>

              <div className="flex items-center">
                <Image
                  src={projects[currentSlide].image}
                  alt={projects[currentSlide].name}
                  width={250} // Reduced image size
                  height={200}
                  className="rounded-lg"
                />
                <div className="ml-4">
                  <h2 className="font-semibold text-xl">{projects[currentSlide].name}</h2>
                  <p>{projects[currentSlide].description}</p>
                </div>
              </div>

              <button 
                onClick={goToNextSlide} 
                className="arrow-button"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>

        <div className="box box7 sticky-note">
          <a href="/patricklay_resume.pdf" download className="sticky-note-content">
            <p>Download Resume</p>
            <div className="resume-image">
              <Image
                src="/resume.png"
                alt="resume"
                layout="intrinsic"
                objectFit="cover"
                className="rounded-lg"
                width={60}
                height={60}
              />
            </div>
          </a>
        </div>


        <div className="box box8">
          <div className="window-header">
            <span>3D Graphics</span>
            <div className="window-controls">
              <div style={{ backgroundColor: "#FF5F56" }}></div>
              <div style={{ backgroundColor: "#FFBD2E" }}></div>
              <div style={{ backgroundColor: "#27C93F" }}></div>
            </div>
          </div>
          <div className="window-content">graphic</div>
        </div>
      </div>
    </div>

  );
}

