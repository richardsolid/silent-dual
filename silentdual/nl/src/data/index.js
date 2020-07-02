const data = {
	navbar: [
		{
			name: "Omschrijving",
			anchor: "#descubrelo"
		},
		{
			name: "Kenmerken",
			anchor: "#caracteristicas"
		},
		{
			name: "Onderdelen",
			anchor: "#componentes"
		},
		{
			name: "Installatie",
			anchor: "#instalacion"
		},
		{
			name: "Modellen",
			anchor: "#modelos"
		},
		{
			name: "Contact",
			anchor: "#contacta"
		}
	],
	hero: {
		title1: "SILENT",
		title2: "DUAL",
		subtitle:
			"De intelligentste badkamerventilator, ontworpen voor zeer eenvoudige installatie",
		linkText: "Ontdek",
		link: "#descubrelo"
	},
	descubrelo: {
		id: "componentes",
		title: "Ontdek de onderdelen",
		hotspots: [
			{
				title: "AAN/UIT INDICATOR",
				text: "Uitgerust met LED indicator, aan bij in bedrijf.",
				top: 40,
				left: 15
			},

			{
				title: "ROOSTER",
				text:
					"Frontrooster met aerodynamisch design voor optimale luchtstroming bij laag drukverlies.",
				top: 50,
				left: 35
			},

			{
				title: "SILENT-BLOCK",
				text:
					"Motor-rotor set gemonteerd op silent-block voor het dempen van trillingen en her verlagen van geluid.",
				top: 30,
				left: 55
			},
			{
				title: "BEWEGINGSSENSOR",
				text:
					"Geïntegreerde bewegingssensor met een wijde detectieblik",
				top: 17,
				left: 67
			},

			{
				title: "BESCHERMDE ELEKTRONICA",
				text:
					"Behuizing en constructie garanderen beschermingsklasse IP45 van de elektronica",
				top: 50,
				left: 70
			},

			{
				title: "TERUGSLAGKLEP",
				text:
					"Afneembare terugslagklep met luchtvanen voor verhogen van de aerodynamica.",
				top: 35,
				left: 90
			}
		]
	},
	lead: {
		description:
			"Silent Dual, de nieuwe generatie intelligente badkamerventilatoren, adaptief voor het perfecte klimaat."
	},
	caracteristicas: {
		id: "caracteristicas",
		sectionTitle: "De enige optie, dubbel intelligent",
		specs: [
			{
				title: "2 sensoren",
				subtitle: "Aanwezigheid en vochtigheid",
				description:
					"Automatisch door detectie van <strong>beweging</strong> of toename van de relatieve <strong>vochtigheid</strong>."
			},
			{
				title: "2 bedrijfsmodi",
				subtitle: "Continu of laag/hoog",
				description:
					"<strong>Uit of laag </strong> wanneer de sensoren geen beweging of verhoogde relatieve vochtigheid detecteren.<strong><br>Aan of hoog</strong> wanneer de sensoren activeren."
			},
			{
				title: "2 luchtinlaten",
				subtitle: "Front en zijkanten",
				description:
					"Aerodynamisch ontwerp voor <strong>ruime luchtinname</strong> met laag drukverlies."
			}
		]
	},
	instalacion: {
		id: "instalacion",
		title: "S&P ontwerp eenvoudig te installeren producten",
		subtitle: "Plug & Play",
		titleText: "Twee-draads-aansluiting",
		descriptionText:
			"Bij S&P ontwikkelen we producten met eenvoud in installatie steeds in gedachten. SILENT DUAL heeft het INSTALL FRIENDLY zegel verdiend, wat een garantie voor technische kwaliteit en eenvoudige installatie is.<br/><br/>Deze ventilator wordt snel en eenvoudig gemonteerd, en heeft slechts een twee-draads-aansluiting (fase en 0).",
		imgAlt: "Twee-draads-aansluiting",
		buttonAlt: "download icon",
		button: "Download de installatie-handleiding"
	},
	modelos: {
		id: "modelos",
		title: "Beschikbare modellen",
		cards: [
			{
				title: "Silent Dual 100",
				description: { sizes: "167x157mm", power: "910-2200 RPM" }
			},
			{
				title: "Silent Dual 200",
				description: { sizes: "187x164mm", power: "1010-2280 RPM" }
			},
			{
				title: "Silent Dual 300",
				description: { sizes: "232x195mm", power: "1010-2120 RPM" }
			}
		],
		button: "Download de technische kenmerken"
	},
	contacta: {
		id: "contacta",
		title: "We zijn een team, uw team",
		subtitle: "Professioneel advies",
		text: "We helpen u graag met uw project.",
		loading: "Het laden",
		portalId: "2009592",
		formId: "02f4cad0-1c4f-4f06-b74d-c2096fcf33f1"
	},
	footer: "© 2020 S&P Sistemas de Ventilación S.L.U."
};

export default data;
