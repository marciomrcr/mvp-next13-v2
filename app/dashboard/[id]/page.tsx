import { use } from "react";

async function getData(id: any) {
  const res = await fetch(`http://localhost:3000/todos/${id}`);
  return res.json();
}

// export default async function PageParams({ params, searchParams }: any) {
//   //const { id } = params;
//   const todo = await getData(params.id);

//   console.log(todo);

//   return (
//     <div>
//       <hr className="border-b mt-5 mb-2"></hr>
//       Page
//       <pre>{JSON.stringify(todo, null, 4)}</pre>
//     </div>
//   );
// }

export default function Page({ params, searchParams }: any) {
  const { id } = params;
  const todo = use(getData(id));
  return (
    <div>
      <hr className="border-b mt-5 mb-2"></hr>
      <h1>{todo?.id}</h1>
      <div>{todo?.title}</div>
      <div>{todo?.name}</div>
    </div>
  );
}

// export async function generateStaticParams({ params, searchParams }: any) {
//   const todo = await getData(params.id);

//   console.log(todo);

//   return <div>{`${params.id}: ${todo.id}`}</div>;
// }
