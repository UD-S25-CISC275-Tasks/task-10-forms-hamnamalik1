import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    // State to store user's answer input
    const [userAnswer, setUserAnswer] = useState<string>("");

    // Check if the user's answer matches the expected answer (case insensitive)
    const isCorrect =
        userAnswer.trim().toLowerCase() === expectedAnswer.toLowerCase();

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Enter your answer"
            />
            <span> {isCorrect ? "✔️" : "❌"} </span>
        </div>
    );
}
