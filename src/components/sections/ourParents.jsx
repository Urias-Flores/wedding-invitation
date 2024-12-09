import AnimatedText from "../AnimatedText";

export default function OurParents(){
	return (
		<section>
			<AnimatedText
				text={"05 Abril 2025"}
				className={"wedding-date"}
			/>

			<h3 className="our-parents">Honrando a nuestros padres</h3>

			<div className="parents">
				<h4 className="parents__title">Novia</h4>
				<p className="parents__name">Coric Esmeralda Flores Osorio</p>
			</div>

			<div className="parents">
				<h4 className="parents__title">Novio</h4>
				<p className="parents__name">José Manuel Aguilar Rivas</p>
				<p className="parents__name">Fanny Yaquelin Flores Sauceda</p>
			</div>
		</section>
	)
}
