import Hero from '../components/hero.js'
import Footer from '../components/footer.js'
import React from 'react'


export const Portfolio = () => {
    return(
        <div className="fonty">
            <Hero></Hero>
            
            <h1 className="fonty autoJustify pt-8">
                hey! check out some of my projects down below. 
            </h1>

            
            <h1 className="pt-16 pb-2 text-2xl autoJustify flex">Universe Tracer for MA3</h1>
            <h2 className="pt-2 text-m autoJustify flex">Plugin for grandMA3, written in Lua, it traces and selects all fixtures within one given universe. </h2>

            <div className="flex justify-center pt-4">
                <div className="relative w-full max-w-screen-md diff aspect-[16/9]">
                <img alt="Lua" src={require('../img/portPage/port4.jpg')}/>
                </div>
            </div>

            
            <h1 className="pt-16 pb-2 text-2xl autoJustify flex">x86 String Reversal</h1>
            <h2 className="pt-2 text-m autoJustify flex">Takes a particular string and outputs the reverse. Written in x86 assembly, compiled with NASM </h2>

            <div className="flex justify-center pt-4">
                <div className="relative w-full max-w-screen-md diff aspect-[16/9]">
                <img alt="x86 Reversal" src={require('../img/portPage/port7.jpg')}/>
                </div>
            </div>

            
            <h1 className="pt-16 pb-2 text-2xl autoJustify flex">Basic x86 Bootloader</h1>
            <h2 className="pt-2 text-m autoJustify flex">Bootloader prompting user for commands, accepts keyboard input, and prints input to screen. Exits on `exit`.</h2>

            <div className="flex justify-center pt-4">
                <div className="relative w-full max-w-screen-md diff aspect-[16/9]">
                <img alt="Basic Bootloader" src={require('../img/portPage/port8.jpg')}/>
                </div>
            </div>



            <h1 className="pt-16 pb-2 text-2xl autoJustify flex">Blender Robot</h1>
            <h2 className="pt-2 text-m autoJustify flex">AutoCAD, 3D Design</h2>

            <div className="flex justify-center">
                <div className="relative w-full max-w-screen-md diff aspect-[16/9]">
                    <div className="diff-item-1">
                        <img alt="daisy" src={require('../img/portPage/port1a.jpg')} />
                    </div>
                    <div className="diff-item-2">
                        <img
                        alt="daisy"
                        src={require('../img/portPage/port1b.jpg')}/>
                    </div>
                    <div className="diff-resizer"></div>
                </div>
            </div>



            <h1 className="pt-16 pb-2 text-2xl autoJustify flex">RREF/EF Calculator</h1>
            <h2 className="pt-2 text-m autoJustify flex">Calculator built in C++ to perform basic Linear Algebra operations on matrices</h2>
            
            <div className="flex justify-center pt-4">
                <div className="relative w-full max-w-screen-md diff aspect-[16/9]">
                <img alt="rref"src={require('../img/portPage/port2.jpg')}/></div>
            </div>


            <h1 className="pt-16 pb-2 text-2xl autoJustify flex">Assembly RPG</h1>
            <h2 className="pt-2 text-m autoJustify flex">WIP RPG constructed in 6502 assembly language with MADS assembler / Altirra vis</h2>

            <div className="flex justify-center pt-4">
                <div className="relative w-full max-w-screen-md diff aspect-[16/9]">
                <img alt="6502" src={require('../img/portPage/port3.jpg')}/>
                </div>
            </div>



            <h1 className="pt-16 pb-2 text-2xl autoJustify flex">Ollama Local AI Server</h1>
            <h2 className="pt-2 text-m autoJustify flex">An ollama-based AI server that runs locally via Ubuntu (on WSL)</h2>

            <div className="flex justify-center pt-4">
                <div className="relative w-full max-w-screen-md diff aspect-[16/9]">
                <img alt="Lua" src={require('../img/portPage/port5.jpg')}/>
                </div>
            </div>


            <h1 className="pb-2 text-2xl autoJustify flex">Wordle in C++</h1>
            <h2 className="pt-2 text-m autoJustify flex">Exactly as the title describes, the greatest game of all time, in one of the languages of all time.</h2>

            <div className="flex justify-center pt-4">
                <div className="relative w-full max-w-screen-md diff aspect-[16/9]">
                <img alt="Lua" src={require('../img/portPage/port6.jpg')}/>
                </div>
            </div>

            <Footer/>

        </div>
    )
}