import { useState, useEffect } from "react";

// setState in if (no else) inside effect with deps
export function EffectWithDepsIfOnly({ value }: { value: number }) {
    const [x, setX] = useState(0);
    useEffect(() => {
        if (value > 0) {
            setX(value);
        }
    }, [value]);
    return <div>{x}</div>;
}
