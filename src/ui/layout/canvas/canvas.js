import * as React from 'react';
import {createGlyphsFactory} from "../../../domain/model/composites/glyphs/glyphs-factory";
import {widgetJsx} from "../../widgets/widget-jsx";
import {glyphConstants} from "../../../domain/model/composites/glyphs/glyph-constants";

export default function canvas() {
    return {
        draw: drawCanvasJsx
    };

    function drawCanvasJsx() {
        const glyphsFactory = createGlyphsFactory(widgetJsx);

        let questionGlyph = glyphsFactory.createInstance(glyphConstants.QUESTION, {
            text: "How to install MySQL in CentOS 7?",
            isClosed: true,
            author: "Mustehssun Iqbal"
        });

        questionGlyph = questionGlyph.addChild(glyphsFactory.createInstance(glyphConstants.ANSWER, {
            text: "Install it using Yum.",
            isClosed: false,
            author: "Yum Guru"
        }));

        questionGlyph = questionGlyph.addChild(glyphsFactory.createInstance(glyphConstants.ANSWER, {
            text: "Install it using RPM",
            isClosed: false,
            author: "RPM Guru"
        }));

        questionGlyph.children[0] = questionGlyph.children[0].addChild(glyphsFactory.createInstance(glyphConstants.COMMENT, {
            text: "This works!",
            author: "Commenter"
        }));

        console.log("questionGlyph", questionGlyph);
        console.log("yumAnswerGlyph", questionGlyph.children[0]);
        console.log("rpmAnswerGlyph", questionGlyph.children[1]);
        console.log("comment", questionGlyph.children[0].children[0]);

        const QuestionWidget = questionGlyph.draw();
        const YumAnswerWidget = questionGlyph.children[0].draw();
        const RPMAnswerWidget = questionGlyph.children[1].draw();
        const CommentWidget = questionGlyph.children[0].children[0].draw();

        return () => (
            <div>
                <QuestionWidget />
                <br />
                <YumAnswerWidget />
                <br />
                <RPMAnswerWidget />
                <br />
                <CommentWidget />
                <br />
            </div>
        );
    }
};
