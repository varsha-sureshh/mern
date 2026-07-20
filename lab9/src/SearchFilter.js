import { useState } from "react";

export default function SearchFilter() {
  const [q, setQ] = useState("");
  const items = ["Apple","Banana","Orange","Grapes","Pineapple","Mango","Strawberry","Jackfruit"];

  return (
    <>
      <input onChange={e=>setQ(e.target.value)} placeholder="Search..." />
      {items.filter(i=>i.toLowerCase().includes(q.toLowerCase()))
        .map((i,k)=><li key={k}>{i}</li>)}
    </>
  );
}