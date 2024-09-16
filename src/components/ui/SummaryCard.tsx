import React from 'react';
import { Card, CardContent } from './card';
import Image from 'next/image';

interface summaryProps {
  heading: string;
  value: string;
  duration: string;
  imageName: string;
}
const SummaryCard = ({ heading, value, duration, imageName }: summaryProps) => {
  return (
    // <div>
    //   <Card className=''>
    //     <CardContent className='flex flex-1 items-center pb-0 '>
    //       <div className='flex justify-between items-center '>
    //         <div className='w-fit'>
    //           <p className='text-sm'>Total {heading}</p>
    //           <h1 className='text-4xl'>{value}</h1>
    //           <p className='text-sm'>Last {duration}</p>
    //         </div>
    //         <div>
    //           <Image
    //             src={`/${imageName}.png`}
    //             width={40}
    //             height={40}
    //             alt={`${imageName}`}
    //           />
    //         </div>
    //       </div>
    //     </CardContent>
    //   </Card>
    // </div>

    <div>
      <Card className='border-green'>
        <CardContent className='pb-0'>
          <div className='flex justify-between items-center w-full py-10'>
            <div className=''>
              <p className='text-sm'>Total {heading}</p>
              <h1 className='text-4xl'>{value}</h1>
              <p className='text-sm'>Last {duration}</p>
            </div>
            <div className='flex-shrink-0'>
              <Image
                src={`/${imageName}.png`}
                width={40}
                height={40}
                alt={`${imageName}`}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryCard;
