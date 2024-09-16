'use client';

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

interface expenseDataI {
  month: string;
  totalExpense: number;
}
const expenseData: expenseDataI[] = [
  { month: 'January', totalExpense: 1500 },
  { month: 'February', totalExpense: 1200 },
  { month: 'March', totalExpense: 11000 },
  { month: 'April', totalExpense: 1300 },
  { month: 'May', totalExpense: 15001 },
  { month: 'June', totalExpense: 1600 },
  { month: 'July', totalExpense: 17100 },
  { month: 'August', totalExpense: 18200 },
  { month: 'September', totalExpense: 1900 },
  { month: 'October', totalExpense: 2000 },
  { month: 'November', totalExpense: 21300 },
  { month: 'December', totalExpense: 2200 },
];
const chartConfig = {
  totalExpense: {
    label: 'totalExpense',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;
interface ChartProps {
  value: number;
}
export function ExpenseChart({ value }: ChartProps) {
  const updatedData = expenseData.slice(0, value);

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
              dataKey='totalExpense'
              type='linear'
              fill='green'
              fillOpacity={0.2}
              stroke='green'
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
