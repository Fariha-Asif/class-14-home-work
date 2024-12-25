async function Comment(props: any) {
    const url = await fetch(`https://jsonplaceholder.typicode.com/comments/${props.params.id}`)
    const response = await url.json()
    return (
      <div className="w-96 h-auto flex flex-col text-center items-center justify-center ml-96 mt-20 rounded-xl space-y-4 text-2xl p-5 bg-blue-200">
        <h3 className="text-3xl mb-3 font-black">Single Comment Details</h3>
        <div>
            <span className="font-bold">User ID : </span>
            <span>{response.postId}</span>
        </div>
        <div>
            <span className="font-bold">ID : </span>
            <span>{response.id}</span>
        </div>
        <div>
            <span className="font-bold">Name : </span>
            <span>{response.name}</span>
        </div>
        <div>
            <span className="font-bold">Email : </span>
            <span>{response.email}</span>
        </div>
        <div>
            <span className="font-bold">Body : </span>
            <span>{response.body}</span>
        </div>
      </div>
    )
  }
  
  export default Comment