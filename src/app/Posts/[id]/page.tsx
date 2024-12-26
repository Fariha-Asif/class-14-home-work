async function Post(props: any) {
    const url = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.id}`)
    const response = await url.json()
    return (
      <div className="w-96 h-auto flex flex-col text-center items-center justify-center ml-6 md:ml-36 lg:ml-96 mt-20 rounded-xl space-y-4 text-2xl p-5 bg-blue-200">
        <h3 className="text-3xl mb-3 font-black">Single Post Details</h3>
        <div>
            <span className="font-bold">User ID : </span>
            <span>{response.userId}</span>
        </div>
        <div>
            <span className="font-bold">ID : </span>
            <span>{response.id}</span>
        </div>
        <div>
            <span className="font-bold">Title : </span>
            <span>{response.title}</span>
        </div>
        <div>
            <span className="font-bold">Body : </span>
            <span>{response.body}</span>
        </div>
      </div>
    )
  }
  
  export default Post