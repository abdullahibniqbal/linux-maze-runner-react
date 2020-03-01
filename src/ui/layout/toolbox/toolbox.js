import React from 'react';
import Toolbox from "../../react/components/ToolboxComponent";

export default function(mediator) {
    return {
        draw: drawToolboxJsx
    };

    function drawToolboxJsx() {
        return () => (
            <Toolbox mediator={mediator} />
        );
    }
}


