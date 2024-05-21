import logo from "../../assets/img/yri-logo.png";

function NavBar() {
  return (
    <div className="border-2 border-[#DBDBDB] py-15 px-20 w-[500px] h-[79px] flex justify-between items-center rounded-full drop-shadow-md backdrop-blur-sm bg-white/50">
      <div>
        <a href="#" className="text-xl lg:text-2xl text-[#A7A7A7]">
          Work
        </a>
      </div>
      <div className="bg-[#B3C8D1] py-[10px] px-[25px] rounded-full w-[110px] h-[49px]">
        <a href="/">
          <img className="w-[60px] h-[29px]" src={logo} alt="" />
        </a>
      </div>
      <div>
        <a href="#" className="text-xl lg:text-2xl text-[#A7A7A7]">
          Blogs
        </a>
      </div>
    </div>
  );
}

export default NavBar;
