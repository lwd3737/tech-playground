import Image from "next/image";

export interface IconProps {
	className?: string;
}

export const EyeIcon = ({ className }: IconProps) => {
	return (
		<Image
			className={className}
			src="/icons/eye.svg"
			alt="비밀번호 보기"
			width={24}
			height={24}
			priority
		/>
	);
};
