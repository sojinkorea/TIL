import React, { useState } from "react";
import styles from "./Main.module.css";

const Main = () => {
  const [inputs, setInputs] = useState({
    do: "",
    hours: "",
  });
  const onChange = (event) => {
    const { value, name } = event.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  return (
    <>
      <form>
        <div className={styles.text}>
          나는
          <input onChange={onChange} name="do" className={styles.input} type="text" placeholder="예)프로그래밍" />
          전문가가 될 것이다.
        </div>
        <div className={styles.text}>
          그래서 앞으로 매일 하루에
          <input onChange={onChange} value={inputs.hours} name="hours" className={styles.input} type="number" placeholder="예)5" />
          시간씩 훈련할 것이다.
        </div>
        <button className={styles.button}>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
      </form>
      <div className={styles.result}>
        <div>당신은 {inputs.do}전문가가 되기 위해서</div>
        <div>대략 {Math.round(10000 / inputs.hours)}일 이상 훈련하셔야 합니다! :) </div>
      </div>
    </>
  );
};

export default Main;
