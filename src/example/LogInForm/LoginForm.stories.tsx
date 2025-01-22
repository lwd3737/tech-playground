import "@/styles/globals.css";
import { Meta, StoryObj } from "@storybook/react";
import LoginForm, { LoginFormProps } from "./LoginForm";
import AuthProvider from "@/providers/AuthProvider";
import { fn } from "@storybook/test";

const meta = {
	title: "Example/LoginForm",
	component: (props: LoginFormProps) => (
		<AuthProvider>
			<LoginForm {...props} />
		</AuthProvider>
	),
	tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

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
