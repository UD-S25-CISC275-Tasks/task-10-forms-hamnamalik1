import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    // State to track the selected option
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

    // Determine if the selected choice is correct
    const isCorrect = selectedChoice === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select
                value={selectedChoice}
                onChange={(e) => { setSelectedChoice(e.target.value); }}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <span> {isCorrect ? "✔️" : "❌"} </span>
        </div>
    );
}
