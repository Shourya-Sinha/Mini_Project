import React, { useMemo, useState } from 'react'

const Default_Weight = 50;
const Default_Height = 150;

const BmiCheck = () => {
    const [height,setHeight] = useState(Default_Height);
    const [weight, setWeight] = useState(Default_Weight);

    function onHeightChange(e){
        const inputHeight = e.target.value;
        setHeight(inputHeight);
    }

    function onWeightChange(e){
        const inputWeight = e.target.value;
        setWeight(inputWeight);
    }

    const output = useMemo(() => {
        const heightInMeters = height * 0.3048; // Convert height from feet to meters
        return (weight / (heightInMeters * heightInMeters)).toFixed(1);
    }, [weight, height]);

  return (
    <>
        <div>BmiCheck</div>
        <div className='input-section'>
          <p>Weight: {weight} Kg</p>
          <input onChange={onWeightChange} type='number' />
          <p>Height : {height}</p>
          <input onChange={onHeightChange} type='number' />
        </div>
        <div>
            <p>Your Bmi is</p>
            <p>{output}</p>
        </div>
    </>
  )
}

export default BmiCheck;