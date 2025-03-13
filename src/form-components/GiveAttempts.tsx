import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    // State for attempts left and requested attempts
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    // Function to decrease attempts by one
    function useAttempt() {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    }

    // Function to increase attempts based on user input
    function gainAttempts() {
        const numAttempts = parseInt(requestedAttempts, 10);
        if (!isNaN(numAttempts) && numAttempts > 0) {
            setAttemptsLeft(attemptsLeft + numAttempts);
        }
        // Clear input after processing
        setRequestedAttempts("");
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <input
                type="number"
                value={requestedAttempts}
                onChange={(e) => { setRequestedAttempts(e.target.value); }}
                placeholder="Enter attempts to gain"
            />
            <button onClick={useAttempt} disabled={attemptsLeft === 0}>
                Use
            </button>
            <button onClick={gainAttempts}>Gain</button>
        </div>
    );
}
