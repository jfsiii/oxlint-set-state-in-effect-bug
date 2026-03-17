import { useState, useEffect } from "react";

// setState with just a comment before it
export function EffectWithDepsComment({ value }: { value: number }) {
    const [x, setX] = useState(0);
    useEffect(() => {
        // sync prop to state
        setX(value);
    }, [value]);
    return <div>{x}</div>;
}
