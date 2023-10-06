import { useState } from "react";

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
    </div>
  );
}
