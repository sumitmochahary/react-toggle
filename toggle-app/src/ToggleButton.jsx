import { useState } from "react"

function ToggleButton(){
    const [isVisible, setIsVisible] = useState(false)

    function toggle(){
        setIsVisible(!isVisible)
    }

    return (
      <div className="card-view">
        <h1>Content</h1>
        <button onClick={toggle}>{isVisible ? 'Hide' : 'Show'} Content</button>
        {isVisible && (<div>
            <p>Content to be shown or hidden</p>
        </div>)}
      </div>
    );
}

export default ToggleButton