import { FlipCard } from '@/components/Cards/FlipCard';
import { FlipCardBase } from '@/components/Cards/FlipCard/FilpCardBase';
import type { Meta, StoryObj } from '@storybook/react';
import { FlipCardDemo } from './FlipCard.demo';

const meta: Meta<any> = {
    title: 'Cards/Flipcard',
    component: FlipCard,
    parameters: {
        layout: 'centered'
      },
      tags: ['autodocs'],
} satisfies Meta<typeof FlipCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template = (args: any) => <FlipCardBase {...args} />;
export const Basic = Template.bind({});

export const WithFrontAndBack: Story = {
  args: {
    isFlipped: false,
    children: <FlipCardDemo />    
  },
  // render: () => <FlipCardDemo />
}