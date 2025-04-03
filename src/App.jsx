export default function App() {
  return (
    <div className="flex">
      <div className="flex flex-col justify-center items-center w-full">
        <section className="flex p-10">
          <h1 className="text-4xl font-bold text-center">TO-DO LISTS</h1>
        </section>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <input
              id="task"
              name="task"
              type="text"
              placeholder="Enter a task..."
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
