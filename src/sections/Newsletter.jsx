import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
const Newsletter = () => {
    return (
        <div className="max-container">
            <h1 className="text-7xl text-white text-center">Contact Us</h1>
            <div className="flex items-center justify-center mt-12">
                <div className="text-white flex-1 px-16 ">
                    <div className="mb-6 px-2 py-4 ">
                        <h1 className="flex items-end text-4xl mb-3 gap-4">
                            <MdLocationOn />
                            Adderss
                        </h1>
                        <p className="text-2xl font-thin">
                            Gaganan Colney, Near Navanagapur, Ahmednagar MIDC,
                            Ahmednagar, 414601
                        </p>
                    </div>
                    <div className="mb-6 px-2 py-4 ">
                        <h1 className="flex items-end text-4xl mb-3 gap-4">
                            <MdPhone className="text-white" />
                            Phone
                        </h1>
                        <p className="text-2xl font-thin">+91 9273491821 </p>
                    </div>
                    <div className="mb-6 px-2 py-4 ">
                        <h1 className="flex flex-row items-end text-4xl mb-3 gap-4">
                            <MdEmail />
                            Email
                        </h1>
                        <p className="text-2xl font-thin">
                            vaibhav01@gmail.com
                        </p>
                    </div>
                </div>
                <div className="flex-1 px-16 flex flex-col justify-between  ">
                    <form action="" className="flex flex-col  gap-8 ">
                        <input
                            type="text"
                            name="Name"
                            placeholder="Name"
                            className="border bg-black px-2 py-4 text-xl placeholder-white placeholder-opacity-40"
                        />
                        <input
                            type="email"
                            name="Email"
                            id=""
                            placeholder="Email"
                            className="border bg-black px-2 py-4 text-xl placeholder-white placeholder-opacity-40"
                        />
                        <textarea
                            name="Message"
                            id=""
                            rows={6}
                            placeholder="Message..."
                            className="border bg-black px-2  py-4 text-xl placeholder-white placeholder-opacity-40"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-black text-white xl:text-2xl py-4 xl:w-1/2 sm:w-1/2 border-2 self-center"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
