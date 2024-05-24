function Footer() {
  return (
    <>
      <div className="flex justify-center z-10">
        <div className="w-full pb-4 lg:w-[500px] flex justify-between">
          <div className="bg-white border-2 border-[#DBDBDB] py-3 lg:py-4 px-3 rounded-full drop-shadow-xl">
            <h1 className="text-[#757575] font-semibold">
              Yohanes Rio Irsan • 2024
            </h1>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-[#DDBF53] border-2 border-[#C7AC4B] rounded-full flex justify-center items-center  drop-shadow-lg w-12 h-12">
              <h1 className="text-2xl">📄</h1>
            </div>
            <div className="bg-[#B6D168] border-2 border-[#A4BD5E] rounded-full flex justify-center items-center w-12 h-12">
              <h1 className="text-2xl">📧</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
