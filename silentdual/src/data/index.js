const data = {
	navbar: [
		{
			name: "Descúbrelo",
			anchor: "#descubrelo"
		},
		{
			name: "Características",
			anchor: "#caracteristicas"
		},
		{
			name: "Componentes",
			anchor: "#componentes"
		},
		{
			name: "Instalación",
			anchor: "#instalación"
		},
		{
			name: "Modelos",
			anchor: "#modelos"
		},
		{
			name: "Contacta",
			anchor: "#contacta"
		}
	],
	descubrelo: {
		hotspots: [
			{
				title: "Detector de presencia",
				text:
					"Sensor de presencia integrado con un amplio ángulo de detección.",
				top: 12,
				left: 64
			},

			{
				title: "Piloto funcionamiento LED",
				text: "Indicador de funcionamiento integrado.",
				top: 40,
				left: 18
			},

			{
				title: "Rejilla",
				text:
					"Rejilla con diseño aerodinámico para optimizar la entrada del flujo de aire y mejorar prestaciones.",
				top: 50,
				left: 40
			},

			{
				title: "Silentblock",
				text:
					"Conjunto motor-hélice montado en el soporte con un silentblock para reducir vibraciones y nivel sonoro.",
				top: 30,
				left: 55
			},

			{
				title: "Electrónica protegida",
				text:
					"Tapa bimaterial que garantiza un grado IP45 a la placa electrónica, a los sensores y a la ficha de conexiones.",
				top: 50,
				left: 70
			},

			{
				title: "Compuerta antirretorno",
				text:
					"Compuerta antirretorno amovible, con difusor para mejorar las prestaciones aerodinámicas.",
				top: 35,
				left: 90
			}
		]
	},
	lead: {
		description:
			"Silent Dual, la nueva generación de extractores de baño inteligentes que se autoajustan para crear un ambiente óptimo."
	},
	caracteristicas: {
		sectionTitle: "La única opción doblemente inteligente",
		specs: [
			{
				title: "2 sensores",
				subtitle: "Presencia y humedad",
				description:
					"Sensores de presencia y humedad, se activa automáticamente cuando detecta <strong>movimiento</strong> o un cambio en los niveles de <strong>saturación</strong>."
			},
			{
				title: "2 modos de funcionamiento",
				subtitle: "Contínuo e intermitente",
				description:
					"<strong>Funcionamiento contínuo </strong> cuando los sensores no detectan presencia ni cambios de humedad, <strong>funcionamiento intermitente</strong> cuando uno de los sensores se activa."
			},
			{
				title: "2 entradas de aire",
				subtitle: "Frontal y perimetral",
				description:
					"Prestaciones aerodinámicas que le proporcionan la entrada <strong>frontal</strong> y <strong>perimetral</strong> de aire."
			}
		]
	},
	componentes: [],
	instalacion: {
		title: "S&P diseña productos fáciles de instalar",
		subtitle: "Plug & Play",
		titleText: "Conexionado a 2 hilos",
		descriptionText:
			"En S&P apostamos por la innovación en usabilidad, por eso SILENT DUAL cuenta con el sello Install Friendly de garantía de calidad técnica y de facilidad a la hora de realizarse la instalación.<br/><br/>El extractor de baño se coloca con una práctica instalación que se realiza con una conexión directa de tan solo 2 hilos(L / N).",
		imgAlt: "conexionado",
		buttonAlt: "download icon",
		button: "Descargar el manual de instalación"
	},
	modelos: {
		title: "Modelos disponibles",
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
		button: "Descargar las características técnicas"
	},
	contacta: {
		title: "Somos un equipo, tu equipo",
		subtitle: "Asesoramiento profesional gratuito",
		text: "Te ayudamos con tu proyecto, cuéntanos."
	},
	footer: "© 2019 S&P Sistemas de Ventilación S.L.U."
};

export default data;
