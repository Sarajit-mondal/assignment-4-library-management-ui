import { Button } from "./components/ui/button"
import { decrement, increment } from "./redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hooks"



function App() {
const value = useAppSelector(state => state.counter.value)
const dispatchEvent = useAppDispatch()

  return (
   <>
   <div>
    <button onClick={()=>dispatchEvent(decrement())} className="text-3xl font-bold mx-5">-</button>
    <button className="text-3xl font-bold mx-5">{value
      }</button>
    <Button  onClick={()=>dispatchEvent(increment())} className="text-3xl font-bold mx-5">+</Button>
   </div>
   </>
  )
}

export default App
