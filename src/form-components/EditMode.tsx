import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    // State for edit mode, name, and student status
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>

            {/* Toggle switch for edit mode */}
            <label>
                <input
                    type="checkbox"
                    checked={isEditMode}
                    onChange={() => setIsEditMode(!isEditMode)}
                />
                Edit Mode
            </label>

            {/* Edit mode form */}
            {
                isEditMode ?
                    <div>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                        />
                        <label>
                            <input
                                type="checkbox"
                                checked={isStudent}
                                onChange={() => setIsStudent(!isStudent)}
                            />
                            Student
                        </label>
                    </div>
                    // Display mode
                :   <p>
                        {name} is {isStudent ? "a student" : "not a student"}.
                    </p>

            }
        </div>
    );
}
