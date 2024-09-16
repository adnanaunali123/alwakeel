'use client';

import { TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export const description = 'A stacked area chart';

interface combineDataI {
  month: string;
  totalRevenue: number;
  totalExpense: number;
}
const combineData: combineDataI[] = [
  { month: 'January', totalExpense: 1500, totalRevenue: 1500 },
  { month: 'February', totalExpense: 1200, totalRevenue: 1500 },
  { month: 'March', totalExpense: 11000, totalRevenue: 1600 },
  { month: 'April', totalExpense: 1300, totalRevenue: 1700 },
  { month: 'May', totalExpense: 15001, totalRevenue: 1800 },
  { month: 'June', totalExpense: 1600, totalRevenue: 1900 },
  { month: 'July', totalExpense: 17100, totalRevenue: 2000 },
  { month: 'August', totalExpense: 18200, totalRevenue: 2100 },
  { month: 'September', totalExpense: 1900, totalRevenue: 2200 },
  { month: 'October', totalExpense: 2000, totalRevenue: 2300 },
  { month: 'November', totalExpense: 21300, totalRevenue: 2500 },
  { month: 'December', totalExpense: 2200, totalRevenue: 2600 },
];

const chartConfig = {
  totalExpense: {
    label: 'totalExpense',
    color: 'hsl(var(--chart-1))',
  },
  totalRevenue: {
    label: 'totalRevenue',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export function CombineChart() {
  return (
    <Card className='border-none rounded-none shadow-none '>
      {/* <CardHeader>
        <CardTitle>Area Chart - Stacked</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader> */}
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={combineData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={value => value.slice(0, 3)}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='dot' />}
            />
            <Area
              dataKey='totalExpense'
              type='natural'
              fill='green'
              fillOpacity={0.4}
              stroke='grey'
              stackId='a'
            />
            <Area
              dataKey='totalRevenue'
              type='natural'
              fill='green'
              fillOpacity={0.2}
              stroke='var(--color-desktop)'
              stackId='a'
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className='flex w-full items-start gap-2 text-sm'>
          <div className='grid gap-2'>
            <div className='flex items-center gap-2 font-medium leading-none'>
              Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
            </div>
            <div className='flex items-center gap-2 leading-none text-muted-foreground'>
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
