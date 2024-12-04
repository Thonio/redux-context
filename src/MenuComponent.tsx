import { NavLink } from "react-router"
import { RootState } from "./store/store"
import { useAppSelector } from "./hook"

export const MenuComponent = () => {
  const { item, total } = useAppSelector((state: RootState) => state.cart)
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15 }}>
      <nav>
        <NavLink style={{ marginRight: 10 }} to='/' end>Shop</NavLink>
        <NavLink to='/cart' end>Cart</NavLink>
      </nav>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: 10 }}><b>Cart :</b> {item.length}</div>
        <div><b>Total :</b> {total.toFixed(2)}$</div>
      </div>
    </div>
  )
}
