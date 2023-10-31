import { Meta, StoryObj } from "@storybook/react";
import { PrizeFont, PrizeFontProps } from "@components/decoFonts";

const meta: Meta<PrizeFontProps> = {
  title: "Fonts/PrizeFont",
  component: PrizeFont,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PrizeFont>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    amount: "X,XXX",
    coin: "PEN",
  },
};
export const Thousand: Story = {
  args: {
    coin: "PEN",
    amount: "1,000",
  },
};
export const TenThousand: Story = {
  args: {
    amount: "10,000",
    coin: "PEN",
  },
};
