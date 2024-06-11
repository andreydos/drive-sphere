"use client"

import Link from "next/link"
import {AddCarForm} from "@/components/AddCarForm/AddCarForm"
import {useCallback, useState} from "react";

async function getData() {
  const res = await fetch('http://localhost:3210/cars')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default function Cars() {
  const [carsList, setCarsList] = useState([])

  const updateList = useCallback(async () => {
    setCarsList(await getData());
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="mt-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <Link
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Main{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Return to main page of Next.js site.
          </p>
        </Link>
      </div>

      <section className="mt-32 mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-1">
        <AddCarForm></AddCarForm>
        <button onClick={updateList}>Add and update(re-fetch)</button>
      </section>
      <section className="mt-32 mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-1">
        <p>List of cars from server</p>
        <div><p>carsList length: {carsList?.length}</p></div>
        <ul>
          <li></li>
        </ul>
      </section>
    </main>
  )
}
