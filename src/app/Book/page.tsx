import Link from "next/link";
import Image from "next/image";

const Books = async () => {
  const data = await fetch("https://simple-books-api.glitch.me/books");
  const response = await data.json();

  return (
    <div className="grid justify-center p-8 gap-4">
      <h1 className="text-2xl text-center mt-3 font-black">All Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {response.map((book: any) => (
          <div key={book.id} className="p-4 border rounded shadow hover:shadow-lg transition-shadow duration-300">
            <Link href={`/Book/${book.id}`} className="block text-center">
              <Image
                src={`/images/${book.id}.jpeg`} // Example: Use `book.id` for dynamic image naming
                alt={book.name}
                width={150}
                height={200}
                className="mx-auto"
              />
              <p className="mt-2 text-lg font-semibold">{book.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
