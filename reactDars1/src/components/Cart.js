function Cart({ cart, cartBollen,setCart }) {

  let cartDelete = (id) => {
    setCart(
      cart.filter(val => val.id !== id)
    )
  }

  return (
    <>
      <div className={`cart ${cartBollen ? "cart_active" : ""} `}>
        <table border={1}>
          <thead>
            <tr>
              <th>№</th>
              <th>nomi</th>
              <th>color</th>
              <th>year</th>
              <th>price</th>
              <th>disCount</th>
              <th>soni</th>
              <th>image</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr>
                <th> {index + 1} </th>
                <td> {item.name} </td>
                <td> {item.price}$ </td>
                <td> {item.color} </td>
                <td> {item.year} </td>
                <td> {item.disCount}%</td>
                <td> {item.count} </td>
                <td>
                  <img src={item.img} alt={item.name} />
                </td>
                <td>
                  <button onClick={() => cartDelete(item.id)} > delete </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Cart;
