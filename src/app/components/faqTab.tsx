"use client"
import {useState} from "react";

export default function FaqTab({ question, answer }: { question: string; answer: string }) {
    const [active, setActive] = useState(false);

    function toggleTab() {
        setActive((prev) => !prev);
    }

    return (
        <div className="pb-[2vh] cursor-pointer" onClick={toggleTab}>
            <div className="font-[instrument sans] bg-white rounded-[12px] shadow-[4px_4px_8px_rgba(0,0,0,0.75)]">
                <div className={` flex justify-between py-[2vh] px-[2vw] bg-white text-black items-center rounded-2xl ${active ? "border-b-2 border-gray-500/50" : ""}`}>
                    <h4 className="text-xl">{question}</h4>
                    <img className={`h-[1.5vh] w-auto duration-[0.3s] ${active ? "rotate-180" : "rotate-0"}`} src="/icons/TabArrow.png" alt="Arrow icon" />
                </div>
                {active &&
                    <div className="flex justify-between py-[2vh] px-[2vw] bg-white text-black items-center rounded-2xl">
                        <p>
                            {answer}
                        </p>
                    </div>
                }
            </div>

        </div>
    );
}
