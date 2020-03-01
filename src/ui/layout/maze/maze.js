import * as React from 'react';
import canvas from "../canvas/canvas";
import toolbox from "../toolbox/toolbox";
import {mediator} from "../mediator/mediator";

export default function maze() {
    return {
        draw: drawMazeJsx
    };

    function drawMazeJsx() {
        const Canvas = canvas().draw();
        const Toolbox = toolbox(mediator).draw();

        return () => (
            <div>
                <Toolbox />
                <br />
                <Canvas />
                <br />
            </div>
        );
    }
}