import React from 'react'
import headImg from '../image/headImg.jpg'
import Rock from '../image/rock.png'
import Paper from '../image/Paper.png'
import Scissor from '../image/Scissors.png'
import { useState } from 'react'
const main = () => {
    const [UScore, setUScore] = useState(0)
    const [CScore, setCScore] = useState(0)
    const [msg, setMsg] = useState("WELCOME")
    const handleReset = () => {
        console.log("Button clicked")
        setCScore(0);
        setUScore(0);
        setMsg("Welcome")
    }
    const winPattern = [[0, 2], [1, 0], [2, 1]]
    const lossPattern = [[0, 1], [1, 2], [2, 0]]
    const drawPattern = [[0, 0], [1, 1], [2, 2]]

    const getRandomNum = () => Math.floor(Math.random() * 3)
    const handleGame = (e) => {
        const userChoice = parseInt(e.target.getAttribute("data-id"));
        const compChoice = getRandomNum();
        const match = [userChoice, compChoice]
        console.log("comp choice:", typeof (compChoice))
        console.log("user choice:", typeof (userChoice))
        console.log("match:", match)
        if (winPattern.some(pattern => isEqual(pattern, match))) {
            setMsg("You won,Comp loss")
            setUScore(UScore + 1)
        }
        else if (lossPattern.some(pattern => isEqual(pattern, match))) {
            setMsg("You loss,Comp won")
            setCScore(CScore + 1)
        }
        else if (drawPattern.some(pattern => isEqual(pattern, match))) {
            setMsg("It's a Draw")
        }
    }
    // Helper function to compare arrays
    const isEqual = (arr1, arr2) => arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index]);
    return (

        <main className=''>

            <div className="cont bg-[oklch(0.22 0.01 0)] rounded-2xl md:rounded-l-4xl relative border-2 flex flex-col  items-center w-[95%] md:w-[60vw] h-[70vh] mx-auto my-10">
                <img src={headImg} alt="bg" className='opacity-[0.3] h-[95%] w-[100%] rounded-xl' />
                <div className="center  absolute top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform">
                    <div className='images flex justify-center items-center gap-2 py-5  w-[90vw]'>
                        <button className='hover:cursor-pointer hover:border-4 hover:border-red-800 rounded-full  ' onClick={handleGame} >
                            <img src={Rock} alt="rock" data-id='0' className='rounded-full  w-full h-[15vh] md:h-[20vh] md:w-[10vw] object-cover' />
                        </button>
                        <button className='hover:cursor-pointer hover:border-4 hover:border-fuchsia-500 rounded-full' onClick={handleGame}>
                            <img src={Paper} alt="paper" data-id='1' className='rounded-full  w-full h-[15vh] md:h-[20vh] md:w-[10vw] object-cover' />
                        </button>
                        <button className='hover:cursor-pointer hover:border-4 hover:border-blue-800 rounded-full' onClick={handleGame}>
                            <img src={Scissor} alt="scissor" data-id='2' className='rounded-full w-full h-[15vh] md:h-[20vh] md:w-[10vw] object-cover' />
                        </button>
                    </div>
                    <div className="score-board flex justify-center">
                        <ul className='font-bold py-2 text-xl text-green-500'>
                            <li>USER SCORE : {UScore}</li>
                            <li>COMP SCORE : {CScore}</li>
                        </ul>
                    </div>
                    <div className="msg">
                        <p className='font-semibold text-lg text-yellow-200 flex justify-center'>{msg}</p>
                    </div>
                    
                </div>
            </div>
            <div className="reset-btn relative bottom-12 flex justify-center  hover:cursor-pointer my-2 ">
                        <button className='hover:cursor-pointer hover:border-black hover:border-2 hover:font-bold hover:text-white  hover:bg-blue-400 border px-3 py-2 rounded-xl bg-gray-500 text-white ' onClick={handleReset}>RESET/NEW GAME</button>
                    </div>
        </main>
    )
}

export default main