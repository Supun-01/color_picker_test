import { useState } from "react"

function ColorPicker() {
    const [color, setColor] = useState("#00eeff")
    const style = {
        backgroundColor: color,
    }

    const displayColor = (event) => {
        console.log(event.target.value)
        setColor(event.target.value)
    }

    return (
        <div className="color-picker-container">
            <h2>Color Picker</h2>
            <div className="display-color">
                <p style={style} >Selected Color:{color}</p>
            </div>
            <label htmlFor="color-selectoer">Select a color: </label>
            <input value={color} type="color" id="color-selectoer" onChange={displayColor} />
        </div>
    )
}

export default ColorPicker