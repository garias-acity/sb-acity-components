import { Meta, StoryObj } from '@storybook/react'
import { BoxItem, type BoxItemProps } from '../components/Box/BoxItem';

const meta: Meta<BoxItemProps> = {
    title: 'box/BoxItem',
    component: BoxItem,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof BoxItem>

export default meta;

type Story = StoryObj<typeof meta>

export const BoxSuenos: Story = {
    args: {
        id: 1,
        text: 'Juega y acumula puntos en tus máquinas favoritas.',
        backgroundColor: 'suenos'
    }
}

export const BoxEstelar: Story = {
    args: {
        id: 2,
        text: 'Juega y acumula puntos en tus máquinas favoritas.',
        backgroundColor: 'sorteo-estelar'
    }
}

export const BoxVip: Story = {
    args: {
        id: 3,
        text: 'Juega y acumula puntos en tus máquinas favoritas.',
        backgroundColor: 'vip-royal'
    }
}