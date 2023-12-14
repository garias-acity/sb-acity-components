import type { Meta, StoryObj } from "@storybook/react";

import { MaintenancePage } from "../../pages/Maintenance";

const meta = {
  title: "Pages/Maintenance",
  component: MaintenancePage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof MaintenancePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Maintenance: Story = {}