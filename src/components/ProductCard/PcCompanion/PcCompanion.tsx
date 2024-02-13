import { TCardMainInfo } from "@/Types/TCard";
import "./PcCompanion.css";
import { PcCompanionCards } from "./PcCompanionCards/PcCompanionCards";

type Props = {
	cards: TCardMainInfo[];
};

const PcCompanion = ({ cards }: Props) => {
	return (
		<div className="pc_companion_block">
			<h3 className="pc_companion_title">Ткани-компаньоны:</h3>
			<p className="pc_companion_text">
				В этом разделе представлены ткани, которые, на наш взгляд, сочетаются с
				основной тканью. Эти ткани не всегда являются &laquo;родными&raquo;
				компаньонами и могут отличаться по качеству от основной ткани.
			</p>
			<PcCompanionCards cards={cards} />
		</div>
	);
};

export { PcCompanion };
