import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/todos");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
interface ITodo {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
}
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const todos: ITodo[] = await getData();

  return (
    <div>
      <div className="p-4 border ">
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id}>
              <Link href={`/dashboard/${todo.id}`}>{todo.title} </Link>
            </li>
          ))}
        </ul>
      </div>

      <section>{children}</section>
    </div>
  );
}
