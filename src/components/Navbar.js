import { useState } from "react";
import { BsFillSuitHeartFill, BsCartCheckFill } from "react-icons/bs";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import Cart from "./Cart";

const Navbar = ({ data, cart,setCart, setData}) => {
  let dataLike = data.filter((item) => item.like === true);

  const [likeState, setLikeState] = useState(false);
  const [cartBollen, setCartBollen] = useState(false);
  let likeStateChangeFunc = () => {
    setLikeState(!likeState);
  };

  let likeFunc = (id) => {
    setData(
      data.map((item) => (item.id === id ? { ...item, like: false } : item))
    );
  };

  let cartBollenFunc = () => {
    setCartBollen(!cartBollen);
  };

  return (
    <>
      <Cart cart={cart} cartBollen={cartBollen} setCart={setCart}/>
      <div className={`navbar ${likeState ? "navbar_active" : ""} `}>
        <h1>logo</h1>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>setting</li>
          <li className="natif_btn">
            <button className="like_btn" onClick={likeStateChangeFunc}>
              <BsFillSuitHeartFill className="navbar_icon" />
            </button>
            <span> {dataLike.length} </span>
          </li>
          <li className="natif_btn">
            <BsCartCheckFill className="navbar_icon" onClick={cartBollenFunc} />
            <span> {cart.length} </span>
          </li>
        </ul>
      </div>

      <div className={`likeModal ${likeState ? "modal_active" : ""}`}>
        <button onClick={() => setLikeState(false)} className="closeLikeModal">
          X
        </button>
        <div className="modalBody card_box">
          {dataLike.length > 0 ? (
            dataLike.map((obj, index) => (
              <div className="card" key={index}>
                <div className="like_box">
                  <button onClick={() => likeFunc(obj.id)}>
                    {obj.like ? (
                      <AiTwotoneLike className="like_btn" />
                    ) : (
                      <AiOutlineLike className="like_btn" />
                    )}
                  </button>
                </div>
                <div className="disCount">{obj.disCount}%</div>
                <figure>
                  <img src={obj.img} alt={obj.name} />
                </figure>
                <div className="card_text">
                  <div className="flex_between">
                    <h1> {obj.name} </h1>
                    <h2> color: {obj.color} </h2>
                  </div>
                  <div>
                    <h2> year: {obj.year} </h2>
                    <br />
                    <h3>
                      price: <del>{obj.price}$</del> $
                      {(obj.price - (obj.price / 100) * obj.disCount).toFixed(
                        2
                      )}
                    </h3>
                    <h3>
                      total:
                      {(obj.price - (obj.price / 100) * obj.disCount).toFixed(
                        2
                      ) * obj.count}
                      $
                    </h3>
                  </div>
                  <div className="btn_box">
                    <button className="plus">plus</button>
                    <h1> {obj.count} </h1>
                    <button className="minus">minus</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1> yoqtirgan malumotlar yo'q </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
