import swal from "sweetalert";
import revalidateLoaderData from "../main";
export default function Card({ coffee }) {
    function handleDelete(id){
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((result) => {
            if(result){
                fetch(`http://localhost:5000/coffee/${id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                          });
                    }
                })
                revalidateLoaderData();
            }
          });
    }

  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="p-4">
        <img src={photo} alt="Movie" className="rounded-lg"/>
      </figure>
      <div className="flex items-center p-4 gap-24">
        <div className="">
          <h2 className="card-title">Name:{name}</h2>
          <h2 className="card-title">Chef: {chef}</h2>
          <h2 className="card-title">Details: {details}</h2>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <button className="btn ">Watch</button>
          <button className="btn ">Update</button>
          <button onClick={()=>handleDelete(_id)} className="btn bg-red-500">Delete</button>
        </div>
      </div>
    </div>
  );
}
