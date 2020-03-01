import { Glyph } from "./glyph";
import { glyphConstants } from "./glyph-constants";

export function createGlyphsFactory(glyphPainter) {
    return { createInstance: createInstance };

    function createInstance(typeOfGlyph, initialState) {
        const glyph = new Glyph(initialState);

        if(typeOfGlyph == glyphConstants.QUESTION) {
            glyph.discriminator = glyphConstants.QUESTION;
            glyph.draw = () => glyphPainter.drawQuestion(glyph.state);
        }
        else if(typeOfGlyph == glyphConstants.ANSWER) {
            glyph.discriminator = glyphConstants.ANSWER;
            glyph.draw = () => glyphPainter.drawAnswer(glyph.state);
        }
        else if(typeOfGlyph == glyphConstants.COMMENT) {
            glyph.discriminator = glyphConstants.COMMENT;
            glyph.draw = () => glyphPainter.drawComment(glyph.state);
        }
        return glyph;
    };
};


