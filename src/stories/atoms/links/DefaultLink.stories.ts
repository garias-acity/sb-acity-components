import { DefaultLink, DefaultLinkProps } from "@/components/atoms/links";
import { Theme } from "@/interfaces";
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
    theme: Theme.GENERAL,
  },
  argTypes: {
    theme: {
      options: [Theme.COL, Theme.AD, Theme.GENERAL],
      control: { type: "select" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const CasinoLink: Story = {
  args: {
    label: "Example",
  },
};

export const ADLink: Story = {
  args: {
    label: "Example",
    theme: Theme.AD,
  },
};
