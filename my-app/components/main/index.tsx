import React, { Component } from "react";
import Image from "next/image";
import hero from "@/public/images/maincanvasgraphic.png";
import outfit from "@/public/images/outfit2.jpeg";
class Home extends Component {
    state = {};
    render() {
        return (
            <div>
                {/* Hero section */}
                <div className="bg-navbar lg:h-screen">
                    <div className="lg:h-screen flex justify-center  items-center">
                        <div className="flex flex-wrap justify-center w-11/12 lg:gap-44">
                            <div className="w-[382px] lg:h-[416px] lg:pb-0 pb-5  flex flex-col justify-start items-center gap-10">
                                <p className="font-[600] font-poppins text-[56px] leading-[64px] tracking-[.005rem] text-[#fff] ">
                                    Happiness is Creating Outfits
                                </p>
                                <div className="w-full">
                                    <button className="btn font-[500] font-poppins text-[16px] leading-[-.18px] text-black bg-white rounded-[100px] w-[192px] h-[48px] mr-2 hover:bg-white">
                                        <a href="http://localhost:3000/home">Get Started</a>
                                    </button>
                                </div>
                            </div>
                            <div className="w-[382px] h-[416px] ">
                                {/* <img
                                    className="h-[384px]"
                                    src="https://shoplook.io/assets/imgs/moodboards.png"
                                    alt=""
                                /> */}
                                <Image src={outfit} alt="outfit" className="h-[384px]" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Easy to Use Creative Canvas */}
                <div className="bg-white pt-10 pb-10">
                    <p className="font-[500] font-poppins text-[28px] leading-[34px] text-[#021422] text-center p-2">
                        Easy to Use Creative Canvas
                    </p>
                    <p className="font-[500] font-poppins text-[#021422] leading-[24px] text-[20px] text-center pt-5 p-2">
                        Drag and drop from a selection of millions of images or upload your
                        own
                    </p>
                    <div className="flex justify-center items-center pt-5">
                        {/* <img
                            className="w-9/12"
                            src="@/public/images/maincanvasgraphic.png"
                            alt=""
                        /> */}
                        <Image src={hero} className="w-9/12" alt="" />
                    </div>
                </div>
                {/* features cards */}
                <div className="bg-[rgba(139,115,255,.88)] flex justify-center flex-wrap gap-2 pt-10 lg:p-10 pb-10">
                    <div className="lg:w-[301px] w-11/12 h-[186px] text-[#021422] font-poppins font-[500] text-[20px] leading-[24px] flex flex-col justify-center items-center bg-white border-[1px] border-[#292f33] rounded-[16px] pb-5">
                        <img
                            className="w-[128px]"
                            src="https://shoplook.io/assets/imgs/cd.png"
                            alt=""
                        />
                        <p className=" w-[200px]">Remove background from any images</p>
                    </div>
                    <div className="lg:w-[301px] w-11/12 h-[186px] text-[#021422] font-poppins font-[500] text-[20px] leading-[24px] flex flex-col justify-center items-center bg-white border-[1px] border-[#292f33] rounded-[16px] pb-5">
                        <img
                            className="w-[128px]"
                            src="https://shoplook.io/assets/imgs/cd.png"
                            alt=""
                        />
                        <p className=" w-[200px]">Remove background from any images</p>
                    </div>

                    <div className="lg:w-[301px] w-11/12 h-[186px] text-[#021422] font-poppins font-[500] text-[20px] leading-[24px] flex flex-col justify-center items-center bg-white border-[1px] border-[#292f33] rounded-[16px] pb-5">
                        <img
                            className="w-[128px]"
                            src="https://shoplook.io/assets/imgs/cd.png"
                            alt=""
                        />
                        <p className=" w-[200px]">Remove background from any images</p>
                    </div>
                    <div className="lg:w-[301px] w-11/12 h-[186px] text-[#021422] font-poppins font-[500] text-[20px] leading-[24px] flex flex-col justify-center items-center bg-white border-[1px] border-[#292f33] rounded-[16px] pb-5">
                        <img
                            className="w-[128px]"
                            src="https://shoplook.io/assets/imgs/cd.png"
                            alt=""
                        />
                        <p className=" w-[200px]">Remove background from any images</p>
                    </div>
                </div>
                {/* Featured Designs */}

                <div className="pt-10 bg-white pb-10">
                    <p className="font-[500] font-poppins text-[28px] leading-[-.18px] text-[#021422] text-center">
                        Featured Designs
                    </p>
                    <div className="w-full pt-5 flex justify-center">
                        <button className="btn font-[500] font-poppins text-[16px] leading-[-.18px] text-black bg-white rounded-[100px] w-[192px] h-[48px] mr-2 hover:bg-white">
                            Explore the feed
                        </button>
                    </div>
                </div>
                {/* creatinga better in a community */}
                <div className="bg-navbar lg:h-screen lg:flex justify-center">
                    <div className="flex justify-center items-center bg-[rgba(139,115,255,.88)] lg:w-11/12 lg:h-[442px] lg:rounded-[32px] mt-10">
                        <div className="flex flex-wrap-reverse justify-start w-11/12 ">
                            <div className="lg:w-[320px] lg:h-[416px] h-[116px] w-[145px] lg:relative lg:top-[105px] ">
                                <img
                                    className="lg:h-[384px] lg:w-full h-[116px] w-[145px] rotate-12"
                                    src="https://shoplook.io/assets/home-icecream.svg"
                                    alt=""
                                />
                            </div>
                            <div className=" lg:pb-0 lg:w-[800px] pt-[30px] pr-[70px] w-full pb-5 flex flex-col justify-start  gap-10">
                                <p className="font-[500] text-[32px] leading-[39px] text-[#fff]">
                                    Creating is Better in a Community
                                </p>
                                <div className="flex gap-[32px]  justify-start">
                                    <div>
                                        <p className="font-[500] font-poppins text-[32px] text-[#fff]">
                                            1M+
                                        </p>
                                        <p className="font-[500] font-poppins text-[20px] text-[#fff]">
                                            Users
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-[500] font-poppins text-[32px] text-[#fff]">
                                            8M+
                                        </p>
                                        <p className="font-[500] font-poppins text-[20px] text-[#fff]">
                                            Designs
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-[500] font-poppins text-[32px] text-[#fff]">
                                            12M+
                                        </p>
                                        <p className="font-[500] font-poppins text-[20px] text-[#fff]">
                                            Uploads
                                        </p>
                                    </div>
                                </div>

                                <p className="font-[500] font-poppins text-[20px] text-[#fff]">
                                    Our mission is to create an inclusive space for creativity,
                                    bring fun to discovery, and build an authentic community
                                    through the power of self-expression.
                                </p>
                                <div className="w-full pt-5 flex justify-start ">
                                    <button className="btn font-[500] font-poppins text-[16px] leading-[-.18px] text-black bg-white rounded-[100px] border-none w-[128px] h-[40px] mr-2 hover:bg-white">
                                        Create
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
