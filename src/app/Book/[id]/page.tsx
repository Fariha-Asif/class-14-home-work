import Image from "next/image"

const Book = async (props:any) => {
      const data = await fetch(`https://simple-books-api.glitch.me/books/${props.params.id}`)
      const response = await data.json()
  
    return (
      <div className="p-4 pt-12 flex flex-col items-center gap-3 justify-center text-3xl">
        <Image
            src={`/images/${props.params.id}.jpeg`} 
            alt={props.name}
            width={150}
            height={200}
            className="mx-auto"
            />
            <div>
                <span className="font-bold">Book ID: </span>
                <span>{response.id}</span>  
            </div>
            <div>
                <span className="font-bold">Book Name: </span>
                <span>{response.name}</span>
            </div>
            <div>
                <span className="font-bold">Book Author: </span>
                <span>{response.author}</span>
            </div>
            <div>
                <span className="font-bold">Book Price: </span>
                <span>{response.price}</span>
            </div>
            <div>
                <span className="font-bold">Available: </span>
                <span>{response.available ? "Yes" : "No"}</span>
            </div>
      </div>
    )
  }
  
  export default Book