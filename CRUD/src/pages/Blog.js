import { DataContext } from "../Context";
import React, { useContext } from "react";

export function Blog() {
    const { likeData,} = useContext(DataContext);
    return (
        <>
            <div className="blog_cards">
                {likeData.map((item, index) => (
                    <div className="cards" key={index}>
                        <img src={item?.rasm} alt={item?.name} className="img1" />
                        <p className="p1">{item.name}</p>
                        <p className="p2">{item.about}</p>
                        <div className="pricesss">
                            <p className="p3">{item.narxi}$</p>
                            <p className="p4">{item.aksiya}%</p>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
} 