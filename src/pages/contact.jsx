

export default function Contact(){

    return(
        <main class="pt-32 pb-20 px-5 md:px-40">
            <section class="text-center mb-16">
                <h1 class="text-5xl font-bold text-[#0F172A]">Contact Us</h1>
                <p class="text-lg mt-4">We'd love to hear from you</p>
            </section>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <section class="bg-white rounded-xl shadow-md p-8">
                    <h2 class="text-2xl font-semibold mb-6">Send us a message</h2>
                        <form>
                            <div class="mb-4">
                                <label for="name" class="block mb-2">Your Name</label>
                                <input type="text" id="name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38BDF8]" placeholder="Full Name" required/>
                            </div>

                            <div class="mb-4">
                                <label for="email" class="block mb-2">Email Address</label>
                                <input type="email" id="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38BDF8]" placeholder="Email" required/>
                            </div>

                            <div class="mb-6">
                                <label for="message" class="block mb-2">Your Message</label>
                                <textarea id="message" rows="4" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38BDF8]" placeholder="Message"></textarea>
                            </div>

                            <button type="submit" class="w-full bg-[#38BDF8] text-white py-3 rounded-lg hover:bg-[#3B82F6] transition-colors duration-300 font-semibold">
                                Send Message
                            </button>
                        </form>
                </section>

                <section>
                    <div class="bg-white rounded-xl shadow-md p-8 mb-8">
                        <h2 class="text-2xl font-semibold mb-6">Contact Information</h2>
                        <div class="space-y-4">
                            <div class="flex items-start">
                                <span class="text-[#38BDF8] mr-3 mt-1">📍</span>

                                <div>
                                    <h3 class="font-semibold">Address</h3>
                                    <p>123 Iskina Japan, Philippines, Earth 6969</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <span class="text-[#38BDF8] mr-3 mt-1">📞</span>
                                <div>
                                    <h3 class="font-semibold">Phone</h3>
                                    <p>+63 123 456 7890</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <span class="text-[#38BDF8] mr-3 mt-1">✉️</span>
                                <div>
                                    <h3 class="font-semibold">Email</h3>
                                    <p>pixelpeak@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-md overflow-hidden">
                        <div class="relative h-64 bg-gray-200 flex items-center justify-center">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75173.47677918931!2d123.91061924136116!3d10.23234157802586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99a5f4ca9458b%3A0xb54b99141f10a9d!2sCordova%2C%20Cebu!5e1!3m2!1sen!2sph!4v1744781543502!5m2!1sen!2sph" width="600" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                    
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}