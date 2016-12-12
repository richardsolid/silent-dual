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
                            id: 'line',
                            type: 'image',
                            rect: ['242px', '222px', '2px', '0px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"line.png",'0px','0px','2px','200px', 'no-repeat']
                        },
                        {
                            id: 'lineCopy',
                            type: 'image',
                            rect: ['471px', '125px', '2px', '0px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"line.png",'0px','0px','2px','200px', 'no-repeat']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['-3px', '162px', '0px', '62px', 'auto', 'auto'],
                            fill: ["rgba(153,153,153,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['244px', '65px', '0px', '62px', 'auto', 'auto'],
                            fill: ["rgba(234,44,19,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text01',
                            type: 'text',
                            rect: ['213px', 'auto', 'auto', 'auto', 'auto', '229px'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​250 m³/h</p>",
                            font: ['roboto', [14, "px"], "rgba(51,51,51,1.00)", "500", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text01Copy',
                            type: 'text',
                            rect: ['438px', '0px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">1.000 m³/h</p>",
                            font: ['roboto', [14, "px"], "rgba(51,51,51,1.00)", "500", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text01Copy2',
                            type: 'text',
                            rect: ['342px', '85px', 'auto', 'auto', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">Non-residential Ventilation Units​</p>",
                            font: ['roboto', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'unidades-ex-nores',
                            type: 'text',
                            rect: ['839px', '138px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">See excluded units​</p>",
                            font: ['roboto', [12, "px"], "rgba(50,153,204,1.00)", "400", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'unidades-ex-res',
                            type: 'text',
                            rect: ['0px', '232px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">See excluded units​</p>",
                            font: ['roboto', [12, "px"], "rgba(50,153,204,1.00)", "400", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text01Copy3',
                            type: 'text',
                            rect: ['194px', '181px', 'auto', 'auto', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">Residential Ventilation Units​</p>",
                            font: ['roboto', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'unidades-res',
                            symbolName: 'unidades-ex',
                            type: 'rect',
                            rect: ['42px', '94px', '92', '124', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'unidades-nores',
                            symbolName: 'unidades-noex',
                            type: 'rect',
                            rect: ['777', '10', '122', '116', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'ExcludedRes',
                            type: 'rect',
                            rect: ['0px', '232px', '144px', '16px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'ExcludedNoRes',
                            type: 'rect',
                            rect: ['798px', '138px', '144px', '16px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '940px', '248px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 10500,
                    autoPlay: true,
                    data: [
                        [
                            "eid14",
                            "opacity",
                            2540,
                            210,
                            "easeInOutQuad",
                            "${Text01Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "top",
                            2250,
                            290,
                            "easeInOutQuad",
                            "${lineCopy}",
                            '125px',
                            '19px'
                        ],
                        [
                            "eid11",
                            "height",
                            2250,
                            290,
                            "easeInOutQuad",
                            "${lineCopy}",
                            '0px',
                            '108px'
                        ],
                        [
                            "eid6",
                            "top",
                            1540,
                            500,
                            "easeInOutQuad",
                            "${line}",
                            '222px',
                            '22px'
                        ],
                        [
                            "eid5",
                            "height",
                            1540,
                            500,
                            "easeInOutQuad",
                            "${line}",
                            '0px',
                            '200px'
                        ],
                        [
                            "eid2",
                            "width",
                            1040,
                            500,
                            "easeInOutQuad",
                            "${Rectangle}",
                            '0px',
                            '460px'
                        ],
                        [
                            "eid128",
                            "opacity",
                            3000,
                            500,
                            "easeInOutQuad",
                            "${unidades-nores}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            2040,
                            210,
                            "easeInOutQuad",
                            "${Text01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            1040,
                            500,
                            "easeInOutQuad",
                            "${unidades-res}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "opacity",
                            2750,
                            250,
                            "easeInOutQuad",
                            "${unidades-ex-res}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "opacity",
                            2750,
                            250,
                            "easeInOutQuad",
                            "${unidades-ex-nores}",
                            '0',
                            '1'
                        ],
                        [
                            "eid133",
                            "opacity",
                            2040,
                            500,
                            "easeInOutQuad",
                            "${Text01Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid134",
                            "opacity",
                            1040,
                            500,
                            "easeInOutQuad",
                            "${Text01Copy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid8",
                            "width",
                            2040,
                            500,
                            "easeInOutQuad",
                            "${Rectangle2}",
                            '0px',
                            '700px'
                        ],
                            [ "eid49", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${unidades-res}', [] ] ],
                            [ "eid129", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${unidades-nores}', [] ] ],
                            [ "eid50", "trigger", 1040, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${unidades-res}', [0] ] ],
                            [ "eid130", "trigger", 3000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${unidades-nores}', [0] ] ]
                    ]
                }
            },
            "unidades-ex": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'v-res-01',
                            opacity: '1',
                            rect: ['0px', '10px', '125px', '125px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/v-res-01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'v-res-02',
                            opacity: '0',
                            rect: ['0px', '10px', '125px', '125px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/v-res-02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'v-res-03',
                            opacity: '0',
                            rect: ['0px', '25px', '125px', '125px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/v-res-03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'v-res-04',
                            opacity: '0',
                            rect: ['0px', '10px', '125px', '125px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/v-res-04.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'v-res-05',
                            opacity: '0',
                            rect: ['0px', '10px', '125px', '125px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/v-res-01.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '125px', '125px']
                        }
                    }
                },
                timeline: {
                    duration: 7500,
                    autoPlay: true,
                    data: [
                        [
                            "eid35",
                            "opacity",
                            5000,
                            500,
                            "easeInOutQuad",
                            "${v-res-04}",
                            '0',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            7000,
                            500,
                            "easeInOutQuad",
                            "${v-res-04}",
                            '1',
                            '0'
                        ],
                        [
                            "eid37",
                            "opacity",
                            7000,
                            500,
                            "easeInOutQuad",
                            "${v-res-05}",
                            '0',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            3000,
                            500,
                            "easeInOutQuad",
                            "${v-res-03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "opacity",
                            5000,
                            500,
                            "easeInOutQuad",
                            "${v-res-03}",
                            '1',
                            '0'
                        ],
                        [
                            "eid28",
                            "opacity",
                            1000,
                            500,
                            "easeInOutQuad",
                            "${v-res-01}",
                            '1',
                            '0'
                        ],
                        [
                            "eid32",
                            "opacity",
                            1000,
                            500,
                            "easeInOutQuad",
                            "${v-res-02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid30",
                            "opacity",
                            3000,
                            500,
                            "easeInOutQuad",
                            "${v-res-02}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "unidades-noex": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'v-nores-01',
                            opacity: '1',
                            rect: ['0px', '8px', '125px', '125px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/v-nores-01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'v-nores-02',
                            opacity: '0',
                            rect: ['0px', '1px', '125px', '125px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/v-nores-02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'v-nores-03',
                            opacity: '0',
                            rect: ['0px', '1px', '125px', '125px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/v-nores-03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'v-nores-04',
                            opacity: '0',
                            rect: ['0px', '13px', '125px', '125px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/v-nores-04.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'v-resCopy5',
                            opacity: '0',
                            rect: ['0px', '8px', '125px', '125px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/v-nores-01.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '125px', '125px']
                        }
                    }
                },
                timeline: {
                    duration: 7500,
                    autoPlay: true,
                    data: [
                        [
                            "eid46",
                            "opacity",
                            1000,
                            500,
                            "easeInOutQuad",
                            "${v-nores-02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid47",
                            "opacity",
                            3000,
                            500,
                            "easeInOutQuad",
                            "${v-nores-02}",
                            '1',
                            '0'
                        ],
                        [
                            "eid48",
                            "opacity",
                            1000,
                            500,
                            "easeInOutQuad",
                            "${v-nores-01}",
                            '1',
                            '0'
                        ],
                        [
                            "eid44",
                            "opacity",
                            3000,
                            500,
                            "easeInOutQuad",
                            "${v-nores-03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid45",
                            "opacity",
                            5000,
                            500,
                            "easeInOutQuad",
                            "${v-nores-03}",
                            '1',
                            '0'
                        ],
                        [
                            "eid42",
                            "opacity",
                            5000,
                            500,
                            "easeInOutQuad",
                            "${v-nores-04}",
                            '0',
                            '1'
                        ],
                        [
                            "eid43",
                            "opacity",
                            7000,
                            500,
                            "easeInOutQuad",
                            "${v-nores-04}",
                            '1',
                            '0'
                        ],
                        [
                            "eid41",
                            "opacity",
                            7000,
                            500,
                            "easeInOutQuad",
                            "${v-resCopy5}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("graph01_edgeActions.js");
})("EDGE-1196149138");
