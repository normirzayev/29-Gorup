import { useState } from "react";
import { BsFillSuitHeartFill, BsCartCheckFill } from "react-icons/bs";
const Navbar = ({ data }) => {
  let dataLike = data.filter((item) => item.like === true);

  const [likeState, setLikeState] = useState(false);
  let likeStateChangeFunc = () => {
    setLikeState(!likeState);
  };

  return (
    <>
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
            <BsCartCheckFill className="navbar_icon" />
            <span>0</span>
          </li>
        </ul>
      </div>

      <div className={`likeModal ${likeState ? "modal_active" : ""}`}>
        <button onClick={() => setLikeState(false)}>X</button>
        <div className="modalBody card_box">
          {dataLike.map((obj, index) => (
            <div className="card" key={index}>
              <div className="like_box">
                {/* <button onClick={() => likeFunc(obj)}>
                  {obj.like ? (
                    <AiTwotoneLike className="like_btn" />
                  ) : (
                    <AiOutlineLike className="like_btn" />
                  )}
                </button> */}
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
                    {(obj.price - (obj.price / 100) * obj.disCount).toFixed(2)}
                  </h3>
                  <h3>
                    total:
                    {(obj.price - (obj.price / 100) * obj.disCount).toFixed(2) *
                      obj.count}
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
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
