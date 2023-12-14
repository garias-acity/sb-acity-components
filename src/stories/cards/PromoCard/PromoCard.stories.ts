import type { Meta, StoryObj } from '@storybook/react';

import { PromoCard, type Props } from '@/components/Cards/PromoCard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<Props> = {
  title: 'Cards/PromoCard',
  component: PromoCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof PromoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PromotionCard: Story = {
  args: {
    imagePath: 'https://www.casinoatlanticcity.com/static/img/promociones/destacados/desktop/BANNERS-VERANO-DESTACADOSDESKTOP-FONDO.jpg',
    title: 'Mega torneo atlantic',
    description: 'Más de S/125,00 en premios al mes',
    vertical: 'casino'
  }
}