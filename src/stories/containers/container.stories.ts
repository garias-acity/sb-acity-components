import { ContainerSection } from '@/components/Containers/Container';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<any> = {
    title: 'Containers/Container',
    component: ContainerSection,
    parameters: {
      layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
    }
} satisfies Meta<typeof ContainerSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {}