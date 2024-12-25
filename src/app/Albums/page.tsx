import Link from "next/link"

const Albums = async () => {
    const url = await fetch("https://jsonplaceholder.typicode.com/albums")
    const res = await url.json()
  return (
    <div className="grid justify-center p-8 gap-4 ">
        <h1 className="text-2xl text-center font-bold">All Albums</h1>
        <ol className="list-decimal space-y-2">
          {res.map((albums: any) => (
            <li key={albums.id}>
                <Link className="hover:border-b border-black"
                    href={`/Albums/${albums.id}`}>{albums.title}
                </Link>
            </li>
          ))}
        </ol>
    </div>
  )
}

export default Albums