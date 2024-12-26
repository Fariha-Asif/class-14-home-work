async function Photo(props: any) {
    const url = await fetch(`https://jsonplaceholder.typicode.com/photos/${props.params.id}`)
    const response = await url.json()
    return (
      <div className="lg:w-full xl:w-auto h-auto flex flex-col text-center mx-2 lg:mx-4 xl:mx-96 items-center justify-center mt-20 rounded-xl space-y-4 text-2xl p-5 bg-blue-200">
        <h3 className="text-3xl mb-3 font-black">Single Photo Details</h3>
        <div>
            <span className="font-bold">Album ID : </span>
            <span>{response.albumId}</span>
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
            <span className="font-bold">Url : </span>
            <span>{response.url}</span>
        </div>
        <div>
            <span className="font-bold">Thumbnail Url : </span>
            <span>{response.thumbnailUrl}</span>
        </div>
      </div>
    )
  }
  
  export default Photo