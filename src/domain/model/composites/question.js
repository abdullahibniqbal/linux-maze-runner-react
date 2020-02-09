const { consCompositeFactory } = require("./composite");
const { consHtmlBridge } = require("./bridge/htmlBridge");
const { consCustomTemplateBridge } = require("./bridge/customTemplateBridge");

const consComposite = consCompositeFactory(consHtmlBridge);
// const consComposite = consCompositeFactory(consCustomTemplateBridge);

const drawQuestionComposite = consComposite(
    drawQuestion("How to install MySQL in CentOS7?", "I have tried this and that, etc."),
    [consComposite(
        drawAnswer("Install it using Yum."),
        [consComposite(
            drawComment("This works!")
        ),
        consComposite(
            drawComment("This does not work but could be a problem in my machine!")
        )]
    )]
);

function drawQuestion(title, description) {
    return function() {
       return `
            <h2>Question: ${title}</h2>
            <p>Description: ${description}</p>   
        `;
    }
}

function drawAnswer(description) {
    return function() {
        return `
            <p>Answer: ${description}</p>
        `;
    }
}

function drawComment(description) {
    return function() {
        return `
            <p>Comment: ${description}</p>
        `;
    }
}

const renderedHtml = drawQuestionComposite();

console.log(renderedHtml);

exports.renderedHtml = renderedHtml;
