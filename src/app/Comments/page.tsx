import Link from "next/link"

const Comments = async () => {
    const url = await fetch("https://jsonplaceholder.typicode.com/comments")
    const res = await url.json()
  return (
    <div className="grid justify-center p-8 gap-4 ">
        <h1 className="text-2xl text-center font-bold">All Comments</h1>
        <ol className="list-decimal space-y-2">
          {res.map((comments: any) => (
            <li key={comments.id}>
                <Link className="hover:border-b border-black"
                    href={`/Comments/${comments.id}`}>{comments.name}
                </Link>
            </li>
          ))}
        </ol>
    </div>
  )
}

export default Comments