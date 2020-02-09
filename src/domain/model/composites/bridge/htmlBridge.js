exports.consHtmlBridge = function() {
    return {
        drawSetupElems: drawSetupElems,
        drawElemWithComposite: drawElemWithComposite,
        drawEndingElems: drawEndingElems
    };
};

function drawSetupElems() {
    return "<div>";
}

function drawElemWithComposite(renderedElems, composite) {
    return renderedElems + composite();
}

function drawEndingElems(renderedItem) {
    return renderedItem + "</div>";
}
