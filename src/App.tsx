import './App.css'
import { useAppDispatch } from './hook'
import data from './mock.json'
import { DataType } from './type'
import { addCart } from './store/features/cart/cartSlice'

function App() {
  const itemList: DataType[] = data.items
  const dispatch = useAppDispatch()

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          itemList.map((item) => (
            <div key={item.id} style={{ textAlign: 'left', width: 250, border: '1px solid white', padding: 15, margin: 5 }}>
              <p><b>ID :</b> {item.id}</p>
              <p><b>Name :</b> {item.name}</p>
              <p><b>Price :</b> {item.price}</p>
              <p><b>Description :</b> {item.description}</p>
              <button onClick={() => dispatch(addCart(item))}>Add to cart</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
