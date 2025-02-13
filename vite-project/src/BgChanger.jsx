import { useState } from "react";

function Bgchanger(){
    let [Color , setColor] = useState("olive");
    return(
<>
<section className="text-center bg-primary text-light p-3 my-4">
            <div className="container">
                <div className="row">
                    <div className="col-12">
            <h1>BG-Changer</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-changer-wrapper vh-100" style={{backgroundColor:Color}}>  
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="bg-changer-cta-wapper d-flex justify-content-center position-relative vh-100">
                            <div className="bg-changer-cta position-absolute bottom-0 mb-4  d-inline-flex justify-content-center p-2 rounded bg-light" style={{boxShadow:"5px 2px 10px 3px burlywood"}}>
                            <button className="p-2 bg-secondary text-light rounded border-0 m-1" onClick={()=>{setColor("#DDA0DD")}}>Plum</button>
                            <button className="p-2 bg-secondary text-light rounded border-0 m-1" onClick={()=>{setColor("#BA55D3")}}>MediumOrchid</button>
                            <button className="p-2 bg-secondary text-light rounded border-0 m-1" onClick={()=>{setColor("#663399")}}>RebeccaPurple</button>
                            <button className="p-2 bg-secondary text-light rounded border-0 m-1" onClick={()=>{setColor("#8B008B")}}>DarkMagenta</button>
                            <button className="p-2 bg-secondary text-light rounded border-0 m-1" onClick={()=>{setColor("#6A5ACD")}}>SlateBlue</button>
                            <button className="p-2 bg-secondary text-light rounded border-0 m-1" onClick={()=>{setColor("white")}}>Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
        
}
export default Bgchanger