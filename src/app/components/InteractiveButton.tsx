import { MouseEventHandler } from 'react';

export default function InteractiveButton({text, isActive = true, onClick}: {text: string, isActive: boolean, onClick: MouseEventHandler<HTMLButtonElement>}) {
    return(
        <button
            onClick={onClick}
            className="bg-gradient-to-r from-[#e9a400] to-[#f9d46c] rounded-[40px] md:px-[2vw] md:py-[2vh] px-[4vw] py-[2.5vh] text-black cursor-pointer shadow-[0_6px_12px_rgba(0,0,0,0.25)] transition-transform duration-200 font-instrument-sans font-medium flex items-center justify-center no-underline w-fit z-10 hover:scale-[1.05] active:scale-[0.95]"
            style={{ opacity: isActive ? 1 : 0.5, pointerEvents: isActive ? 'auto' : 'none', color: isActive ? 'black' : 'gray' }}
        >

            <p className="text-black text-xl">{text}</p>
        </button>
    )
}