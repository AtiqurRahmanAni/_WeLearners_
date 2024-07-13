import React from 'react'
import "../styles/Quiz.css"



export default function  Quiz() {
    //  const [checked,setChechked]= useState(undefined);
    function  onSelect(){
        console.log("Selected")
    }
    // prev btn handle
    function onPrev(){
        console.log('On onPrev click')
    }
    //next btn handle
    function onNext(){
        console.log('On onNext click')
    }
  return (
    <div className='min-h-screen flex  items-center bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E]'>
      <div className='container'>
          <h1 className='font-semibold text-5xl top-right lg:text-start leading-tight'>
            Quiz 
            </h1>
            {/* display question */}
            <div className='questions'>
                <h2 className='text'>Simple Question</h2>
                <ul>
                    <li>
                        <input type="radio"
                        value={false}
                        name='option'
                        id='q1-option'
                        onChange={onSelect} 
                        />
                        <label className='text' htmlFor='q1-option'>option</label>
                        <div className='check checked'></div>
                    </li>
                </ul>

            </div>
            <div className='grid'>
                <button className='btn prev'onClick={onPrev}>prev</button>
                <button className='btn next' onClick={onNext}>Next</button>

            </div>
    </div>
    </div>
  )
}
