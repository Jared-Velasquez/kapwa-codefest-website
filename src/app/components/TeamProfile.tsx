import Link from "next/link"
export default function TeamProfile({linkedin, headshot, name, school}: {linkedin: string, headshot: string, name: string, school: string}) {
    return (
        <div className="flex flex-col items-center">
            <div>
                <Link href={linkedin} target="_blank" className="bg-gray-100 rounded-2xl w-20 h-20 md:w-32 md:h-32 overflow-hidden flex items-center justify-center " >
                    <img
                        src={headshot}
                        alt={`${name}'s headshot`}
                        className="w-full h-full object-cover"
                    />
                </Link>
            </div>
            <div className="text-center p-2 w-45">
                <h3 className="md:text-[1.5rem] font-[Maragsa]">{name}</h3>
                <p className="md:text-[1rem] font-[instrumental sans]">{school}</p>
            </div>
        </div>
    )
}
