"use client"

import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <div className="box box1">
        <div className="window-header">
          <span>Box 1</span>
          <div className="window-controls">
            <div style={{ backgroundColor: "#FF5F56" }}></div>
            <div style={{ backgroundColor: "#FFBD2E" }}></div>
            <div style={{ backgroundColor: "#27C93F" }}></div>
          </div>
        </div>
        <div className="window-content">box1 content</div>
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
        <div className="window-content">bio data</div>
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
  );
}

