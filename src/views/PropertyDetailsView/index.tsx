import { Card, CardContent } from '@/components/ui/card';
import { CombineChart } from '@/components/ui/CombileChart';
import { ExpenseChart } from '@/components/ui/ExpenseChart';
import { RadialChart } from '@/components/ui/RadialChart';
import { RevenueChart } from '@/components/ui/RevenueChart';
import SummaryCard from '@/components/ui/SummaryCard';
import { Progress } from '@/components/ui/progress';
import React from 'react';

const value = 4;
const PropertyDetailsView = () => {
  return (
    <>
      <div className=''>
        <h1 className='text-lg'>Property Details</h1>
        <div className='px-4 space-y-6 '>
          <div className='flex justify-between gap-4'>
            <div className='w-4/12 items-end space-y-[1.25rem]'>
              <div className='border-solid '>
                <ExpenseChart value={value} />
              </div>
              <div className='  border-solid '>
                <RevenueChart value={value} />
              </div>
            </div>
            <div className='w-full'>
              <Card className='flex h-full   items-center border-green'>
                <CardContent className='flex flex-1 justify-between items-center pb-0'>
                  <div className=' border-solid flex items-center justify-between w-auto '>
                    <div className='w-3/5'>
                      <CombineChart />
                    </div>

                    <div>
                      <RadialChart />
                      <div className=''>
                        <p></p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className='grid grid-cols-5 gap-2 '>
            <div className=''>
              <SummaryCard
                heading={'Listed Units'}
                value={'8,212'}
                duration={'Last 7 days'}
                imageName={'building-4'}
              />
            </div>
            <div className=''>
              <SummaryCard
                heading={'Vacant Units'}
                value={'3.15M'}
                duration={'Last 7 days'}
                imageName={'people'}
              />
            </div>
            <div className=''>
              <SummaryCard
                heading={'Rented Units'}
                value={'1.32M'}
                duration={'Last 7 days'}
                imageName={'presention-chart'}
              />
            </div>
            <div className='col-span-2 w-full '>
              <Card className='border-green h-[10rem] py-10'>
                <CardContent className='pb-0'>
                  <div className='flex justify-between'>
                    <div className='flex'>
                      <div className='w-[5.188rem] h-[5.188rem] bg-lightgreen rounded-md'></div>
                      <div className='w-[3.5rem] h-[5.188rem] bg-green rounded-md'></div>
                      <div className='w-[2.25rem] h-[5.188rem] bg-purple rounded-md'></div>
                    </div>
                    <div>
                      <p>Occupancy</p>
                      <p>
                        <span className='w-[0.7rem] h-[0.7rem] bg-lightgreen rounded-full inline-block mr-3.5'></span>
                        Vacant
                      </p>
                      <p>
                        <span className='w-[0.7rem] h-[0.7rem] bg-green rounded-full inline-block mr-3.5'></span>
                        Occupied
                      </p>
                      <p className='flex items-center justify-between'>
                        <span className='w-[0.7rem] h-[0.7rem] bg-purple rounded-full inline-block mr-3.5'></span>
                        Not Ready
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className=''>
            <Card className='border-green py-6'>
              <CardContent className='space-y-6'>
                <div className='flex justify-between'>
                  <div>
                    <h1>Main balance</h1>
                    <p>$864,333.07</p>
                  </div>
                  <div>
                    <p>Weekly Property Summary</p>
                    <div className='flex'>
                      <div>
                        <p className='flex items-center justify-start'>
                          <span className='w-[0.7rem] h-[0.7rem] bg-green rounded-full inline-block mr-3'></span>
                          Paid
                        </p>
                        <p className='flex items-center justify-start'>
                          <span className='w-[0.7rem] h-[0.7rem] bg-purple rounded-full inline-block mr-3'></span>
                          Unpaid
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Progress
                    value={33}
                    className='w-[100%] bg-green '
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetailsView;
