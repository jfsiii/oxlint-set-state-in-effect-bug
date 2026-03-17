import { useState, useEffect } from "react";

// Should error: setState in effect with empty dependency array
export function EffectEmptyDeps() {
    const [x, setX] = useState(0);
    useEffect(() => {
        setX(1);
    }, []);
    return <div>{x}</div>;
}
