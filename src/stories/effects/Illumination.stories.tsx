import { PrizeFont } from "@/components/decoFonts";
import { Illumination } from "@/components/effects/Illumination/Illumination";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Illumination> = {
  title: "Effects/Illumination",
  component: Illumination,
  tags: ["autodocs"],
  args: {
    children: <PrizeFont amount="10,000"></PrizeFont>,
    width: "100%",
  },
  argTypes: {
    width: {
      type: "string",
      description: "Width value set to illumnation element",
    },
    children: {
      type: "function",
      description: "Child component to be wrapped",
    },
  },
} satisfies Meta<typeof Illumination>;

export default meta;

type Story = StoryObj<typeof Illumination>;
export const Example: Story = {
  args: {
    children: <PrizeFont amount="10,000"></PrizeFont>,
    width: "100%",
  },
};
