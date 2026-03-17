import { useState } from "react";

// Should error: setState called during render
export default function SetStateInRender({ value }: { value: number }) {
    const [count, setCount] = useState(0);
    setCount(value);
    return <div>{count}</div>;
}
