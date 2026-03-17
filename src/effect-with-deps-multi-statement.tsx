import { useState, useEffect } from "react";

// Extra statement before setState in effect with deps
export function EffectWithDepsMultiStatement({ value }: { value: number }) {
    const [x, setX] = useState(0);
    useEffect(() => {
        const doubled = value * 2;
        setX(doubled);
    }, [value]);
    return <div>{x}</div>;
}
