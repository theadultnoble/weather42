import Image from 'next/image';
import './globals.css';

export default function ComponentName() {
  return (
    <div className='w-screen h-screen px-20 pt-14'>
      <div className='flex flex-row justify-between mb-6 '>
        <div className='flex rounded-full overflow-hidden'>
          <Image
            src={`/images/memoji.png`}
            alt={'avatar'}
            width='110'
            height='110'
          />
        </div>
        <div className='relative h-6 w-80 flow-hidden rounded'>
          <div className='absolute inset-y-0 left-0 flex items-center h-full pl-1 pointer-events-none'>
            <svg
              className='w-3 h-3 text-slate-500'
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
            className='block px-4 pl-5 text-xs text-slate-400 border border-transparent rounded bg-slate-700 outline-none box-border h-full w-full flex-1'
            placeholder='Search for a City'
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
            <h1 className='text-8xl mb-11 bold'>28°c</h1>
            {/* °C */}
          </div>
          <div
            style={{
              width: '150px',
              height: '50px',
            }}
            className='flex flex-col justify-center items-center'
          >
            <h1 className='text-base tracking-wide font-bold mb-1'>
              Partly Cloudy
            </h1>
            <h2 className='text-xs font-bold tracking-wider'>H:35 ... L:18</h2>
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
          <div
            style={{
              width: '70px',
              height: '40px',
            }}
            className='flex flex-col justify-center items-center'
          >
            <h1 className='text-xs'>Air quality💨</h1>
            <h2 className='text-xs font-bold'>106</h2>
          </div>
          <div
            style={{
              width: '50px',
              height: '40px',
            }}
            className='flex flex-col justify-center items-center'
          >
            <h1 className=' text-xs'>Wind 🌬️ </h1>
            <h2 className='text-xs font-bold'>10 km/hr</h2>
          </div>
          <div
            style={{
              width: '60px',
              height: '40px',
            }}
            className='flex flex-col justify-center items-center'
          >
            <h1 className='text-xs'>Humidity💧</h1>
            <h2 className='text-xs font-bold'>86%</h2>
          </div>
          <div
            style={{
              width: '60px',
              height: '40px',
            }}
            className='flex flex-col justify-center items-center'
          >
            <h1 className=' text-xs'>Velocity 〄</h1>
            <h2 className='text-xs font-bold'>14km</h2>
          </div>
          <div
            style={{
              width: '60px',
              height: '40px',
            }}
            className='flex flex-col justify-center items-center'
          >
            <h1 className=' text-xs'>Pressure🧭</h1>
            <h2 className='text-xs font-bold'>100Pa</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import Head from 'next/head';
