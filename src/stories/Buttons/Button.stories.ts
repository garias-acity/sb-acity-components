import type { Meta, StoryObj } from '@storybook/react';

import { Button, type ButtonProps } from '@/components/Buttons/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<ButtonProps> = {
  title: 'Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ['primary', 'secondary', 'default'],
    },
    icon: {
      controls: { hideNoControlsWarning: true },
    },
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'DEPOSITAR',
    icon: '♫'
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'JUGAR',
    icon: null
  },
};

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'VER MÁS'
  },
};
