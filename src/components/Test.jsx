import React, { useEffect, useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const [dirct, setDirect] = useState(true);

  useEffect(() => {
    let timer;

    if (start) {
      timer = setInterval(() => {
        console.log(dirct);
       console.log(count);
       
       if (dirct) {
        setCount((c) => c - 1);
      } else {
        setCount((c) => c + 1);
      }
       
        if (count === 10) {
          // clearInterval(timer)
          console.log("hei here");

          // setDirect((prev) => !prev);
          setDirect(true)
        }

        if (count == 0) {
          console.log('0 here');
          
          // setDirect((prev) => !prev);
          setDirect(false)
        }

      }, 1000);
    }

    return () => clearInterval(timer);
  }, [start, count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setStart(true)}>start</button>
      <button onClick={() => setStart(false)}>stop</button>
    </div>
  );
};

export default Test;
