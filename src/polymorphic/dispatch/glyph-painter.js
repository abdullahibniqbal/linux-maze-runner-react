exports.drawGlyph = function(drawGlyphImpl) {
    return {
        drawQuestion: drawGlyphImpl.drawQuestion,
        drawAnswer: drawGlyphImpl.drawAnswer,
        drawComment: drawGlyphImpl.drawComment
    };
};
