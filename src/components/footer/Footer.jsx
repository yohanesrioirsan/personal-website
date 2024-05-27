function Footer() {
  return (
    <>
      <footer className="sticky bottom-0 z-50">
        <div className="container px-4">
          <div className="flex justify-center">
            <div className="w-full pb-4 lg:w-[500px] flex justify-between">
              <div className="bg-white border-2 border-[#DBDBDB] py-3 lg:py-4 px-3 rounded-full drop-shadow-xl">
                <h1 className="text-[#757575] font-semibold">
                  Yohanes Rio Irsan • 2024
                </h1>
              </div>
              <div className="flex gap-3 items-center">
                <div className="bg-[#DDBF53] border-2 border-[#C7AC4B] rounded-full flex justify-center items-center drop-shadow-lg w-12 h-12">
                  <a href="https://read.cv/yohanesrioirsan" target="_blank">
                    <h1 className="hover:animate-bounce text-2xl">📄</h1>
                  </a>
                </div>
                <div className="bg-[#B6D168] border-2 border-[#A4BD5E] rounded-full flex justify-center items-center w-12 h-12">
                  <a
                    className="hover:animate-bounce"
                    href="mailto:rioirsan8@gmail.com"
                  >
                    <h1 className="text-2xl">💌</h1>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative top-0 left-0"></div>
        <div className="absolute bg-gradient-to-t from-white -z-10 bottom-0 w-full h-52"></div>
      </footer>
    </>
  );
}

export default Footer;
