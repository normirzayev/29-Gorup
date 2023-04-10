import React, { useContext } from "react";
import { DataContext } from "../Context";

export function About() {
    const { localData, ochirish, editFunc, plus, minus, sanoq, like, } = useContext(DataContext);
    return (
        <>
            <div className="tebles">
                <table border={1}>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>name</th>
                            <th>about</th>
                            <th>narxi</th>
                            <th>aksiya</th>
                            <th>soni</th>
                            <th>image</th>
                            <th>action</th>
                            <th>action2</th>
                            <th>Like</th>
                        </tr>
                    </thead>
                    <tbody>
                        {localData.length > 0 ? (
                            localData.map((item, index) => (
                                <tr key={item.id}>
                                    <th>{index + 1}</th>
                                    <td>{item?.name}</td>
                                    <td>{item?.about}</td>
                                    <td>{item?.narxi}$</td>
                                    <td>{item?.aksiya}%</td>
                                    <td>{item?.soni}</td>
                                    <td>
                                        <img src={item?.rasm} alt={item?.name} />
                                    </td>

                                    <td>
                                        <div className="removesr">
                                            <button
                                                className="edit"
                                                onClick={() => editFunc(item)}
                                            >
                                                edit
                                            </button>
                                            <button
                                                className="delet"
                                                onClick={() => ochirish(item.id)}
                                            >
                                                delete
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="sanoql">
                                            <button className="plus" onClick={plus}>
                                                plus
                                            </button>
                                            <p>
                                                count: {sanoq}
                                            </p>
                                            <button className="minus" onClick={minus}>
                                                minus
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <button onClick={like} className="like">
                                            Like
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <th colSpan={10}>no data...</th>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
} 