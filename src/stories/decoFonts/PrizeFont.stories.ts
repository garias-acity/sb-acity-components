import { Meta, StoryObj } from "@storybook/react";
import { Coin, PrizeFont } from "@components/decoFonts";

const meta: Meta<typeof PrizeFont> = {
  title: "Fonts/PrizeFont",
  component: PrizeFont,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    amount: "X,XXX",
    coin: Coin.PEN,
  },
  argTypes: {
    coin: {
      description: "PEN | USD",
      options: [Coin.PEN, Coin.USD],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PrizeFont>;

export const Example: Story = {
  args: {
    amount: "X,XXX",
    coin: Coin.PEN,
  },
};
export const Thousand: Story = {
  args: {
    coin: Coin.PEN,
    amount: "1,000",
  },
};
export const TenThousand: Story = {
  args: {
    amount: "10,000",
    coin: Coin.PEN,
  },
};
