"use client";

import Image from "next/image";

export default function Footer() {
    return (
        <footer className="text-center pb-[2vh]">
            <p className="text-black text-[calc(10px+3vh)] font-[550] font-[Maragsa]">
                Salamat!
            </p>
            <div className={"flex justify-center items-center gap-5"}>
                <a href="mailto:kapwacodefest@gmail.com" rel="noopener noreferrer">
                    <Image src="/icons/email.svg" alt="email" width={30} height={30} className="cursor-pointer"/>
                </a>
                <a href="https://www.instagram.com/kapwacodefest" rel="noopener noreferrer">
                    <Image src="/icons/instagram.svg" alt="email" width={20} height={20} className="cursor-pointer invert"/>
                </a>
            </div>
        </footer>
    );
}
