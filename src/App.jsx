import { useState } from 'react'
import React from 'react'



function App() {
  const[weight,setWeight]=useState('')
  const[height,setHeight]=useState('')
  const[showresult, setResult]=useState('')
  const[show, setShow]=useState('')
  const[showelse, setShowelse]=useState('')
  const[category, setCategory]=useState('')

  function sub(e){
    e.preventDefault()
    if ((weight>0) && (height>0)) {
        const totalweightheight=((weight/(height*height)))
        setResult(totalweightheight)
        setShow(true)
        alert(totalweightheight)
        setCategory(indicationcategory(totalweightheight))
    }
    else{
      // alert('input value')
      setShowelse(true)
    }
    console.log({wes:weight,hei:height});
  }

  function indicationcategory (bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi< 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    return 'Obese';
   
  }
   
  
  const cls=(e)=>{
    e.preventDefault()
    setHeight('')
    setWeight('')
    setShow(null)
    setShowelse(false)
  }

  return (
    <>
    
      <div className='flex flex-col items-center gap-7 justify-center overflow-hidden h-[100vh] px-20 bg-gray-700  rounded'>
        <h1 className='text-white  sm:text-xl text-xl w-[80vw] text-center font-bold'>Calculate your Body Mass Index</h1>
        <h1 className=' text-red-700 px-8 rounded text-[17px] font-bold text-center w-[90vw] '>{showelse?`Height value is missing or invalid`:''}</h1>
        <form className='flex flex-col gap-10'>
          <div className='flex flex-col items-center justify-center  gap-2'>
            <label className='self-start font-bold text-white'>WEIGHT(KG):</label>
            <input type="number" placeholder='Enter your weight(kg)'value={weight} onChange={(e)=>{setWeight(e.target.value)}} />
          </div>
          <div className='flex flex-col items-center gap-2'>
            <label className='self-start font-bold text-white'>HEIGHT(meter):</label>
            <input type="number" placeholder='Enter your height(M)' value={height} onChange={(e)=>{setHeight(e.target.value)}} />
          </div>
          <div className='flex gap-7'>
          <button  className='bg-yellow-400 text-yellow-800 font-bold  px-5 rounded' onClick={sub}>Submit</button>
          <button className='bg-red-400 px-4 rounded text-yellow-100 font-bold 'onClick={cls}>Clear</button>
          </div>
         </form>
         
         
      <h1 className='bg-orange-500 px-10 rounded text-center text-white'>{show?`Your Body Mass Index is: ${showresult}`:''}</h1>
      <h1 className='bg-orange-500 px-10 rounded text-center text-white'>{show?`This Is Considered "${category}"`:''}</h1>

        
      </div>

    
    </>
  )
}

export default App
