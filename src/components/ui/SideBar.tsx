'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion';

const SideBar = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <>
      <div
        className={`transition-all duration-300 ease-in-out flex  flex-col ${collapse ? 'w-max' : 'w-64'}  border-r  bg-purple px-5 py-4 sm:block  hidden`}
      >
        <div className='flex justify-between'>
          <Link href='#'>
            <Image
              className={` transition-all duration-300 ease-in-out ${collapse ? 'hidden' : ''}`}
              src='/Logo.png'
              width={125}
              height={41.97}
              alt='Logo'
            />
          </Link>

          <button
            onClick={() => setCollapse(!collapse)}
            className=''
          >
            <Image
              className={`${collapse ? 'rotate-180' : ''}`}
              src='/Arrow-left.png'
              width={24}
              height={24}
              alt='Logo'
            />
          </button>
        </div>
        <div className='mt-14 flex flex-1 flex-col justify-between'>
          <nav className=' space-y-6  '>
            <Accordion
              type='single'
              collapsible
            >
              <AccordionItem
                value='item-1'
                className='border-0 '
              >
                <AccordionTrigger className='hover:no-underline'>
                  <span className='flex'>
                    <Image
                      src='/Home.png'
                      width={22}
                      height={22}
                      alt='Home'
                    />
                    <span
                      className={`mx-2 text-sm font-medium text-white ${collapse ? 'hidden' : ''}`}
                    >
                      Home
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <span className='flex items-center'>
                    <Image
                      src='/dot.png'
                      width={30}
                      height={30}
                      alt='point'
                    />
                    <Link
                      href='/'
                      className='text-white'
                    >
                      Property Details
                    </Link>
                  </span>
                </AccordionContent>
                <AccordionContent>
                  <span className='flex items-center'>
                    <Image
                      src='/dot.png'
                      width={30}
                      height={30}
                      alt='point'
                    />
                    <Link
                      href='#'
                      className='text-white'
                    >
                      Expenses & Revenue
                    </Link>
                  </span>
                </AccordionContent>
                <AccordionContent>
                  <span className='flex items-center'>
                    <Image
                      src='/dot.png'
                      width={30}
                      height={30}
                      alt='point'
                    />
                    <Link
                      href='#'
                      className='text-white'
                    >
                      {' '}
                      Occupancy
                    </Link>
                  </span>
                </AccordionContent>
                <AccordionContent>
                  <span className='flex items-center'>
                    <Image
                      src='/dot.png'
                      width={30}
                      height={30}
                      alt='point'
                    />
                    <Link
                      href='#'
                      className='text-white'
                    >
                      Payment & Contracts{' '}
                    </Link>
                  </span>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value='item-2'
                className='border-0 '
              >
                <AccordionTrigger className='hover:no-underline'>
                  <span className='flex'>
                    <Image
                      src='/Add_Property.png'
                      width={22}
                      height={22}
                      alt='Add Property'
                    />
                    <span
                      className={`mx-2 text-sm font-medium  text-white ${collapse ? 'hidden' : ''}`}
                    >
                      <Link
                        href='#'
                        className='text-white'
                      >
                        Add Property
                      </Link>
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <span className='flex items-center'>
                    <Image
                      src='/dot.png'
                      width={30}
                      height={30}
                      alt='point'
                    />
                    <Link
                      href='/BuildingInfo'
                      className='text-white'
                    >
                      Full Building
                    </Link>
                  </span>
                </AccordionContent>
                <AccordionContent>
                  <span className='flex items-center'>
                    <Image
                      src='/dot.png'
                      width={30}
                      height={30}
                      alt='point'
                    />
                    <Link
                      href='#'
                      className='text-white'
                    >
                      Unit
                    </Link>
                  </span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className='space-y-3 '>
              <Link
                className='flex transform items-center rounded-lg px-0 py-2 text-white transition-colors duration-300  '
                href='#'
              >
                <Image
                  src='/Chat.png'
                  width={22}
                  height={22}
                  alt='Chat'
                />

                <span
                  className={`mx-2 text-sm font-medium ${collapse ? 'hidden' : ''}`}
                >
                  Chat
                </span>
              </Link>

              <Link
                className='flex transform items-center rounded-lg px-0 py-2 text-white transition-colors duration-300 '
                href='#'
              >
                <Image
                  src='/Setting.png'
                  width={22}
                  height={22}
                  alt='Setting'
                />

                <span
                  className={`mx-2 text-sm font-medium ${collapse ? 'hidden' : ''}`}
                >
                  Setting
                </span>
              </Link>
            </div>
          </nav>
        </div>
        <div className='mt-52 '>
          <Link
            className='flex transform items-center transition-colors duration-300 '
            href='#'
          >
            <Image
              src='/LogOut.png'
              width={22}
              height={22}
              alt='Setting'
            />

            <span
              className={`mx-2 text-sm font-medium text-white ${collapse ? 'hidden' : ''}`}
            >
              Log Out
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
