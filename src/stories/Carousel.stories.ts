import { Carousel } from "@/component";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Example/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    Expand: fn(),
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Download: Story = {};
