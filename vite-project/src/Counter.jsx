import { useState } from "react"

function Counter (){
    let [CounterIncreace,setCounterIncreace] = useState(0) 
    function addValue(){
        console.log(CounterIncreace)
        setCounterIncreace(CounterIncreace + 1);
    }
    function removeValue(){
        console.log(CounterIncreace)
        setCounterIncreace(CounterIncreace - 1);
    }
    return (
        <>
        <section className="counter">
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="numbers-wrapper d-flex justify-content-between">
                        <h1>{CounterIncreace}</h1>
                        <h1>{CounterIncreace}</h1>
                    </div>
                    <div className="btns-wrapper gap-4 d-flex justify-content-between">
                        <button className="btn-primary increase p-4" onClick={addValue}>Increase Number</button>
                        <button className="btn-secondary decrease p-4" onClick={removeValue}>Decrease Number</button>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Counter