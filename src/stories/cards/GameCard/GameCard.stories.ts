import type { Meta, StoryObj } from '@storybook/react';

import { GameCard, type Props } from '@/components/Cards/GameCard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<Props> = {
  title: 'Cards/GameCard',
  component: GameCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof GameCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IsntLogged: Story = {
    args: {
        isLogged: false,
        imagePath: 'https://www.casinoatlanticcity.com/cms/img/logos/pragmatic/4005966/atlanticmoneymouse3_02.webp',
    }
}

export const IsLogged: Story = {
    args: {
        isLogged: true,
        imagePath: 'https://www.casinoatlanticcity.com/cms/img/logos/pragmatic/4005966/atlanticmoneymouse3_02.webp',
        isFavorite: false
    }
}

export const IsFavorite: Story = {
    args: {
        isLogged: true,
        imagePath: 'https://www.casinoatlanticcity.com/cms/img/logos/pragmatic/4005966/atlanticmoneymouse3_02.webp',
        isFavorite: true
    }
}