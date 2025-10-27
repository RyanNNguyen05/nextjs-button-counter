"use client";
import { useState } from "react";
type CounterProps = {
    initialCount?: number;
    initialStep?: number;
};
export default function Counter({ initialCount = 0, initialStep = 1}) {
    const [count, setCount] = useState(initialCount);
    const [step, setStep] = useState(initialStep);

    const increment = () => setCount((c) => c + step);
    const decrement = () => setCount((c) => Math.max(0, c - step));
    const reset = () => setCount(initialCount);
    const handleStepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (!isNaN(value) && value >= 1) setStep(value);
    };
    return (
        <div
        style={{
            display: "inline-block",
            border: "1px solid #ccc",
            borderRadius: "10px",
            margin: "1rem",
            width: "200px",
            backgroundColor: "#fafafa"
        }}
        >
            <h2>Counter</h2>
            <div aria-live="polite" style={{ fontSize: "1.5 rem",  margin: "1rem 0"}}>
                {count}
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap:  "0.5rem"}}>
                <button onClick={decrement} disabled={count - step < 0}>
                    -{step}
                    </button>
                    <button onClick={increment}>+{step}</button>
                    <button onClick={reset}>Reset</button>
            </div>
            <div style={{ marginTop: "1rem" }}>
                <label htmlFor="stepInput">Step: </label>
                <input
                id="stepInput"
                type="number"
                min="1"
                value={step}
                onChange={handleStepChange}
                style={{ width: "60px"}}
                />
            </div>
        </div>
    );
}