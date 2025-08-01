import { MouseEventHandler } from 'react';

export default function InteractiveButton({text, isActive = true, onClick}: {text: string, isActive: boolean, onClick: MouseEventHandler<HTMLButtonElement>}) {
    return(
        <button
            onClick={onClick}
            className="bg-gradient-to-r from-[#e9a400] to-[#f9d46c] rounded-[40px] px-[2vw] py-[2vh] text-black cursor-pointer shadow-[0_6px_12px_rgba(0,0,0,0.25)] transition-transform duration-200 font-instrument-sans flex items-center justify-center no-underline w-fit z-10 hover:scale-[1.05] active:scale-[0.95]"
            style={{ opacity: isActive ? 1 : 0.5, pointerEvents: isActive ? 'auto' : 'none', color: isActive ? 'black' : 'gray' }}
        >

            <p className="text-black text-base">{text}</p>
        </button>
    )
}