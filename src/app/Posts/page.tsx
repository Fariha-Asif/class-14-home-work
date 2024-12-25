import Link from "next/link"

const Posts = async () => {
    const url = await fetch("https://jsonplaceholder.typicode.com/posts")
    const res = await url.json()
  return (
    <div className="grid justify-center p-8 gap-4 ">
        <h1 className="text-2xl text-center font-bold">All Posts</h1>
        <ol className="list-decimal space-y-2">
          {res.map((posts: any) => (
            <li key={posts.id}>
                <Link className="hover:border-b border-black"
                    href={`/Posts/${posts.id}`}>{posts.title}
                </Link>
            </li>
          ))}
        </ol>
    </div>
  )
}

export default Posts