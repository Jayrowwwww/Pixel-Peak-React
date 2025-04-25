import P1 from '../assets/_imgs/staff/zayn.webp'
import P2 from '../assets/_imgs/staff/anne.jpg'
import P3 from '../assets/_imgs/staff/johnny.jpg'

export default function About(){

    const Staff = [
        {
            id: 1,
            name: 'Jerreh Salera',
            position: 'Founder & CEO',
            image: P1,
            description: 'With over a decade in tech retail, Jerreh leads our vision to make quality tech accessible to everyone.',
        },
        {
            id: 2,
            name: 'Anne Hathaway',
            position: 'Operational Manager',
            image: P2,
            description: 'Anne ensures our operations run smoothly and our customers receive their orders promptly.',
        },
        {
            id: 3,
            name: 'Jhonny Depp',
            position: 'Product Specialists',
            image: P3,
            description: 'Johnny rigorously tests every product to ensure it meets our quality standards before we offer it to you.',
        }
    ]

    return(
        <main class="pt-32 pb-20 px-5 md:px-40 font-[Montserrat]">
            <section class="text-center mb-20">
                <h1 class="text-5xl font-bold text-[#0F172A] mb-6">Our Story</h1>
                <p class="text-xl max-w-3xl mx-auto">
                    PixelPeak was founded in 2025 with a vision to revolutionize the tech retail industry by combining quality and affordability.
                </p>
            </section>

            <section class="mb-20">
                <div class="flex flex-col md:flex-row gap-12 items-center">
                    <div class="md:w-1/2 shadow-md p-8 rounded-xl">
                        <h2 class="text-3xl font-bold mb-6 text-[#0F172A]">Our Mission</h2>
                        <p class="text-lg mb-4">
                            We're committed to providing cutting-edge technology products that enhance your daily life without compromising on quality or breaking the bank.
                        </p>
                        <p class="text-lg">
                            Our team carefully curates each product in our inventory to ensure it meets our high standards for performance, durability, and value.
                        </p>
                    </div>

                    <div class="md:w-1/2">
                        <div class="bg-[#38BDF8] rounded-xl p-8 text-white">
                            <h3 class="text-2xl font-bold mb-4">Why Choose Us?</h3>
                                <ul class="space-y-4">
                                    <li class="flex items-start">
                                        <i class="fa-solid fa-check mr-2"></i>
                                        <span>100% authentic products</span>
                                    </li>

                                    <li class="flex items-start">
                                        <i class="fa-solid fa-check mr-2"></i>
                                        <span>Competitive pricing</span>
                                    </li>

                                    <li class="flex items-start">
                                        <i class="fa-solid fa-check mr-2"></i>
                                        <span>Excellent customer service</span>
                                    </li>

                                    <li class="flex items-start">
                                        <i class="fa-solid fa-check mr-2"></i>
                                        <span>Fast and reliable shipping</span>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mb-20">
                <h2 class="text-3xl font-bold mb-12 text-center text-[#0F172A]">Meet The Team</h2>
                        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
                            {Staff.map(staff =>(
                                <div 
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300" 
                                key={staff.id}>

                                    <div className="flex flex-col">
                                        <img src={staff.image} alt={staff.name} className='object-cover h-80 md:h-100'/>
                                    </div>

                                    <div className="flex flex-col font-[Montserrat] py-2 px-4 h-50">
                                        <h1 className='text-2xl font-bold'>{staff.name}</h1>
                                        <h2 className='text-lg font-light mt-1'>{staff.position}</h2>
                                        <p className='text-[18px] font-light mt-3'>{staff.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
            </section>

            <section class="bg-white rounded-xl shadow-lg p-12">
                <h2 class="text-3xl font-bold mb-8 text-center text-[#0F172A]">Our Core Values</h2>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="text-center">
                        <div class="text-4xl mb-4 text-[#38BDF8]">💎</div>
                        
                        <h3 class="text-xl font-semibold mb-2">Quality</h3>
                        <p>We stand behind every product we sell with rigorous quality checks.</p>
                    </div>

                    <div class="text-center">
                        <div class="text-4xl mb-4 text-[#38BDF8]">🤝</div>

                        <h3 class="text-xl font-semibold mb-2">Integrity</h3>
                        <p>Honest pricing and transparent business practices.</p>
                    </div>

                    <div class="text-center">
                        <div class="text-4xl mb-4 text-[#38BDF8]">🚀</div>

                        <h3 class="text-xl font-semibold mb-2">Innovation</h3>
                        <p>Constantly seeking the latest tech to enhance your life.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}