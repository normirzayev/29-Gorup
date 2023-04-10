import { useContext } from "react";
import { DataContext } from "../Context.js";

export function Home() {
    const { getInputData, inputData, sendData } = useContext(DataContext);
    return (
        <>
            <div className="localPage">
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
                        placeholder="about"
                        name="about"
                        onInput={getInputData}
                        value={inputData?.about}
                    />
                    <input
                        type="text"
                        placeholder="narxi"
                        name="narxi"
                        onInput={getInputData}
                        value={inputData?.narxi}
                    />
                    <input
                        type="text"
                        placeholder="aksiya"
                        name="aksiya"
                        onInput={getInputData}
                        value={inputData?.aksiya}
                    />
                    <input
                        type="text"
                        placeholder="soni"
                        name="soni"
                        onInput={getInputData}
                        value={inputData?.soni}
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
    )
}  