import React from "react";

function test() {
    document.getElementById("test").innerHTML = "Event Handling";
}

function Event() {
    const style = {
        fontSize: "40px",
    };
    return (
        <div>
            <button onClick={test}>Click Me</button>
            <p style={style} id="test"></p>
        </div>
    );
}

export default Event;
