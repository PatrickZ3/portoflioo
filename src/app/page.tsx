"use client"

import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <div className="box box1">box1</div>
      <div className="box box2 relative">
      <Image 
          src="/PatAnimated.png" 
          alt="Pat Animated"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="box box3">box3</div>
      <div className="box box4">box4</div>
      <div className="box box5">box5</div>
      <div className="box box6">box6</div>
      <div className="box box7">box7</div>
      <div className="box box8">box8</div>
    </div>
  );
}
