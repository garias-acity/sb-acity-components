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

export default meta;
type Story = StoryObj<typeof meta>;

const Template: any = (args: Story) => <Button {...args} />;

// Default button story
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Click me',
  onClick: () => console.log('Button clicked'),
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Click me',
  onClick: () => console.log('Button clicked'),
  disabled: false,
};

// Loading button story
export const Loading = Template.bind({});
Loading.args = {
  variant: 'primary',
  label: 'Loading...',
  isLoading: true,
};

// Disabled button story
export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  label: 'Disabled',
  disabled: true,
};

// Button with left icon story
export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  variant: 'primary',
  label: 'Click me',
  icon: {
    component: <HeartIcon width={15} />,
    position: 'left',
  },
  onClick: () => console.log('Button clicked'),
};

// Button with right icon story
export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  variant: 'primary',
  label: 'Click me',
  icon: {
    component: <HeartIcon width={15} />,
    position: 'right',
  },
  onClick: () => console.log('Button clicked'),
};