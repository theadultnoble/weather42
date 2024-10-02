'use client';
import Image from 'next/image';
import './globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

export default function ComponentName() {
  const router = useRouter();
  return (
    <div className='w-screen h-screen px-20 pt-14'>
      <div className='flex flex-row p-2 h-12 justify-between mb-32'>
        <FontAwesomeIcon
          onClick={() => router.push('/dashboard')}
          icon={faBars}
          size='lg'
        />

        <div className='relative h-8 w-44 flow-hidden rounded-full'>
          <div className='absolute inset-y-0 left-0 flex items-center h-full pl-1 pointer-events-none'>
            <svg
              className='w-3 h-3 ml-2 text-neutral-600'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
          <input
            type='search'
            id='search'
            className='block ml-2 px-6 text-xs text-neutral-400 border-1 border-transparent rounded-full bg-transparent outline-none box-border h-full w-full flex-1 placeholder:text-neutral-600'
            placeholder='Search for a city'
          />
        </div>
      </div>
      <div className='justify-center flex '>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              width: '152px',
              height: '150px',
            }}
            className='flex flex-col justify-center items-center'
          >
            <h2 className='text-6xl mb-4 bold'>Abuja</h2>
            <h1 className='text-8xl mb-11 bold lato-bold'>28°c</h1>
          </div>
          <div
            style={{
              width: '150px',
              height: '50px',
            }}
            className='flex flex-col justify-center items-center'
          >
            <h1 className='text-lg font-bold mb-1'>Partly Cloudy</h1>
            <h2 className='text-base'>H:35° L:18°</h2>
          </div>
        </div>
      </div>
      <div className='pt-16'>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <div className='flex flex-col justify-between items-center'>
            <h1 className='text-xs'>Air quality ♲</h1>
            <h2 className='text-sm font-bold'>106</h2>
          </div>
          <div
            style={{
              height: '40px',
            }}
            className='flex flex-col justify-between items-center'
          >
            <h1 className=' text-xs'>Wind ⏂</h1>
            <h2 className='text-sm font-bold'>10 km/h</h2>
          </div>
          <div
            style={{
              height: '40px',
            }}
            className='flex flex-col justify-between items-center'
          >
            <h1 className='text-xs'>Humidity ♨︎</h1>
            <h2 className='text-sm font-bold'>86%</h2>
          </div>
          <div
            style={{
              height: '40px',
            }}
            className='flex flex-col justify-between items-center'
          >
            <h1 className=' text-xs'>Velocity 〄</h1>
            <h2 className='text-sm font-bold'>14km</h2>
          </div>
          <div className='flex flex-col justify-between items-center'>
            <h1 className=' text-xs'>Pressure 〒</h1>
            <h2 className='text-sm font-bold'>1.003Pa</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import Link from 'next/link';
