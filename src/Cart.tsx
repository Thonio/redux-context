import { useAppDispatch, useAppSelector } from "./hook"
import { clearCart, removeCart } from "./store/features/cart/cartSlice"
import { RootState } from "./store/store"

export const Cart = () => {
  const { item, total } = useAppSelector((state: RootState) => state.cart)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div style={{ textAlign: 'right', marginBottom: 15 }}>
        <button style={{ marginRight: 15 }} onClick={() => dispatch(clearCart())}>Clear cart</button><b>TOTAL :</b> {total.toFixed(2)} $
      </div>
      {
        item.map((item) => (
          <div key={item.id} style={{ border: '1px solid white', padding: 15, marginBottom: 10, textAlign: 'left' }}>
            <div><b>ID :</b> {item.id}</div>
            <div><b>Name :</b> {item.name}</div>
            <div><b>Price :</b> {item.price}</div>
            <div><b>Description :</b> {item.description}</div>
            <div><b>Quantity :</b> {item.stock}</div>
            <div style={{ textAlign: 'right' }}>
              <button onClick={() => dispatch(removeCart(item))}>Remove from cart</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}
