import { Meta, StoryObj } from '@storybook/react'
import { Mylabel, type LabelProps } from "../components/Mylabel";

const meta: Meta<LabelProps> = {
    title: 'example/Mylabel',
    component: Mylabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        allCaps: { control: 'boolean' },
        size: { control: 'inline-radio' },
        fontColor: { control: 'color' },
    }
} satisfies Meta<typeof Mylabel>

export default meta;

type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        label: 'Basic label'
    }
}

export const AllCaps: Story = {
    args: {
        label: 'AllCaps label',
        allCaps: true
    }
}

export const Secondary: Story = {
    args: {
        label: 'Secondary label',
        color: 'secondary'
    }
}

export const CustomColor: Story = {
    args: {
        label: 'CustomColor label',
        fontColor: '#f00'
    }
}