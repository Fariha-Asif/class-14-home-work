import Link from "next/link"

const Photos = async () => {
    const url = await fetch("https://jsonplaceholder.typicode.com/photos")
    const res = await url.json()
  return (
    <div className="grid justify-center p-8 gap-4 ">
        <h1 className="text-2xl text-center font-bold">All Photos</h1>
        <ol className="list-decimal space-y-2">
          {res.map((photos: any) => (
            <li key={photos.id}>
                <Link className="hover:border-b border-black"
                    href={`/Photos/${photos.id}`}>{photos.title}
                </Link>
            </li>
          ))}
        </ol>
    </div>
  )
}

export default Photos