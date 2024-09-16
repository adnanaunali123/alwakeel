'use client';

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

interface revenueDataI {
  month: string;
  totalRevenue: number;
}
const revenueData: revenueDataI[] = [
  { month: 'January', totalRevenue: 15000 },
  { month: 'February', totalRevenue: 1600 },
  { month: 'March', totalRevenue: 1700 },
  { month: 'April', totalRevenue: 18000 },
  { month: 'May', totalRevenue: 1910 },
  { month: 'June', totalRevenue: 2000 },
  { month: 'July', totalRevenue: 2100 },
  { month: 'August', totalRevenue: 2210 },
  { month: 'September', totalRevenue: 2300 },
  { month: 'October', totalRevenue: 2400 },
  { month: 'November', totalRevenue: 2500 },
  { month: 'December', totalRevenue: 26000 },
];
const chartConfig = {
  totalRevenue: {
    label: 'totalRevenue',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;
interface ChartProps {
  value: number;
}
export function RevenueChart({ value }: ChartProps) {
  const updatedData = revenueData.slice(0, value);

  return (
    <Card className='flex items-center py-[2.625rem] px-[1.5rem] border-green'>
      <div>
        <p className='text-sm'>Total Expense</p>
        <h1 className='text-4xl'>$4445</h1>
        <p className='text-sm'>Last 6 month</p>
      </div>
      <CardContent className='flex-1'>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={updatedData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid
              vertical={false}
              horizontal={false}
            />
            {/* <XAxis

              dataKey='month'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={value => value.slice(0, 3)

              }
              interval={0}

            /> */}
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator='dot'
                  // hideLabel
                />
              }
            />
            <Area
              dataKey='totalRevenue'
              type='linear'
              fill='green'
              fillOpacity={0.2}
              stroke='green'
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  );
}
