import { Meta, StoryObj } from "@storybook/react";
import { OtpInput } from "@/components/forms";

const meta: Meta<typeof OtpInput> = {
  title: "Forms/OtpInput",
  component: OtpInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    length: 4,
    onChangeOTP: () => {},
    autoFocus: true,
  },
  argTypes: {
    length: {
      type: "number",
      description:
        "Actualmente no puede cambiar el tamaño dinámicamente, pero si funciona correctamente si se mantiene con un mismo tamaño",
    },
    onChangeOTP: {
      type: "function",
    },
  },
};

export default meta;

type Story = StoryObj<typeof OtpInput>;

export const Example: Story = {};
