import watch from '../assets/_imgs/products/watch.png'
import keyboard from '../assets/_imgs/products/keyboard.png'
import Powerbank from '../assets/_imgs/products/powerbank.png'
import airpods from '../assets/_imgs/products/air-prod.png'
import bluetooth from '../assets/_imgs/products/home-assis.png'
import fan from '../assets/_imgs/products/electric-fan.png'


export default function Second_page(){

    return(
        <section class="flex items-center justify-center py-5 bg-[#F8FAFC] md:h-screen md:px-40 font-[Montserrat]">
            <div class="grid grid-cols-3 md:grid-cols-4 grid-rows-[200px_200px] md:grid-rows-[350px_350px] gap-2 md:gap-10 px-5 w-full">
                <div class="relative group flex flex-col justify-center bg-gray-400 rounded-xl overflow-hidden col-span-2 active:bg-[#38BDF8] md:hover:bg-[#38BDF8] md:duration-300">
                    <div class="flex justify-center items-center gap-4 p-4 group-hover:scale-110 duration-300">
                        <img src={watch} alt="" class="h-60 object-contain" />
                        <img src={airpods} alt="" class="h-60 object-contain hidden md:inline" />
                    </div>

                    <div class="absolute flex flex-col py-5 px-10 top-1/2 w-full bg-white/60 h-[50%] translate-y-full group-hover:translate-y-0 transition-all duration-300">
                        <h1 class="text-[40px] font-bold text-[#0F172A]">Smart Accessories</h1>
                        <a href="#" class="underline mt-10 text-[#3B82F6]">See more details</a>
                    </div>
                </div>

                <div class="relative group flex bg-gray-400 rounded-xl overflow-hidden active:bg-[#38BDF8] md:hover:bg-[#38BDF8] md:duration-300">
                    <img src={bluetooth} alt="" class="object-cover w-full h-full group-hover:scale-110 duration-300" />

                    <div class="absolute flex flex-col py-5 px-10 top-1/2 w-full bg-white/60 h-[50%] translate-y-full group-hover:translate-y-0 transition-all duration-300">
                        <h1 class="text-[30px] font-semibold text-[#0F172A]">Home Assistant</h1>
                        <a href="#" class="underline mt-10 text-[#3B82F6]">See more details</a>
                    </div>
                </div>

                <div class="hidden relative group md:flex bg-gray-400 rounded-xl overflow-hidden row-span-2 active:bg-[#38BDF8] md:hover:bg-[#38BDF8] md:duration-300">
                    <img src={fan} alt="" class="object-cover w-full h-full group-hover:scale-110 duration-300" />

                    <div class="absolute flex flex-col py-5 px-10 top-1/2 w-full bg-white/60 h-[40%] translate-y-110 group-hover:translate-y-30 transition-all duration-300">
                        <h1 class="text-[30px] font-semibold text-[#0F172A]">Modern Appliances</h1>
                        <a href="#" class="underline mt-10 text-[#3B82F6]">See more details</a>
                    </div>
                </div>

                <div class="relative group flex bg-gray-400 rounded-xl overflow-hidden active:bg-[#38BDF8] md:hover:bg-[#38BDF8] md:duration-300">
                    <img src={Powerbank} alt="" class="object-contain group-hover:scale-110 duration-300" />

                    <div class="absolute flex flex-col py-5 px-10 top-1/2 w-full bg-white/60 h-[50%] translate-y-full group-hover:translate-y-0 transition-all duration-300">
                        <h1 class="text-[30px] font-semibold text-[#0F172A]">Powerbank</h1>
                        <a href="#" class="underline mt-10 text-[#3B82F6]">See more details</a>
                    </div>
                </div>

                <div class="relative group flex items-center justify-center bg-gray-400 rounded-xl p-10 overflow-hidden col-span-2 active:bg-[#38BDF8] md:hover:bg-[#38BDF8] md:duration-300">
                    <img src={keyboard} alt="" class="h-70 w-full object-contain group-hover:scale-110 duration-300" />

                    <div class="absolute flex flex-col py-5 px-10 top-1/2 w-full bg-white/60 h-[50%] translate-y-full group-hover:translate-y-0 transition-all duration-300">
                        <h1 class="text-[30px] font-semibold text-[#0F172A]">Peripherals</h1>
                        <a href="#" class="underline mt-10 text-[#3B82F6]">See more details</a>
                    </div>
                </div>
            </div>
        </section>
    )
}