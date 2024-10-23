import { DefaultCard } from "@/component";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Example/Card",
  component: DefaultCard,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    Expand: fn(),
  },
} satisfies Meta<typeof DefaultCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Expand: Story = {};
