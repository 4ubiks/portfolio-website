export default function Hero(){
    return (
      <div className="hero h-full py-32 imag3" style={{ backgroundImage: `url("")`, backgroundPositionY: 0, backgroundPositionX: 0}}>

        <div className={"flex flex-col text-[15rem] italic tracking-tighter items-center justify-center -ml-10 -mt-20 py-5 scroll-pr-3.5"}>
            <div className="try text-base-500 font-bold text-center z-10">
                jack harris
            </div>

            <div className={"ml-6 -mt-14 text-gray-100 stroke-gray-900"}>
                <svg width="1000" height={"250"} xmlns="http://www.w3.org/2000/svg">
                    <text x={"-5"} y="179" fill="none" strokeWidth="5" fontWeight="800">
                        lighting
                    </text>
                </svg>
            </div>

        </div>
      </div>
    )
}