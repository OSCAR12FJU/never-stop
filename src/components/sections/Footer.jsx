import NeverStop from "../../files/NeverStop.png"
import { SectionContainer } from "./SectionContainer"

export const Footer = () => {
return(
<>
<SectionContainer>

<footer className="bg-white m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 border-t-[0.1rem]">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={NeverStop} className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Never Stop</span>
            </a>
        </div>
    </div>
</footer>
</SectionContainer>
        </>

    )
}