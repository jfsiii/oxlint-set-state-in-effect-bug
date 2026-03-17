import { useState, useEffect } from "react";

// setState in if/else branches inside effect with deps
export function EffectWithDepsConditional({ value }: { value: number }) {
    const [x, setX] = useState(0);
    useEffect(() => {
        if (value > 0) {
            setX(value);
        } else {
            setX(0);
        }
    }, [value]);
    return <div>{x}</div>;
}
