import "@/styles/globals.css";
import { Meta, StoryObj } from "@storybook/react";
import SignUpForm from "./SignUpForm";
import { fn } from "@storybook/test";

const meta = {
	title: "Example/SignUpForm",
	component: SignUpForm,
	tags: ["autodocs"],
} satisfies Meta<typeof SignUpForm>;

export default meta;

const ActionsData = {
	onSuccess: fn(() => alert("로그인 성공")),
	onError: fn(() => alert("로그인 실패")),
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		...ActionsData,
	},
};
