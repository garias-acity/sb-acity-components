import { DefaultLink, DefaultLinkProps } from "@/components/atoms/links";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<DefaultLinkProps> = {
  title: "Atoms/Links/Default",
  component: DefaultLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Example",
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const CasinoLink: Story = {
  args: {
    label: "Example",
  },
};
