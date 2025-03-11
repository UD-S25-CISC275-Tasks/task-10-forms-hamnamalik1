import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    // Define a list of colors
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "brown",
    ];

    // State to store the selected color
    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>

            {/* Render radio buttons dynamically */}
            {colors.map((color) => (
                <label key={color} style={{ marginRight: "10px" }}>
                    <input
                        type="radio"
                        name="color"
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => {
                            setSelectedColor(color);
                        }}
                    />
                    {color}
                </label>
            ))}

            {/* Colored box with text */}
            <div
                data-testid="colored-box"
                style={{
                    marginTop: "10px",
                    padding: "20px",
                    backgroundColor: selectedColor,
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                    border: "1px solid black",
                    width: "150px",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
