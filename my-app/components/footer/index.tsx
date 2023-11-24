import React, { Component } from "react";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="p-10 bg-navbar">
        <div className="flex lg:flex-nowrap flex-wrap gap-20">
          <div className="flex flex-col gap-[16px] lg:w-[260px] h-full">
            <img
              className="h-[48px] w-[160px]"
              src="https://shoplook.io/assets/imgs/appstore.png"
              alt=""
            />
            <img
              className="h-[48px] w-[160px]"
              src="https://shoplook.io/assets/imgs/playstore.png"
              alt=""
            />
          </div>
          <div className="flex gap-[16px] flex-col">
            <p className="font-[500] font-poppins text-[14px] text-[#fff]">
              Feed
            </p>
            <p className="font-[500] font-poppins text-[14px] text-[#fff]">
              Discover
            </p>
            <p className="font-[500] font-poppins text-[14px] text-[#fff]">
              Shop
            </p>
            <p className="font-[500] font-poppins text-[14px] text-[#fff]">
              Challenges
            </p>
          </div>
          <div className="flex gap-[16px] flex-col w-[248px]">
            <p className="font-[500] font-poppins text-[14px] text-[#fff]">
              Help
            </p>
            <p className="font-[500] font-poppins text-[14px] text-[#fff]">
              Careers
            </p>
            <p className="font-[500] font-poppins text-[14px] text-[#fff]">
              Blog
            </p>
            <p className="font-[500] font-poppins text-[14px] text-[#fff]">
              Terms
            </p>
            <p className="font-[500] font-poppins text-[14px] text-[#fff]">
              Privacy
            </p>
            <p className="font-[500] font-poppins text-[14px] text-[#fff]">
              Copyright Policy
            </p>
          </div>
          <div className="flex w-full gap-[32px] justify-end ">
            <img
              className="w-[20px] h-[20px]"
              src="https://shoplook.io/assets/imgs/instagram.png"
              alt=""
            />
            <img
              className="w-[20px] h-[20px]"
              src="https://shoplook.io/assets/imgs/tik-tok.png"
              alt=""
            />
            <img
              className="w-[20px] h-[20px]"
              src="https://shoplook.io/assets/imgs/tik-tok.png"
              alt=""
            />
            <img
              className="w-[20px] h-[20px]"
              src="https://shoplook.io/assets/imgs/tik-tok.png"
              alt=""
            />
            <img
              className="w-[20px] h-[20px]"
              src="https://shoplook.io/assets/imgs/tik-tok.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
