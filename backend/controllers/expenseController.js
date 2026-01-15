import Expense from "../models/Expense.js";

// ADD EXPENSE
export const addExpense = async (req, res) => {
  try {
    const { title, amount, category } = req.body;

    if (!title || !amount || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const expense = await Expense.create({
      user: req.user.id, // from JWT
      title,
      amount,
      category,
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// GET USER EXPENSES
export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id }).sort({ createdAt: -1 });

    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE EXPENSE
export const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    // Ensure user owns the expense
    if (expense.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await expense.deleteOne();

    res.status(200).json({ message: "Expense deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
