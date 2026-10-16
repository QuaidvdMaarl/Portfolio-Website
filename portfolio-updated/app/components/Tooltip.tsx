import { useState } from "react";

export function tooltip() {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);
    const [text, setText] = useState("");

    const HandleMouseMovement = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        setVisible(true);
        setCoords({
        x: event.clientX,
        y: event.clientY,
        });
        setText(event.currentTarget.alt);
    };

    const HandleMouseLeave = () => {
        setVisible(false);
        setText("");
    };
    return { coords, visible, text, HandleMouseMovement, HandleMouseLeave };
};

