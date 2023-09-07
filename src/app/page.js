"use client";
import { increment, decrement } from "@/redux/features/counterSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      count:{count}
      <button
        className="button"
        onClick={() => {
          dispatch(decrement());
          console.log(1);
        }}
      >
        Aumentar
      </button>
    </main>
  );
}
