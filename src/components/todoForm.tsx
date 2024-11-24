import { useRef, useState } from "react";

export default function TodoForm() {
  const [isVisible, setIsVisible] = useState(true);
  const [items, setItems] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  function addItem() {
    if (inputRef.current && inputRef.current.value) {
      setItems([...items, inputRef.current.value]);
      inputRef.current.value = "";
    }
  }

  function selectItem(item: string) {
    setSelectedItem(item);
  }

  return (
    <>
      <Form />
      
      <div className="space-y-4">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
        >
          {isVisible ? "Hide" : "Show"} Items
        </button>

        {isVisible && (
          <div className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                ref={inputRef}
                placeholder="Add item"
                className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={addItem}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Add item
              </button>
            </div>
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li
                  key={index}
                  onClick={() => selectItem(item)}
                  className="p-2 bg-white rounded shadow cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        <p className="text-gray-700 dark:text-gray-300">
          Selected item: {selectedItem}
        </p>
      </div>
    </>
  );
}

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form>
      <div className="space-y-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-gray-700 dark:text-gray-300">Name: {name}</p>
      </div>

      <div className="space-y-2">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-gray-700 dark:text-gray-300">Email: {email}</p>
      </div>
    </form>
  );
}
