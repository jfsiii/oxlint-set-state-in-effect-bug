import { useState, useEffect } from "react";

// Should error: setState in effect with no dependency array
export function EffectNoDeps() {
    const [x, setX] = useState(0);
    useEffect(() => {
        setX(1);
    });
    return <div>{x}</div>;
}
