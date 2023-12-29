import { Meta, StoryObj } from '@storybook/react';

import { Button, type ButtonProps } from '@/components/Buttons/Button';
import { HeartIcon } from '@/components/Icons';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<ButtonProps> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ['primary', 'secondary', 'default'],
    }
  }
} satisfies Meta<typeof Button>;