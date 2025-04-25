import Watch from '../assets/_imgs/products/watch.png'

export default function Landing_Page(){

    return(
        <section class="relative flex items-center h-screen w-full px-3 py-15 md:px-40 bg-[url(./assets/_imgs/bg-1.jpg)] font-[Montserrat] overflow-x-hidden">             
            <div class="flex flex-col my-auto">                
                 <div class="flex flex-col">                     
                    <h1 class="text-[50px] md:text-[100px]/30 font-bold">Smart Gadgets for Modern Living</h1>                     
                    <p class="text-xl md:text-[30px] mt-10 md:mt-5">Discover the latest text innovation.</p>                 
                </div>  

                <a href="./pages/products.html" class="mt-5 md:mt-20 w-60">
                    <button class="bg-sky-600 text-white w-60 h-15 rounded-xl active:bg-transparent active:border-1 active:text-gray-900">Shop Now</button>
                </a>             
            </div>  

            <img src={Watch} alt="" class="absolute translate-x-40 md:translate-x-0 md:static md:z-1"/>         
        </section>
    )
}