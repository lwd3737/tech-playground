import "@/styles/globals.css";
import { Meta, StoryObj } from "@storybook/react";
import BaseButton, { BaseButtonProps } from "./BaseButton";

const meta = {
	title: "Example/BaseButton",
	component: (props: BaseButtonProps) => (
		<BaseButton {...props}>버튼</BaseButton>
	),
	tags: ["autodocs"],
} satisfies Meta<typeof BaseButton>;

export default meta;

const ActionsData = {};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		...ActionsData,
	},
};

export const Loading: Story = {
	args: {
		...ActionsData,
		isLoading: true,
	},
};

export const SM: Story = {
	args: {
		...ActionsData,
		size: "sm",
	},
};

export const LG: Story = {
	args: {
		...ActionsData,
		size: "lg",
	},
};

export const Full: Story = {
	args: {
		...ActionsData,
		size: "full",
	},
};

export const Icon: Story = {
	args: {
		...ActionsData,
		size: "icon",
	},
};

export const FilledPrimary400: Story = {
	args: {
		...ActionsData,
		color: "primary-400",
	},
};

export const FilledIcon: Story = {
	args: {
		...ActionsData,
		color: "icon",
	},
};

export const TextPrimary: Story = {
	args: {
		...ActionsData,
		variant: "text",
	},
};

export const TextPrimary400: Story = {
	args: {
		...ActionsData,
		variant: "text",
		color: "primary-400",
	},
};
