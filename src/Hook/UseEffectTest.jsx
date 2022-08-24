import React, {useState, useEffect} from "react";

function UseEffectTest(){
    const [count, setCount] = useState(0);
    const countUp = () => setCount(count + 1);
    const [name, setName] = useState("Ju");
    const handleChangeName = (e) => setName(e.target.value);

    useEffect(() =>{
        console.log("useEffect!!", count);
        return () =>{
            console.log("cleanup!!", count);
        }
    }, [count]);

    return(
        <div>
            <p> Hello, I am {name}.</p>
            <input onChange = {handleChangeName} />
            <p> {count} 번 클릭!</p>
            <button onClick = {countUp}>Click Me </button>
        </div>
    );
}

export default UseEffectTest;