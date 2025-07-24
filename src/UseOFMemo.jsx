import React from 'react'

function greet ({ name }) {
    console.log("rerender with", name);
  return (
    <div className="counter-child">
        Hello { name }
    </div>
  )
}
function useOFMemo() {
    return (
        <div className="counter-parent">
            <Greet name="Hitesh"/>
            < Greet name="Histesh"/>
            < Greet name="Mitesh"/>
            < Greet name="Ramesh"/>
            < Greet name="Prathamesh"/>
            </div>
        </div>
    )
}

export default useOFMemo