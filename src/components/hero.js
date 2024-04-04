import {Link} from 'react-router-dom';
export default function Hero(){
    return (
      <div className="hero h-full pt-16 imag3" style={{ backgroundImage: `url("")`, backgroundPositionY: 0, backgroundPositionX: 0}}>
      
            <Link to="/">
        <div className={"flex flex-col text-[15rem] italic justify-center -mt-20 scroll-pr-3.5 pt-16"}>
            <div className="try text-base-500 font-bold text-center">
                jack harris
            </div>

        </div>
        </Link>
        
      </div>
    )
}