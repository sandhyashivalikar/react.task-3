import React from 'react';
import './ColorPicker.css';

function ColorPicker({ colors, onColorSelect }) {
    const selectColor = (color) => {
        onColorSelect(color);
    };

    return (
        <div className="color-picker app_colorpicker_container">
            <ul className="color-picker__list">
                {colors.map((color, index) => (
                    <li
                        key={index}
                        className="color-picker__item"
                        style={{ backgroundColor: color }}
                        onClick={() => selectColor(color)}
                    />
                ))}
            </ul>
            <input type="hidden" value="21B0E10049"/>
            <input type="hidden" value="https://github.com/sandhyashivalikar - follow me on github" />
            <button className="color-picker__button">
                Pick a color
            </button>
        </div>
    );
}

export default ColorPicker;
