const data = {
  navbar: [
    {
      name: "Description",
      anchor: "#descubrelo",
    },
    {
      name: "Features",
      anchor: "#caracteristicas",
    },
    {
      name: "Components",
      anchor: "#componentes",
    },
    {
      name: "Installation",
      anchor: "#instalacion",
    },
    {
      name: "Models",
      anchor: "#modelos",
    },
    {
      name: "Contact",
      anchor: "#contacta",
    },
  ],
  hero: {
    title1: "SILENT",
    title2: "DUAL",
    subtitle:
      "The most intelligent bathroom fan designed for an easy installation",
    linkText: "Find out",
    link: "#descubrelo",
  },
  descubrelo: {
    id: "componentes",
    title: "Discover its components",
    hotspots: [
      {
        title: "ON-OFF INDICATOR",
        text: "Incorporates a LED indicator to display on-off mode",
        top: 40,
        left: 15,
      },

      {
        title: "GRILLE",
        text:
          "Front grille with aerodynamic design to optimize airflow and improve performance.",
        top: 50,
        left: 35,
      },

      {
        title: "SILENT-BLOCK",
        text:
          "Motor-rotor set mounted on the support with a silent-block to reduce vibrations and sound level.",
        top: 30,
        left: 55,
      },
      {
        title: "PRESENCE DETECTOR",
        text: "Integrated presence detector with a wide detection angle.",
        top: 17,
        left: 67,
      },

      {
        title: "PROTECTED ELECTRONICS",
        text:
          "Bi-material cover guarantees IP45 rating of the electronic board sensors and connection strips.",
        top: 50,
        left: 70,
      },

      {
        title: "BACKDRAFT SHUTTER",
        text:
          "Removable backdraft shutter with airflow guide vanes to improve aerodynamic performance.",
        top: 35,
        left: 90,
      },
    ],
  },
  lead: {
    description:
      "Silent Dual, the new generation of intelligent bathroom extract fans that self-adjust to create the perfect environment.",
  },
  caracteristicas: {
    id: "caracteristicas",
    sectionTitle: "The only option double the intelligent",
    specs: [
      {
        title: " 2 sensors",
        subtitle: "Presence and Humidity",
        description:
          "It operates automatically when it detects movement or rises in humidity levels.",
      },
      {
        title: "2 operating modes",
        subtitle: "Continuous and interminent",
        description:
          "<strong>Continuous operation</strong> when the sensors do not detect movement or changes in humidity levels.<strong><br>Intermitent operation</strong> when one of the sensors is activated.",
      },
      {
        title: "2 air inputs",
        subtitle: "Front and Perimenter",
        description:
          "Aerodynamic features that provide <strong>front</strong> and <strong>perimeter</strong> air inputs.",
      },
    ],
  },
  instalacion: {
    id: "instalacion",
    title: "S&P designs easy to install products",
    subtitle: "Plug & Play",
    titleText: "Two wires connectivity",
    descriptionText:
      "At S&P we design our products with ease of installation in mind, that's why SILENT DUAL has the Install Friendly stamp of guarantee for technical quality and ease of installation. <br/><br/>The bathroom extract fan is placed with an easy installation that is made with a direct connection of only 2 wires (L / N).",
    imgAlt: "Two wires connectivity",
    buttonAlt: "download icon",
    button: "Download installation manual",
  },
  modelos: {
    id: "modelos",
    title: "Available models",
    cards: [
      {
        title: "Silent Dual 100",
        description: { sizes: "167x157mm", power: "910-2200 RPM" },
      },
      {
        title: "Silent Dual 200",
        description: { sizes: "187x164mm", power: "1010-2280 RPM" },
      },
      {
        title: "Silent Dual 300",
        description: { sizes: "232x195mm", power: "1010-2120 RPM" },
      },
    ],
    button: "Download the technical characteristics",
  },
  contacta: {
    id: "contacta",
    title: "We're a team, your team",
    subtitle: "Free professional advice",
    text: "We help you with your project, tell us.",
    loading: "Loading",
    portalId: "2009592",
    formId: "81389ac0-e355-4fca-af9f-11a663c36c02",
  },
  footer: "© 2020 S&P Sistemas de Ventilación S.L.U.",
};

export default data;
