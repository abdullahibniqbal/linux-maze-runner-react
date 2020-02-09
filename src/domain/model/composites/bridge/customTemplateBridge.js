exports.consCustomTemplateBridge = function() {
    return {
        drawSetupElems: drawSetupElems,
        drawElemWithComposite: drawElemWithComposite,
        drawEndingElems: drawEndingElems
    };
};

function drawSetupElems() {
    return "Setup ---";
}

function drawElemWithComposite(elem, composite) {
    return elem + "Combining these two elements now... " + composite();
}

function drawEndingElems(renderedItem) {
    return renderedItem + "--- Teardown...";
}
