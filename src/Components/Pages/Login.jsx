import React from "react";
// import video from "../../assets/video.mp4";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      {/* Contenedor de la imagen */}
      {/* <div className="flex-none">
        <img src={video} alt="" className="h-full object-cover" />
      </div> */}

      {/* Contenedor del input */}
      <div className="flex flex-col justify-center items-center flex-1">
        <div className="container text-end d-flex pr-6 mt-2">
          <button onClick={()=> navigate("/")} className="bg-transparent text-pink-400 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </button>
        </div>
        <div className="container text-center d-flex justify-content-center align-items-center pt-4">
          <div className="col-1 col-md-4 pb-4">
            <h2 className="text-pink-500 pb-6 text-bold">¡ Hablemos !</h2>
          </div>
          <div className="col-1 col-md-4 pb-4">
            <h2 className="text-pink-500 pb-6">
              Contáctame para iniciar tu proyecto de desarrollo web y haré que
              tu visión se vuelva realidad.
            </h2>
          </div>
        </div>
        <form className="w-full max-w-md">
          <div className="relative mb-3 pb-6">
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-2 border-pink-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary rounded-md outline-none transition-shadow duration-300 shadow-lg shadow-pink-300 focus:shadow-outline-pink-500 focus:border-pink-300 focus:ring-0"
              id="exampleFormControlInput50"
              // defaultValue="Readonly input here..."
              aria-label="readonly input example"
            />
            <label
              htmlFor="exampleFormControlInput50"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-violet-700 bg-white text-bold transform -translate-y-[0.9rem] scale-[0.8] text-primary"
            >
              Nombre
            </label>
          </div>
          <div className="relative mb-3 pb-6">
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-2 border-pink-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary rounded-md outline-none transition-shadow duration-300 shadow-lg shadow-pink-300 focus:shadow-outline-pink-500 focus:border-pink-300 focus:ring-0"
              id="exampleFormControlInput50"
              // defaultValue="Readonly input here..."
              aria-label="readonly input example"
            />
            <label
              htmlFor="exampleFormControlInput50"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-violet-700 bg-white text-bold transform -translate-y-[0.9rem] scale-[0.8] text-primary"
            >
              Email
            </label>
          </div>
          <div className="relative mb-3 pb-6">
            <textarea
              type="text"
              className="peer block min-h-[auto] w-full rounded border-2 border-pink-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary rounded-md outline-none transition-shadow duration-300 shadow-lg shadow-pink-300 focus:shadow-outline-pink-500 focus:border-pink-300 focus:ring-0"
              id="exampleFormControlInput50"
              // defaultValue="Readonly input here..."
              aria-label="readonly input example"
            />
            <label
              htmlFor="exampleFormControlInput50"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  text-violet-700 bg-white text-bold transform -translate-y-[0.9rem] scale-[0.8] text-primary"
            >
              Mensaje
            </label>
          </div>
          <div className="container text-center d-flex justify-content-center align-items-center pt-4">
            <div className="col-1 col-md-4 pb-4">
              {" "}
              <button className="bg-transparent border-2 border-pink-200 text-pink-200 py-2 px-6 rounded-full text-lg font-bold hover:bg-pink-200 hover:text-white transition duration-300 ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
