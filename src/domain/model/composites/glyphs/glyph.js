import { glyphConstants } from "./glyph-constants";

export function glyphs(glyphPainter) {
    return {
        consGlyph: consGlyph
    };

    function consGlyph(typeOfGlyph, initialState) {
        let commonProperties = {
            addChild,
            update,
            deleteChild,
            children: []
        };

        console.log("commonProperties...");

        if(typeOfGlyph == glyphConstants.QUESTION) {
            console.log("QUESTION");

            return {
                ...commonProperties,
                draw: glyphPainter.drawQuestion,
                state: initialState
            }
        }
        else if(typeOfGlyph == glyphConstants.ANSWER) {
            return {
                ...commonProperties,
                draw: glyphPainter.drawAnswer,
                state: initialState
            };
        }
        else if(typeOfGlyph == glyphConstants.COMMENT) {
            return {
                ...commonProperties,
                draw: glyphPainter.drawComment,
                state: initialState
            };
        }

        function addChild(parent, child) {
            parent.children.push(child);

            return parent;
        }

        function update(glyphSrc, glyphDest) {
            let modifiedGlyph = consGlyph();

            modifiedGlyph.state = Object.assign(modifiedGlyph.state, glyphDest.state);
            modifiedGlyph.children = Object.assign(modifiedGlyph.children, glyphSrc.children);

            return modifiedGlyph;
        }

        function deleteChild(parent, childToDelete) {
            const modifiedParent = consGlyph();

            modifiedParent.state = Object.assign(modifiedParent.state, parent.state);
            modifiedParent.children = parent.children.filter(child => child != childToDelete);

            return modifiedParent;
        }
    }
};


