import { ExpandCard } from "@/component";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Example/Card",
  component: ExpandCard,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    Expand: fn(),
  },
} satisfies Meta<typeof ExpandCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Expand: Story = {};
