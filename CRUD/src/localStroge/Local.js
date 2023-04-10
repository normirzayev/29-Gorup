import { useContext } from "react";
import { DataContext } from "../Context.js";

export function Local() {
  const { getInputData, inputData, sendData } = useContext(DataContext);
  return (
    <>
      <div className="localPage">
        <div className="navs"></div>
        <form>
          <input
            type="text"
            placeholder="name"
            name="name"
            onInput={getInputData}
            value={inputData?.name}
          />
          <input
            type="text"
            placeholder="surName"
            name="surname"
            onInput={getInputData}
            value={inputData?.surname}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            onInput={getInputData}
            value={inputData?.email}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onInput={getInputData}
            value={inputData?.password}
          />
          <input
            type="text"
            placeholder="image url... "
            onInput={getInputData}
            value={inputData?.rasm}
            name={"rasm"}
          />
          <button type="button" onClick={sendData}>
            yuborish
          </button>
        </form>
      </div>
    </>
  );
}
