"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ThemeToggle from './components/ThemeToggle';

export default function Home() {
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
          <div className="window-content">linkedin & github</div>
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
          <div className="window-content">
            <div className="text-lg font-semibold  mb-2">
              I’m a software engineer with experience in full-stack development. I enjoy exploring new technologies, optimizing system performance, and creating seamless user experiences. I have a strong preference for frontend development and genuinely enjoy bringing ideas to life with intuitive and visually appealing designs.
            </div>
            <div className="text-md mb-2">
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
          <div className="window-content">Software Engineer</div>
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
          <div className="window-content">slide show of personal projects</div>
        </div>

        <div className="box box7 sticky-note">
          <div className="sticky-note-content">
            Download Resume
          </div>
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

