import Image from "next/image"
import profile from "@/pictures/output.jpg"

export default function AboutPage() {
    return(
        <div>
            <div className="md:max-w-[1640px] mx-auto  py-[10%] md:flex md:justify-evenly  md:items-center   bg-[#3E5879]">
                    <Image src={profile} alt="profile picture" width={500} height={500} className="fill-black xs:rounded-full xs:w-[300px] xs:h-[300px]  md:rounded-[20px] md:w-[500px] md:h-[500px] xs:p-2 xs:m-6 xs:my-12 "></Image>
                    <div className="md:flex md:flex-col md:gap-5 xs:flex xs:flex-col xs:gap-3  ">
                        <div className="text-2xl font-bold text-center text-pretty mt-4 ">
                            ABOUT ME
                        </div>
                        <div className="text-xl font-bold mx-auto text-[#213555] md:text-xl md:font-bold md:text-center md:text-pretty md:mt-4">
                            Wania Khan - Front-End Developer
                        </div>
                        <div className="md:text-md md:text-wrap md:w-[500px] md:mx-auto text-[#D8C4B6] xs:w-[300px] xs:mx-auto xs:p-3">
                            I have created this blog website where people can find particular posts about a certain topic.The purpose to make this blog with sanity is to make it easy for people to find particular posts about a certain topic.
                        </div>

                    </div>
                    
            </div>
        </div>
    )
}