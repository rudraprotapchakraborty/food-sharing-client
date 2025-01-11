import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/footer-burger.png";
import photo1 from "../../assets/img-gal-1.jpg";
import photo2 from "../../assets/img-gal-2.jpg";
import photo3 from "../../assets/img-gal-3.jpg";
import photo4 from "../../assets/img-gal-4.jpg";
import photo5 from "../../assets/img-gal-5.jpg";
import photo6 from "../../assets/img-gal-6.jpg";
import phone from "../../assets/phone.png";
import map from "../../assets/map.png";
import mail from "../../assets/mail.png";

const Footer = () => {
    return (
        <div>
            {/* Main Footer Section */}
            <div
                className="footer p-6 sm:p-10 text-white flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Contact Info */}
                <nav className="text-center lg:text-left">
                    <h6 className="font-bold text-xl sm:text-2xl mb-4">Give us a knock!</h6>
                    <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                        <img src={map} className="w-[30px] sm:w-[40px]" alt="Location" />
                        <a className="link link-hover text-sm sm:text-lg">Rajshahi, Bangladesh</a>
                    </div>
                    <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                        <img className="w-[30px] sm:w-[40px]" src={phone} alt="Phone" />
                        <a className="link link-hover text-sm sm:text-lg">+88 (013) 0000 0000</a>
                    </div>
                    <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                        <img src={mail} className="w-[30px] sm:w-[40px]" alt="Email" />
                        <a className="link link-hover text-sm sm:text-lg">foodsharing@gmail.com</a>
                    </div>
                    <img src={logo} className="mx-auto lg:mx-0" alt="Logo" />
                </nav>

                {/* Opening Hours */}
                <nav className="text-center lg:text-left">
                    <h3 className="font-bold text-xl sm:text-2xl mb-4">Opening Hours</h3>
                    <div className="space-y-2">
                        {[
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                        ].map((day) => (
                            <h5 key={day} className="text-sm sm:text-lg">
                                {day} ................................{" "}
                                <span className="text-[#e2aa5f]">8:00 - 20:00</span>
                            </h5>
                        ))}
                        <h5 className="text-sm sm:text-lg">
                            Sunday ................................{" "}
                            <span className="text-[#e2aa5f]">CLOSED</span>
                        </h5>
                    </div>
                </nav>

                {/* Social Gallery */}
                <nav className="text-center">
                    <h6 className="font-bold text-xl sm:text-2xl mb-4">We are on socials</h6>
                    <div className="grid grid-cols-3 gap-2">
                        {[photo1, photo2, photo3, photo4, photo5, photo6].map((photo, index) => (
                            <img
                                key={index}
                                className="w-[80px] sm:w-[110px] h-[80px] sm:h-[110px] rounded-xl object-cover"
                                src={photo}
                                alt={`Gallery ${index + 1}`}
                            />
                        ))}
                    </div>
                </nav>
            </div>

            {/* Footer Bottom Section */}
            <div className="footer bg-black text-white border-t border-base-300 px-4 sm:px-10 py-4 flex flex-col md:flex-row items-center justify-between">
                <aside className="text-center md:text-left">
                    <p>Copyright © 2024 FoodSharing. All Rights Reserved.</p>
                </aside>
                <nav className="mt-4 md:mt-0 flex justify-center gap-4">
                    {["Twitter", "YouTube", "Facebook"].map((social, index) => (
                        <a key={index} href="#" className="hover:text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                {/* Social media SVG paths */}
                                {social === "Twitter" && (
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                )}
                                {social === "YouTube" && (
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                )}
                                {social === "Facebook" && (
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                )}
                            </svg>
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Footer;
