import { useState, useEffect } from "react"; // ✅ ADDED useEffect
import Navbar from "../components/Navbar";
import api from "../api/axios"; // ✅ ADDED axios instance for backend calls

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const res = await api.get("/expenses");
        setExpenses(res.data); 
      } catch (error) {
        console.error("Failed to fetch expenses", error);
      }
    };

    fetchExpenses();
  }, []);

  const handleAddExpense = async (e) => {
    e.preventDefault();

    if (!title || !amount) return;

    try {
      const res = await api.post("/expenses", {
        title,
        amount,
        category,
      });

      setExpenses([res.data, ...expenses]);

      setTitle("");
      setAmount("");
      setCategory("Food");
    } catch (error) {
      console.error("Failed to add expense", error);
    }
  };

  const handleDeleteExpense = async (id) => {
    try {
      await api.delete(`/expenses/${id}`);
      setExpenses(expenses.filter((expense) => expense._id !== id));
    } catch (error) {
      console.error("Failed to delete expense", error);
    }
  };
  const filteredExpenses = expenses.filter((expense) =>
    expense.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalAmount = filteredExpenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  return (
    <div className="bg-slate-200 min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto p-6 space-y-8">
        {/* Dashboard Title */}
        <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
          Expense Dashboard
        </h1>

        {/* Add Expense Form */}
        <form
          onSubmit={handleAddExpense}
          className="bg-white rounded-2xl shadow-md p-6 space-y-6 border border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-gray-700">
            Add New Expense
          </h2>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-600 mb-1 font-medium">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Lunch"
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 bg-gray-50"
              />
            </div>

            <div className="flex-1">
              <label className="block text-gray-600 mb-1 font-medium">
                Amount
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="e.g., 200"
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 bg-gray-50"
              />
            </div>

            <div className="flex-1">
              <label className="block text-gray-600 mb-1 font-medium">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 bg-gray-50"
              >
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Shopping">Shopping</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-5 py-2 rounded-lg"
          >
            Add Expense
          </button>
        </form>

        {/* Total Expenses */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white rounded-lg shadow-md p-4 text-center">
          <h3 className="text-2xl font-bold inline">Total Expenses: </h3>
          <p className="text-2xl font-bold inline">₹{totalAmount}</p>
        </div>

        {/* Search */}
        <div className="flex justify-end">
          <input
            type="text"
            placeholder="Search expenses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/3 border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 bg-gray-50"
          />
        </div>

        {/* Expense List */}
        <h2 className="text-2xl font-semibold text-gray-700">Expenses</h2>

        <div className="grid gap-4">
          {filteredExpenses.length > 0 ? (
            filteredExpenses.map((expense) => (
              <div
                key={expense._id} // ✅ MongoDB ID
                className="flex justify-between items-center bg-white rounded-2xl shadow-md p-4 border"
              >
                <div>
                  <p className="font-semibold text-lg">{expense.title}</p>
                  <p className="text-gray-500 text-sm">
                    ₹{expense.amount} - {expense.category}
                  </p>
                </div>

                <button
                  onClick={() => handleDeleteExpense(expense._id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center text-lg">
              No expenses found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
