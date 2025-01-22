import "@/styles/globals.css";
import { Meta, StoryObj } from "@storybook/react";
import BaseInput from "./BaseInput";
import { EmailIcon, EyeIcon } from "../Icon";

const meta = {
	title: "Example/BaseInput",
	component: BaseInput,
	tags: ["autodocs"],
} satisfies Meta<typeof BaseInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const DefaultProps = {
	label: "라벨",
	placeholder: "입력해 주세요.",
	required: true,
};

const WithIconProps = {
	leftIcon: <EmailIcon />,
	rightIcon: <EyeIcon />,
};

const Messages = {
	error: "에러 메시지입니다",
	helper: "도움 메시지입니다",
};

export const Default: Story = {
	args: {
		...DefaultProps,
	},
};

export const DefaultWithIcons: Story = {
	args: {
		...DefaultProps,
		...WithIconProps,
	},
};

export const NotFullWidth: Story = {
	args: {
		...DefaultProps,
		...WithIconProps,
		fullWidth: false,
	},
};

export const FilledWhite: Story = {
	args: {
		...DefaultProps,
		...WithIconProps,
		variant: "filled",
	},
};

export const FilledGray: Story = {
	args: {
		...DefaultProps,
		...WithIconProps,
		variant: "filled",
	},
};

export const OutlinedPrimary: Story = {
	args: {
		...DefaultProps,
		...WithIconProps,
		variant: "outlined",
		color: "primary",
	},
};

export const OutlinedGray: Story = {
	args: {
		...DefaultProps,
		...WithIconProps,
		variant: "outlined",
		color: "gray",
	},
};

export const WithHelper: Story = {
	args: {
		...DefaultProps,
		...WithIconProps,
		helper: Messages.helper,
	},
};

export const Invalid: Story = {
	args: {
		...DefaultProps,
		...WithIconProps,
		...Messages,
		validateState: "invalid",
	},
};

export const Valid: Story = {
	args: {
		...DefaultProps,
		...WithIconProps,
		helper: Messages.helper,
		validateState: "valid",
	},
};
