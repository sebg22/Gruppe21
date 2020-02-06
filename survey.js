
var json = {
    title: "Spørgeskema",
    showProgressBar: "bottom",
    firstPageIsStarted: true,
    startSurveyText: "Start spørgeskema",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "Spørgeskema"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "første spørgsmål",
                    title: "blablabla",
                    choices: [
                        "bla1", "bla2", "bla3", "bla4", "bla5"
                    ],
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "andet spørgsmål",
                    title: "blablabla",
                    choices: [
                        "bla1", "bla2", "bla3", "bla4", "bla5"
                    ],
                }
            ]
        }, {
            
            questions: [
                {
                    type: "radiogroup",
                    name: "tredje spørgsmål",
                    title: "blablabla",
                    choices: [
                        "bla1", "bla2", "bla3", "bla4", "bla5"
                    ],
                }
            ]
        }
    ],
    completedHtml: "<h4>DOnEEee</h4>"
};

window.survey = new Survey.Model(json);

;

$("#surveyElement").Survey({model: survey});