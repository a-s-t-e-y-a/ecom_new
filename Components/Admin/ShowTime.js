import { useEffect, useState } from "react";

function ShowTime() {
  const [num, setNum] = useState(0);
  const arr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday"
  ];

  useEffect(() => {
    setTimeout(() => {
      setNum((value) => value + 1);
    }, 1000);
  }, [num]);

  const hrs = new Date().getHours();
  const min = new Date().getMinutes();
  const sec = new Date().getSeconds();
  const days = new Date().getDay();

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {/* <h3>{arr[days]}</h3> */}
        <h4>
          {"  "}
          {hrs < 10 ? "0" + hrs : hrs} : {min < 10 ? "0" + min : min} :{" "}
          {sec < 10 ? "0" + sec : sec}{" "}
        </h4>
      </div>
    </div>
  );
}

export default ShowTime;
