import React,{useState,useEffect} from "react";

const Clock = () => {
    const[days,setDays]=useState()
    const[hours,setHours]=useState()
    const[min,setMin]=useState()
    const[seconds,setSeconds]=useState()

    let interVal;

    const countDown = () => {
        const destination = new Date('Nov 20, 2022').getTime();


        interVal = setInterval(() => {
            const now = new Date().getTime();
            const diffrent = destination - now;

            const days = Math.floor(diffrent / (1000 * 60 * 60 * 24));

            const hours = Math.floor(diffrent % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

            const min = Math.floor(diffrent % (1000 * 60 * 60) / (1000 * 60 ));

            const seconds = Math.floor(diffrent % (1000 * 60 ) / (1000) );

            if(destination < 0) clearInterval(interVal.current)
            
            else {
                setDays(days)
                setHours(hours)
                setMin(min)
                setSeconds(seconds)
            }

        })
    }

    useEffect(() => {
        countDown()
    },[])
    return(
        <div className="clock__wrapper d-flex align-items-center gap-6">

            <div className="clock__data d-flex align-items-center ">
                <div className="text-center m-3">
                    <h1 className="text-white fs-8">{days}</h1>
                    <h4 className="text-white fs-6">Days</h4>
                </div>
                <span className="text-white fs-20">:</span>
            </div>

            <div className="clock__data d-flex align-items-center ">
                <div className="text-center m-3">
                    <h1 className="text-white fs-8">{hours}</h1>
                    <h2 className="text-white fs-6">Hours</h2>
                </div>
                <span className="text-white fs-20">:</span>
            </div>

            <div className="clock__data d-flex align-items-center">
                <div className="text-center m-3">
                    <h1 className="text-white fs-8">{min}</h1>
                    <h2 className="text-white fs-6">Minutes</h2>
                </div>
                <span className="text-white fs-80">:</span>
            </div>

            <div className="clock__data d-flex align-items-center ">
                <div className="text-center m-3">
                    <h1 className="text-white fs-8">{seconds}</h1>
                    <h2 className="text-white fs-6">Seconds</h2>
                </div>
            </div>
        </div>
    )
}

export default Clock;