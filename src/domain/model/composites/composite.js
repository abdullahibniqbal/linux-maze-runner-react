exports.consCompositeFactory = function(dependencies) {
    let bridge = dependencies();

    return function consComposite(drawable, composites) {
        return function() {
            const initialRenderedElems = bridge.drawSetupElems();

            const elemsRenderedTillCurrent = bridge.drawElemWithComposite(initialRenderedElems, drawable);

            const elemsRenderedTillChildren = composites == null? elemsRenderedTillCurrent:
                composites.reduce(
                    (accumulator, composite) => bridge.drawElemWithComposite(accumulator, composite),
                    elemsRenderedTillCurrent);

            return bridge.drawEndingElems(elemsRenderedTillChildren);
        }
    };
};




