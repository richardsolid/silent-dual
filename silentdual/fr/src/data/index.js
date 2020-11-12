const data = {
  navbar: [
    {
      name: "Description",
      anchor: "#descubrelo",
    },
    {
      name: "Caractéristiques",
      anchor: "#caracteristicas",
    },
    {
      name: "Composants",
      anchor: "#componentes",
    },
    {
      name: "Installation",
      anchor: "#instalacion",
    },
    {
      name: "Modèles",
      anchor: "#modelos",
    },
    {
      name: "Contacts",
      anchor: "#contacta",
    },
  ],
  hero: {
    title1: "SILENT",
    title2: "DUAL",
    subtitle:
      "La gamme d'aérateurs de salle de bains intelligents et très faciles à installer",
    linkText: "Découvrez le",
    link: "#descubrelo",
  },
  descubrelo: {
    id: "componentes",
    title: "Découvrez ses composants",
    hotspots: [
      {
        title: "Temoin lumineux",
        text: "LED de fonctionnement intégrée.",
        top: 40,
        left: 15,
      },

      {
        title: "Face avant",
        text:
          "Grille de conception aérodynamique pour optimiser l'entrée d'air et améliorer les prestations.",
        top: 50,
        left: 35,
      },

      {
        title: "Antivibratile",
        text:
          "Ensemble moteur-hélice monté avec un support antivibratile pour réduire les vibrations et le niveau sonore.",
        top: 30,
        left: 55,
      },
      {
        title: "Detecteur de presence",
        text: "Détecteur de mouvements infrarouge à large angle de détection.",
        top: 17,
        left: 67,
      },

      {
        title: "Electronique protegee",
        text:
          "Couvercle avec joint incorporé garantissant un degré de protecton IP45 pour le circuit imprimé, les sondes et le bornier de raccordement.",
        top: 50,
        left: 70,
      },

      {
        title: "Clapet antiretour",
        text:
          "Clapet antiretour amovible et au profil aérodynamique pour améliorer les prestations aérauliques.",
        top: 35,
        left: 90,
      },
    ],
  },
  lead: {
    description:
      "SILENT DUAL, la nouvelle génération d'aérateurs intelligents qui s'auto-adaptent à leur environnement.",
  },
  caracteristicas: {
    id: "caracteristicas",
    sectionTitle: "La seule solution doublement intelligente",
    specs: [
      {
        title: "2 sondes",
        subtitle: "Détection de présence et d'humidité",
        description:
          "Elles s'activent automatiquement quand elles détectent un <strong>mouvement</strong> ou un changement du niveau d'<strong>humidité</strong>.",
      },
      {
        title: "2 modes de fonctionnement",
        subtitle: "Continu et intermittent",
        description:
          "<strong>Fonctionnement continu</strong> pour assurer un débit d'extraction permanent à faible vitesse quand aucune détection n'est activée. <strong><br>Fonctionnement intermittent</strong> pour extraire l'air vicié uniquement quand une des sondes est activée.",
      },
      {
        title: "2 entrées d'air",
        subtitle: "Frontale et périphérique",
        description:
          "Prestations aérauliques optimisées grace à l’entrée d’air <strong>frontale</strong> et <strong>périphérique</strong>.",
      },
    ],
  },
  instalacion: {
    id: "instalacion",
    title: "S&P conçoit des produits faciles à installer",
    subtitle: "Plug & Play",
    titleText: "Raccordement en 2 fils",
    descriptionText:
      "Pour S&P, l'innovation passe par la technique et le service, c'est pourquoi SILENT DUAL apporte une garantie de qualité technique tout en s'incrivant dans le concept 'Install Friendly' relatif à la facilité d'installation.  <br/><br/>L'aérateur s'installe très facilement avec un simple raccordement en 2 fils (phase et neutre).",
    imgAlt: "Raccordement en 2 fils",
    buttonAlt: "download icon",
    button: "Télécharger la notice de montage",
  },
  modelos: {
    id: "modelos",
    title: "Modèles disponibles",
    cards: [
      {
        title: "Silent Dual 100",
        description: { sizes: "167x157mm", power: "910-2200 tr/min." },
      },
      {
        title: "Silent Dual 200",
        description: { sizes: "187x164mm", power: "1010-2280 tr/min." },
      },
      {
        title: "Silent Dual 300",
        description: { sizes: "232x195mm", power: "1010-2120 tr/min." },
      },
    ],
    button: "Télécharger les caractéristiques techniques",
  },
  contacta: {
    id: "contacta",
    title: "Nous sommes une équipe, votre équipe",
    subtitle: "Assistance technique professionnelle gratuite",
    text: "Nous vous aidons dans vos projets, contactez-nous.",
    loading: "Loading",
    portalId: "2009592",
    formId: "1926f247-ec2b-4f92-a0aa-f8eb6bac4c9c",
  },
  footer: "© 2020 S&P Sistemas de Ventilación S.L.U.",
};

export default data;
