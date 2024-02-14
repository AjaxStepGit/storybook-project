import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import StyledButton from "./StyledButton";

const meta = {
  title: "Ajax/Button",
  component: StyledButton,
  parameters: {
    layout: "centered",
  },
  tags: ["ajax", "autodocs"],
} satisfies Meta<typeof StyledButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryStyled: Story = {
  args: {
    label: "Click me",
    backGroundColor: "bg-orange-700",
  },
};

export const DangerStyled: Story = {
  args: {
    label: "Danger me",
    backGroundColor: "bg-red-900",
  },
};
