import { Meta, StoryObj } from "@storybook/react";
import { Coin, PrizeFont } from "@/components/fonts";

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
      description: `${Coin.PEN} | ${Coin.USD}`,
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
