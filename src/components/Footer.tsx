import React from "react";

const Footer = () => {
    return (
        <footer className="relative pt-[250px] w-[100%] text-gray-700 py-20 bg-cover bg-center bg-no-repeat flex items-center justify-start content-start gap[300px] ">
            <div className="absolute inset-0 rounded-inherit">
                <img
                    decoding="async"
                    loading="lazy"
                    src="/images/footerbg.avif"
                    alt=""
                    className="block w-full h-full rounded-inherit object-cover object-bottom"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#f5f4f4] opacity-100 rotate-180"></div>

            {/* Main Content Box */}
            <div className="relative max-w-full mx-auto px-4 md:px-8 ">
                <div className="bg-white shadow-xl rounded-xl p-4 md:p-8 lg:p-12 opacity-80">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Column 1 - Company */}
                            <div>
                                <h4 className="font-medium text-gray-500 mb-4">Company</h4>
                                <ul className="space-y-1 text-black text-[14px] font-medium">
                                    {["Home", "Products", "Technology", "Partners", "About", "News & Press", "Careers", "LinkedIn", "Blog"].map(
                                        (item) => (
                                            <li key={item} className="hover:text-gray-900 cursor-pointer transition-colors">{item}</li>
                                        )
                                    )}
                                </ul>
                            </div>
                            {/* Column 2 - Resources */}
                            <div>
                                <h4 className="font-medium text-gray-500  mb-4">Resources</h4>
                                <ul className="space-y-1 text-black text-[14px] font-medium">
                                    {["Status", "Support"].map((item) => (
                                        <li key={item} className="hover:text-gray-900 cursor-pointer transition-colors">{item}</li>
                                    ))}
                                </ul>
                            </div>
                            {/* Column 3 - More Resources */}
                            <div>
                                <h4 className="font-medium text-gray-500  mb-4">Resources</h4>
                                <ul className="space-y-1 text-black text-[14px] font-medium">
                                    {["Cardholder login", "Cardholder support", "Card programs", "Privacy Policy"].map((item) => (
                                        <li key={item} className="hover:text-gray-900 cursor-pointer transition-colors">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            {/* Column 4 - Legal */}
                            <div>
                                <h4 className="font-medium text-gray-500  mb-4">Legal</h4>
                                <p className="text-black text-[14px] font-medium leading-relaxed">
                                    Product visual representations may vary from current or future product experience.
                                    <br /><br />
                                    Turkish Airlines Miles&Smiles Visa Signature Card, H-E-B Visa Signature Card, and Horizon Hobby Visa Card are issued by First Electronic Bank pursuant to a license from Visa USA Inc.

                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Bottom Section */}
                    <div className="relative mt-[100px] lg:mt-[250px]  flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                        <div>
                            <img src="/images/OX_Logo_black.png" alt="Logo" className="h-10" />
                        </div>
                        <div className="text-center text-gray-700">© OrganicX Media 2025</div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
