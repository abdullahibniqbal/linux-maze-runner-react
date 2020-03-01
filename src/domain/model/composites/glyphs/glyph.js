module.exports.Glyph = function Glyph(initialState) {
    this.state = Object.assign({}, initialState);
    this.addChild = addChild;
    this.deleteChild = deleteChild;
    this.update = update;
    this.children = [];

    function addChild(child) {
        this.children.push(child);

        return this;
    }

    function update(glyphDest) {
        this.state = Object.assign(this.state, glyphDest.state);

        return this;
    }

    function deleteChild(parent, childToDelete) {

    }
};