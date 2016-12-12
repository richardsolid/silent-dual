/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'roboto': ''        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'label',
                            type: 'image',
                            rect: ['346px', '21px', '250px', '496px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"label.png",'0px','0px']
                        },
                        {
                            id: 'line01',
                            type: 'image',
                            rect: ['485px', '97px', '253px', '10px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"line01.png",'-265px','0px']
                        },
                        {
                            id: 'line01Copy7',
                            type: 'image',
                            rect: ['512px', '384px', '226px', '10px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"line01.png",'-265px','0px','253px','10px', 'no-repeat']
                        },
                        {
                            id: 'line01Copy8',
                            type: 'image',
                            rect: ['491px', '405px', '43px', '10px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"line01.png",'-194px','0px','253px','10px', 'no-repeat'],
                            transform: [[],['-90']]
                        },
                        {
                            id: 'line01Copy5',
                            type: 'image',
                            rect: ['200px', '86px', '143px', '10px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"line01.png",'-260px','0px','253px','10px', 'no-repeat'],
                            transform: [[],['180']]
                        },
                        {
                            id: 'txt01-left',
                            type: 'text',
                            rect: ['98px', '81px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​FABRICANTE</p>",
                            font: ['roboto', [14, "px"], "rgba(51,51,51,1.00)", "500", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'txt01-right',
                            type: 'text',
                            rect: ['758px', '91px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​MODELO</p>",
                            font: ['roboto', [14, "px"], "rgba(51,51,51,1.00)", "500", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'line01Copy',
                            type: 'image',
                            rect: ['591px', '177px', '149px', '10px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"line01.png",'-255px','0px','253px','10px', 'no-repeat']
                        },
                        {
                            id: 'Group2',
                            type: 'group',
                            rect: ['758px', '167', '123', '55', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'txt02-right',
                                type: 'text',
                                rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​CLASE DE MODELO</p>",
                                font: ['roboto', [14, "px"], "rgba(51,51,51,1.00)", "500", "none", "", "break-word", "nowrap"]
                            },
                            {
                                id: 'txt02-rightCopy',
                                type: 'text',
                                rect: ['0px', '23px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​(Correspondiente a un</p><p style=\"margin: 0px;\">Clima medio)</p>",
                                font: ['roboto', [12, "px"], "rgba(102,102,102,1.00)", "400", "none", "", "break-word", "nowrap"]
                            }]
                        },
                        {
                            id: 'line01Copy6',
                            type: 'image',
                            rect: ['197px', '437px', '167px', '10px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"line01.png",'-279px','0px','253px','10px', 'no-repeat'],
                            transform: [[],['180']]
                        },
                        {
                            id: 'line01Copy3',
                            type: 'image',
                            rect: ['572px', '481px', '168px', '10px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"line01.png",'-255px','0px','253px','10px', 'no-repeat']
                        },
                        {
                            id: 'line01Copy4',
                            type: 'image',
                            rect: ['596px', '568px', '144px', '10px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"line01.png",'-257px','0px','253px','10px', 'no-repeat']
                        },
                        {
                            id: 'txt02-left',
                            type: 'text',
                            rect: ['89px', '419px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​LwA: SONIDO</p><p style=\"margin: 0px;\">​IRRADIADO DE</p><p style=\"margin: 0px;\">​LA CAJA (dB)</p>",
                            align: "right",
                            font: ['roboto', [14, "px"], "rgba(51,51,51,1.00)", "500", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'txt03-right',
                            type: 'text',
                            rect: ['758px', '376px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​CAUDAL MÁXIMO A</p><p style=\"margin: 0px;\">​100Pa</p>",
                            font: ['roboto', [14, "px"], "rgba(51,51,51,1.00)", "500", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Group3',
                            type: 'group',
                            rect: ['758px', '474', '113', '62', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'Group',
                                type: 'group',
                                rect: ['0px', '23px', '103', '39', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'txt02-rightCopy2',
                                    type: 'text',
                                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​Simple flujo</p>",
                                    font: ['roboto', [12, "px"], "rgba(102,102,102,1.00)", "400", "none", "", "break-word", "nowrap"]
                                },
                                {
                                    id: 'txt02-rightCopy3',
                                    type: 'text',
                                    rect: ['0px', '23px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​Doble flujo</p>",
                                    font: ['roboto', [12, "px"], "rgba(102,102,102,1.00)", "400", "none", "", "break-word", "nowrap"]
                                },
                                {
                                    id: 'arrow',
                                    type: 'image',
                                    rect: ['74px', '1px', '12px', '12px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px']
                                },
                                {
                                    id: 'arrowCopy',
                                    type: 'image',
                                    rect: ['74px', '24px', '12px', '12px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px']
                                },
                                {
                                    id: 'arrowCopy2',
                                    type: 'image',
                                    rect: ['91px', '25px', '12px', '12px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                                    transform: [[],['180']]
                                }]
                            },
                            {
                                id: 'txt04-right',
                                type: 'text',
                                rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">TIPO DE SISTEMA</p>",
                                font: ['roboto', [14, "px"], "rgba(51,51,51,1.00)", "500", "none", "", "break-word", "nowrap"]
                            }]
                        },
                        {
                            id: 'txt05-right',
                            type: 'text',
                            rect: ['758px', '554px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">PERIODO DE</p><p style=\"margin: 0px;\">​REFERENCIA</p>",
                            font: ['roboto', [14, "px"], "rgba(51,51,51,1.00)", "500", "none", "", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '940px', '614px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 3065,
                    autoPlay: true,
                    data: [
                        [
                            "eid32",
                            "opacity",
                            1250,
                            500,
                            "easeInOutQuad",
                            "${txt01-right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${Group3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            1250,
                            500,
                            "easeInOutQuad",
                            "${txt01-left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "background-position",
                            1680,
                            500,
                            "easeInOutQuad",
                            "${line01Copy7}",
                            [-265,0],
                            [-27,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid6",
                            "width",
                            500,
                            500,
                            "easeInOutQuad",
                            "${label}",
                            '250px',
                            '309px'
                        ],
                        [
                            "eid5",
                            "height",
                            500,
                            500,
                            "easeInOutQuad",
                            "${label}",
                            '496px',
                            '613px'
                        ],
                        [
                            "eid17",
                            "background-position",
                            1000,
                            500,
                            "easeInOutQuad",
                            "${line01Copy5}",
                            [-260,0],
                            [-111,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid35",
                            "opacity",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${txt05-right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7",
                            "left",
                            500,
                            500,
                            "easeInOutQuad",
                            "${label}",
                            '346px',
                            '316px'
                        ],
                        [
                            "eid18",
                            "background-position",
                            1000,
                            500,
                            "easeInOutQuad",
                            "${line01}",
                            [-265,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid10",
                            "opacity",
                            500,
                            500,
                            "easeInOutQuad",
                            "${label}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "top",
                            500,
                            500,
                            "easeInOutQuad",
                            "${label}",
                            '21px',
                            '1px'
                        ],
                        [
                            "eid34",
                            "opacity",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${txt03-right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${txt02-left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19",
                            "background-position",
                            1750,
                            500,
                            "easeInOutQuad",
                            "${line01Copy6}",
                            [-279,0],
                            [-90,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid41",
                            "background-position",
                            1500,
                            250,
                            "easeInOutQuad",
                            "${line01Copy8}",
                            [-258,0],
                            [-194,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid22",
                            "background-position",
                            1750,
                            500,
                            "easeInOutQuad",
                            "${line01Copy4}",
                            [-257,0],
                            [-111,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid21",
                            "background-position",
                            1750,
                            500,
                            "easeInOutQuad",
                            "${line01Copy3}",
                            [-255,0],
                            [-87,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid20",
                            "background-position",
                            1250,
                            500,
                            "easeInOutQuad",
                            "${line01Copy}",
                            [-255,0],
                            [-106,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid30",
                            "opacity",
                            1500,
                            500,
                            "easeInOutQuad",
                            "${Group2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid45",
                            "top",
                            3065,
                            0,
                            "linear",
                            "${line01Copy7}",
                            '384px',
                            '384px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("graph02_edgeActions.js");
})("EDGE-1265963674");
