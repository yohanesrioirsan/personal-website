import LinkedInIcon from "../../assets/linkedin";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="sticky bottom-0 z-50 text-xs">
        <div className="container px-4">
          <div className="flex justify-center">
            <div className="w-full pb-4 lg:w-[500px] flex justify-between">
              <div className="bg-white border-2 border-[#DBDBDB] py-3 lg:py-4 px-6 rounded-full drop-shadow-xl backdrop-blur-sm bg-white/80">
                <h1 className="text-[#757575] font-semibold">
                  Yohanes Rio Irsan <span className="ml-2">&#9400; {year}</span>
                </h1>
              </div>
              <div className="flex gap-3 items-center">
                <div className="bg-[#DDBF53]/80 backdrop-blur-sm border-2 border-[#C7AC4B] rounded-full flex justify-center items-center drop-shadow-lg w-12 h-12">
                  <a
                    href="https://www.linkedin.com/in/yohanes-rio-irsan-872689206/"
                    target="_blank"
                  >
                    <LinkedInIcon width="16" height="16" />
                  </a>
                </div>
                <div className="bg-[#DDBF53]/80 backdrop-blur-sm border-2 border-[#A4BD5E] rounded-full flex justify-center items-center w-12 h-12">
                  <a
                    className="hover:animate-bounce text-lg"
                    href="mailto:rioirsan8@gmail.com"
                  >
                    <h1>💌</h1>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative top-0 left-0"></div>
        <div className="absolute bg-gradient-to-t from-white -z-10 bottom-0 w-full h-52 opacity-50"></div>
      </footer>
    </>
  );
}

export default Footer;
