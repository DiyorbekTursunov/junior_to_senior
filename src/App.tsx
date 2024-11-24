import Counter from "./components/Counter";
import TodoForm from "./components/todoForm";

function App() {
  return (
    <div className="min-h-screen w-full  flex flex-col items-center justify-center  p-8 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Diyorbek Tursunov
      </h1>

      <div className="max-w-md mx-auto space-y-6">
        <Counter />

        <TodoForm />
      </div>
    </div>
  );
}

export default App;
