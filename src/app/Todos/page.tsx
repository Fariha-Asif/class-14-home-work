import Link from "next/link"

const Todos = async () => {
    const url = await fetch("https://jsonplaceholder.typicode.com/todos")
    const res = await url.json()
  return (
    <div className="grid justify-center p-8 gap-4 ">
        <h1 className="text-2xl text-center font-bold">All Todos</h1>
        <ol className="list-decimal space-y-2">
          {res.map((todos: any) => (
            <li key={todos.id}>
                <Link className="hover:border-b border-black"
                    href={`/Todos/${todos.id}`}>{todos.title}
                </Link>
            </li>
          ))}
        </ol>
    </div>
  )
}

export default Todos