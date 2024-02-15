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
    label: "Primary me",
    primary: "primary",
  },
};

export const DangerStyled: Story = {
  args: {
    label: "Danger me",
    primary: "danger",
  },
};

export const SecondaryStyled: Story = {
  args: {
    label: "Secondary me",
    primary: "secondary",
  },
};
