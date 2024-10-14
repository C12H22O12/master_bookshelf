import { DownloadButton } from "@/component";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Example/Button",
  component: DownloadButton,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    Expand: fn(),
  },
} satisfies Meta<typeof DownloadButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Download: Story = {};
