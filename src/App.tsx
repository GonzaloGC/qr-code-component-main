import "./index.css";
import "@fontsource-variable/outfit";
import { motion } from "framer-motion";

export const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <section className="flex justify-center items-center h-screen bg-[#d6e2f0] font-Outfit">
        <div className=" h-[500px] w-[320px] rounded-[18px] bg-white shadow-custom">
          <div className="h-full flex flex-col box-border p-[16px] gap-[24px]">
            <img
              src="public/image-qr-code.png"
              alt="codigo qr"
              className="w-[286px] h-[286px] rounded-[12px]"
            />
            <div className="flex flex-col gap-3 pl-2 pr-2">
              <h1 className="text-center text-[#1f3251] font-bold leading-[29px] text-[22px] -0">
                Improve your front-end skills by building projects
              </h1>
              <p className="text-center leading-5 text-[15px] font-normal text-[#7b879d] tracking-[0.2px]">
                Scan the QR code to visit Frontend Mentor and take your coding
                skills to the next level
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};