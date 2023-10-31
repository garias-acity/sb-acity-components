import { PrizeFont } from "@/components/decoFonts";
import { Illumnation } from "@/components/effects/Illumination/Illumination";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Illumnation> = {
  title: "Effects/Illumination",
  component: Illumnation,
  tags: ["autodocs"],
} satisfies Meta<typeof Illumnation>;

export default meta;

type Story = StoryObj<typeof Illumnation>;
export const Example: Story = {
  args: {
    children: <PrizeFont amount="10,000"></PrizeFont>,
  },
};
