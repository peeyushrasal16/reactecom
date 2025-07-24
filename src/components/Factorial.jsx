import React from 'react'

function Factorial() {
  return (
    <div>
        <div className="counter-parent">
            <div className="counter-child">
                {result}
            </div>
            <div className="counter-child">
                <input type="number" onChange={()=> {

                }}>
            </div>
        </div>
    </div>
  )
}

export default Factorial