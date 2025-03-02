import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="sticky top-0 py-4 animate-slide-in-top z-50">
        <div className="container px-4">
          <div className="flex justify-center">
            <div className="border-2 border-[#DBDBDB] py-6 px-4 lg:py-15 lg:px-4 w-full lg:w-[500px] h-[79px] flex justify-between items-center rounded-full drop-shadow-md backdrop-blur-sm bg-white/80">
              <div className="hover:animate-pulse-fade-in">
                <Link
                  to="/work"
                  className="text-xl lg:text-2xl text-[#A7A7A7] hover:bg-[#B6D168] py-[10px] px-[25px] rounded-full hover:text-[#4F601F]"
                >
                  Work
                </Link>
              </div>
              <div className="bg-[#B3C8D1] py-[10px] px-[25px] rounded-full">
                <button type="button">
                  <Link to="/">
                    <svg
                      width="60"
                      height="29"
                      viewBox="0 0 60 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M39.5053 24.9722H47.3842V10.7114L41.8705 10.875V6.44444H52.4029V24.9722H60V26.9861C60 28.0984 59.0337 29 57.8417 29H39.5053V24.9722Z"
                        fill="#4A7080"
                      />
                      <path
                        d="M14.6763 26.9861C14.6763 25.8739 15.6426 24.9722 16.8345 24.9722H25.778V10.2911H19.4245V6.44444H30.833V12.433H31.1112C31.3277 11.6462 31.6368 10.8885 32.0388 10.16C32.4407 9.43145 32.9508 8.80491 33.5692 8.28036C34.1875 7.72667 34.945 7.28955 35.8416 6.96899C36.7382 6.61929 37.7894 6.44444 38.9952 6.44444H41.8705V10.875L37.1401 10.9905C35.2851 10.9905 33.7701 11.5151 32.5953 12.5642C31.4204 13.5841 30.833 14.9683 30.833 16.7168V24.9722H39.5053V29H14.6763V26.9861Z"
                        fill="#4A7080"
                      />
                      <path
                        d="M18.5612 6.44444H23.3094L12.1459 25.8498C11.5505 26.8999 10.6946 27.8708 9.71223 28.3958C8.75961 28.9209 7.44232 29 5.62639 29H1.7415V27.0334C1.7415 25.9211 2.7078 25.0195 3.89978 25.0195H7.18928L9.28802 22.4791L0 6.44444H5.09055L8.75217 13.2489L11.61 18.8248H11.8779L14.7358 13.2489L18.5612 6.44444Z"
                        fill="#4A7080"
                      />
                      <path
                        d="M47.8443 5.02893C48.2859 5.16705 48.7784 5.23611 49.3219 5.23611C49.8653 5.23611 50.3918 5.17333 50.9013 5.04776C51.4108 4.90964 51.8608 4.72129 52.2514 4.48271C52.6421 4.23158 52.9478 3.94278 53.1685 3.61631C53.4063 3.27728 53.5252 2.90058 53.5252 2.48621C53.5252 2.10951 53.4318 1.77048 53.245 1.46912C53.0581 1.15521 52.8034 0.89152 52.4807 0.678058C52.175 0.464595 51.8014 0.301359 51.3598 0.188349C50.9352 0.0627831 50.4852 0 50.0097 0C49.2964 0 48.668 0.0816181 48.1245 0.244854C47.5981 0.40809 47.1565 0.615274 46.7999 0.866407C46.4432 1.11754 46.18 1.40634 46.0101 1.73281C45.8403 2.04673 45.7554 2.36064 45.7554 2.67456C45.7554 3.02615 45.8403 3.3589 46.0101 3.67281C46.18 3.97417 46.4177 4.24414 46.7234 4.48271C47.0291 4.70873 47.4028 4.8908 47.8443 5.02893Z"
                        fill="#4A7080"
                      />
                    </svg>
                  </Link>
                </button>
              </div>
              <div className="hover:animate-pulse-fade-in">
                <Link
                  to="/writing"
                  className="text-xl lg:text-2xl text-[#A7A7A7] hover:bg-[#DDBF53] py-[10px] px-[25px] rounded-full hover:text-[#6C5E2A]"
                >
                  Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
