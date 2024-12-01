import { useLoaderData } from "react-router-dom"

export default function App() {
  const coffeeData = useLoaderData();
  return (
    <div className="text-6xl flex  justify-center font-rancho">Total Coffee:{coffeeData.length}</div>
  )
}
