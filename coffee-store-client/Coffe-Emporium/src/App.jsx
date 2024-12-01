import { useLoaderData } from "react-router-dom"
import Card from "./components/Card";

export default function App() {
  const coffeeData = useLoaderData();
  return (
    
    <div >
      <div className="grid md:grid-cols-2 gap-4 border w-9/12 mx-auto ">
        {coffeeData.map((coffee)=>{
           return <Card key={coffee._id} coffee={coffee}/>
        })}
      </div>
    </div>
  )
}
