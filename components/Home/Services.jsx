import Container from "../Container";
import { services } from "@/constants/data";

export default function Services() {
  return (
    <div className="pb-[50px]">
      <Container>
        <h2 className="text-[35px] text-green font-semibold mb-[30px]">
          My Services
        </h2>
        <div className="grid sm:grid-cols-2 gap-[50px]">
          {services.map((item, i) => (
            <div
              className="rounded-lg cursor-pointer transitions group hover:translate-y-3 hover:bg-green border border-accent/20 bg-white px-[20px] py-[40px] text-sm shadow-sm dark:bg-zinc-800"
              key={i}
            >
              <span className="text-[35px] group-hover:!text-white text-green">{item.icons}</span>
              <h2 className="text-[22px] group-hover:!text-white font-semibold text-green mb-3 mt-3">
                {item.title}
              </h2>
              <p className="text-[15px] font-light text-black group-hover:!text-white">
                {item.para.slice(0,145)}...
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
