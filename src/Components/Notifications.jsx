import { useState } from "react";
import data from "../../data.json";

export default function Notification() {
  const initialUserData = data.map((item, index) => ({
    ...item,
    read: index < 3 ? false : true,
  }));
  const [userData, setUserData] = useState(initialUserData);
  const [allRead, setAllRead] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3); // Add state for notification count

  const markAsRead = () => {
    const updatedUserData = userData.map((item) => ({
      ...item,
      read: true,
    }));
    setUserData(updatedUserData);
    setAllRead(true);
    setNotificationCount(0); 
  };

  return (
    <div className="bg-white w-[730px] pl-[32px] pt-[33px] pr-[30px] pb-[18px] rounded-[15px]">
      <header className="flex justify-between items-center">
        <h1 className="text-[24px] font-[800]">
          Notifications
          <span className="text-[16px] bg-[#0A327B] text-white px-[11px] py-[4px] ml-1 rounded-[6px]">
            {notificationCount}
          </span>
        </h1>
        <p className="cursor-pointer"onClick={markAsRead}>Mark all as read</p>
      </header>
      <div className="mt-[30px] flex flex-col gap-[20px]">
        {userData.map((item, index) => {
          const isRead = item.read || allRead;
          return (
            <div
              className={`flex gap-[20px] items-center ${
                isRead ? "bg-white" : "bg-[#F7FAFD]"
              } p-3`}
              key={index}>
              <img
                src={`./assets/avatar-${item.author
                  .replace(" ", "-")
                  .toLocaleLowerCase()}.webp`}
                className="w-[46px]"
                alt={`${item.author}'s Avatar`}
              />
              <div>
                <p>
                  <span>{item.author}</span> <span>{item.type}</span>{" "}
                  {item.content && item.content.includes(".webp") ? (
                    <img
                      className="float-right w-[45px] ml-[180px]"
                      src={item.content}
                      alt="Notification Content"
                    />
                  ) : (
                    <span>{item.content}</span>
                  )}
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
