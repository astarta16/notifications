import { useState } from "react";
import data from "../../data.json";

export default function Notification() {
  const [userData, setUserData] = useState(data);
  return (
    <div className="bg-white w-[730px] pl-[32px] pt-[33px] pr-[30px] pb-[18px] rounded-[15px]">
      <header className="flex justify-between items-center">
        <h1 className="text-[24px] font-[800]">
          Notifications
          <span className="text-[16px] bg-[#0A327B] text-white px-[11px] py-[4px]  ml-1 rounded-[6px]">
            3
          </span>
        </h1>
        <p>Mark all as read</p>
      </header>
      <div className="mt-[30px] flex flex-col gap-[20px]">
        {userData.map((item) => {
          return (
            <div className="flex gap-[20px] items-center">
              <img
                src={`./assets/avatar-${item.author
                  .replace(" ", "-")
                  .toLocaleLowerCase()}.webp`}
                  className="w-[46px]"
              />
              <div>
                <p>
                  <span>{item.author}</span>
                  {" "}
                  <span>{item.type}</span>
                  {" "}
                  <span>{item.content}</span>
                </p>
                <p>{item.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
