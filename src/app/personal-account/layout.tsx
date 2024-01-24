import { PersonalMenu } from "@/components/PersonalMenu/PersonalMenu";
import "./personalAccount.css";

export default function PALayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="personal_container">
			<aside className="main_container">
				<PersonalMenu />
			</aside>
			<section className="main_container">{children}</section>
		</section>
	);
}
