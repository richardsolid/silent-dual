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
                            rect: ['62px', '222px', '2px', '0px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"line.png",'0px','0px','2px','200px', 'no-repeat']
                        },
                        {
                            id: 'lineCopy',
                            type: 'image',
                            rect: ['251px', '125px', '2px', '0px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"line.png",'0px','0px','2px','200px', 'no-repeat']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['-3px', '162px', '257px', '62px', 'auto', 'auto'],
                            fill: ["rgba(153,153,153,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['64px', '65px', '307px', '62px', 'auto', 'auto'],
                            fill: ["rgba(234,44,19,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text01',
                            type: 'text',
                            rect: ['33px', 'auto', 'auto', 'auto', 'auto', '229px'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​250 m³/h</p>",
                            font: ['roboto', [14, "px"], "rgba(51,51,51,1.00)", "500", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text01Copy',
                            type: 'text',
                            rect: ['218px', '0px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">1.000 m³/h</p>",
                            font: ['roboto', [14, "px"], "rgba(51,51,51,1.00)", "500", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text01Copy2',
                            type: 'text',
                            rect: ['92px', '85px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">Unidades de ventilación no residenciales</p>",
                            font: ['roboto', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'unidades-ex-nores',
                            type: 'text',
                            rect: ['225px', '129px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">Ver las unidades excluidas</p>",
                            font: ['roboto', [12, "px"], "rgba(50,153,204,1.00)", "400", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'unidades-ex-res',
                            type: 'text',
                            rect: ['2px', '228px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">Ver las unidades excluidas</p>",
                            font: ['roboto', [12, "px"], "rgba(50,153,204,1.00)", "400", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text01Copy3',
                            type: 'text',
                            rect: ['54px', '174px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">Unidades de ventilación</p><p style=\"margin: 0px;\">​residenciales</p>",
                            align: "center",
                            font: ['roboto', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'ExcludedRes-mobile',
                            type: 'rect',
                            rect: ['0px', '224px', '153px', '24px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'ExcludedNoRes-mobile',
                            type: 'rect',
                            rect: ['218px', '127px', '150px', '24px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '370px', '248px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
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
                            "eid8",
                            "width",
                            2040,
                            500,
                            "easeInOutQuad",
                            "${Rectangle2}",
                            '0px',
                            '307px'
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
                            "eid2",
                            "width",
                            1040,
                            500,
                            "easeInOutQuad",
                            "${Rectangle}",
                            '0px',
                            '257px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("graph01_edgeActions.js");
})("EDGE-1196149138-mobile");
