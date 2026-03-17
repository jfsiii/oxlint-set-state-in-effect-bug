import { useState, useEffect } from "react";

// setState directly in effect with deps — does NOT fire
export function EffectWithDepsSimple({ value }: { value: number }) {
    const [x, setX] = useState(0);
    useEffect(() => {
        setX(value);
    }, [value]);
    return <div>{x}</div>;
}
