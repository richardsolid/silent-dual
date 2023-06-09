const data = {
  navbar: [
    {
      name: "Описание",
      anchor: "#descubrelo",
    },
    {
      name: "Преимущества",
      anchor: "#caracteristicas",
    },
    {
      name: "Компоненты",
      anchor: "#componentes",
    },
    {
      name: "Установка",
      anchor: "#instalacion",
    },
    {
      name: "Модели",
      anchor: "#modelos",
    },
    {
      name: "Контакты",
      anchor: "#contacta",
    },
  ],
  hero: {
    title1: "SILENT",
    title2: "DUAL",
    subtitle:
      "Самый интеллектуальный вентилятор для ванной комнаты с простой установкой",
    linkText: "Подробнее",
    link: "#descubrelo",
  },
  descubrelo: {
    id: "componentes",
    title: "Основные компоненты",
    hotspots: [
      {
        title: "ИНДИКАТОР РАБОТЫ",
        text: "Встроенный светодиодный индикатор работы для отображения режима вкл./выкл.",
        top: 40,
        left: 15,
      },

      {
        title: "ФРОНТАЛЬНАЯ ПАНЕЛЬ",
        text:
          "Аэродинамический дизайн фронтальной панели для оптимизации воздушного потока и увеличения производительности.",
        top: 50,
        left: 35,
      },

      {
        title: "РЕЗИНОВЫЕ АМОРТИЗАТОРЫ",
        text:
          "Электродвигатель установлен на резиновых амортизаторах для уменьшения вибраций и уровня шума.",
        top: 30,
        left: 55,
      },
      {
        title: "ДАТЧИК ДВИЖЕНИЯ",
        text: "Встроенный датчик движения с широким углом обнаружения.",
        top: 17,
        left: 67,
      },

      {
        title: "ЭЛЕКТРОННАЯ ПЛАТА",
        text:
          "Электронная плата защищена крышкой с уплотнителем, что обеспечивает класс IP45.",
        top: 50,
        left: 70,
      },

      {
        title: "ОБРАТНЫЙ КЛАПАН",
        text:
          "Съемный обратный клапан с направляющим аппаратом для оптимизации аэродинамики на выходе воздуха. ",
        top: 35,
        left: 90,
      },
    ],
  },
  lead: {
    description:
      "Silent Dual, новое поколение интеллектуальных вентиляторов для ванных комнат с полностью автоматической работой для создания оптимальных условий окружающей среды.",
  },
  caracteristicas: {
    id: "caracteristicas",
    sectionTitle: "Один вентилятор - двойной интеллект",
    specs: [
      {
        title: "2 датчика",
        subtitle: "Движения и Влажности",
        description:
          "Вентилятор включается автоматически при обнаружении <strong>движения</strong> или при увеличении уровня относительной <strong>влажности</strong>.",
      },
      {
        title: "2 режима работы",
        subtitle: "Постоянный и периодический",
        description:
          "<strong>Постоянный режим работы</strong> на низкой скорости с пониженным расходом воздуха во время, когда датчики не фиксируют движения или изменения влажности. <strong><br>Периодический режим</strong> работы, когда сработал один из датчиков.",
      },
      {
        title: "Два направления входа воздуха",
        subtitle: "Фронтальное и боковое",
        description:
          "Фронтальный и боковой вход воздуха для лучшей аэродинамики.",
      },
    ],
  },
  instalacion: {
    id: "instalacion",
    title: "S&P разрабатывает простую в установке продукцию",
    subtitle: "Plug & Play",
    titleText: "2-х проводное подключение ",
    descriptionText:
      "В S&P мы разрабатываем наши продукты, постоянно думая о простоте установки, благодаря этому SILENT DUAL имеет отметку Install Friendly, как гарантию технического качества и простоты установки. <br/><br/>Вытяжной вентилятор для ванных комнат прост в установке и требует лишь прямого подключения всего по двум проводам (фаза L и нейтраль N).",
    imgAlt: "2-х проводное подключение ",
    buttonAlt: "download icon",
    button: "Скачать инструкцию",
  },
  modelos: {
    id: "modelos",
    title: "Модельный ряд",
    cards: [
      {
        title: "Silent Dual 100",
        description: { sizes: "167x157мм", power: "910-2200 об/мин" },
      },
      {
        title: "Silent Dual 200",
        description: { sizes: "187x164мм", power: "1010-2280 об/мин" },
      },
      {
        title: "Silent Dual 300",
        description: { sizes: "232x195мм", power: "1010-2120 об/мин" },
      },
    ],
    button: "Скачать технические характеристики",
  },
  contacta: {
    id: "contacta",
    title: "Мы команда, ваша команда",
    subtitle: "Бесплатный проффесиональный совет",
    text: "Мы поможем вам с вашим проектом, напишите нам.",
    loading: "Loading",
    portalId: "2009592",
    formId: "e5662818-d262-4917-a2d3-c0dc333e6764",
  },
  footer: "© 2020 S&P Sistemas de Ventilación S.L.U.",
};

export default data;
