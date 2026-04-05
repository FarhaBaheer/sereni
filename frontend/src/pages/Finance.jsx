import { useState } from "react"
import Navbar from "../components/Navbar"

function Finance() {

  // Current balance stored as string for editable input
  const [balance, setBalance] = useState("0")

  // Daily Expenses
  const [expenseDate, setExpenseDate] = useState("")
  const [expense, setExpense] = useState("")
  const [amount, setAmount] = useState("")
  const [expenses, setExpenses] = useState([])

  // Money Owed To Me
  const [person, setPerson] = useState("")
  const [oweAmount, setOweAmount] = useState("")
  const [owedList, setOwedList] = useState([])

  // My Debts
  const [debtPerson, setDebtPerson] = useState("")
  const [debtAmount, setDebtAmount] = useState("")
  const [debts, setDebts] = useState([])

  // Finance Notes
  const [noteDate, setNoteDate] = useState("")
  const [noteText, setNoteText] = useState("")
  const [notesList, setNotesList] = useState([])

  // Add Expense
  const addExpense = () => {
    if (!expense || !amount || !expenseDate) return

    const newExpense = {
      id: Date.now(),
      date: expenseDate,
      name: expense,
      amount: Number(amount)
    }

    setExpenses([...expenses, newExpense])
    // Update balance as string
    setBalance((prev) => (Number(prev) - Number(amount)).toString())

    setExpense("")
    setAmount("")
  }

  // Delete Expense
  const deleteExpense = (id) => {
    const removed = expenses.find((e) => e.id === id)
    setBalance((prev) => (Number(prev) + removed.amount).toString())
    setExpenses(expenses.filter((e) => e.id !== id))
  }

  // Filter expenses for selected date
  const todaysExpenses = expenses.filter(e => e.date === expenseDate)

  // Money Owed To Me
  const addOwed = () => {
    if (!person || !oweAmount) return
    setOwedList([...owedList, { id: Date.now(), name: person, amount: Number(oweAmount) }])
    setPerson("")
    setOweAmount("")
  }

  const deleteOwed = (id) => {
    setOwedList(owedList.filter(o => o.id !== id))
  }

  // My Debts
  const addDebt = () => {
    if (!debtPerson || !debtAmount) return
    setDebts([...debts, { id: Date.now(), name: debtPerson, amount: Number(debtAmount) }])
    setDebtPerson("")
    setDebtAmount("")
  }

  const deleteDebt = (id) => {
    setDebts(debts.filter(d => d.id !== id))
  }

  // Finance Notes
  const addNote = () => {
    if (!noteDate || !noteText) return
    setNotesList([...notesList, { id: Date.now(), date: noteDate, text: noteText }])
    setNoteText("")
  }

  const deleteNote = (id) => {
    setNotesList(notesList.filter(n => n.id !== id))
  }

  const todaysNotes = notesList.filter(n => n.date === noteDate)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f2ff] via-[#ece6ff] to-[#e2d9ff] flex flex-col">

      <Navbar />

      {/* Title */}
      <div className="text-center pt-10 pb-6">
        <h1 className="text-5xl font-bold text-purple-500">Finance</h1>
        <p className="text-gray-600 mt-2">Manage money calmly</p>
      </div>

      {/* Cards */}
      <div className="flex justify-center px-10 pb-10">
        <div className="grid grid-cols-2 gap-8 w-full max-w-6xl">

          {/* Balance */}
          <div className="bg-white p-8 rounded-3xl shadow-lg text-center col-span-2">
            <h3 className="text-xl text-purple-400 mb-2">Current Balance</h3>
            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              className="text-4xl font-bold text-purple-600 text-center w-full border-0 bg-transparent focus:outline-none"
            />
          </div>

          {/* Daily Expenses */}
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">Daily Expenses</h3>

            <input
              type="date"
              value={expenseDate}
              onChange={(e) => setExpenseDate(e.target.value)}
              className="w-full border p-2 rounded-lg mb-2"
            />
            <input
              value={expense}
              onChange={(e) => setExpense(e.target.value)}
              placeholder="Expense"
              className="w-full border p-2 rounded-lg mb-2"
            />
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              className="w-full border p-2 rounded-lg mb-2"
            />

            <button
              onClick={addExpense}
              className="bg-purple-300 text-white px-4 py-1 rounded-lg"
            >
              Add
            </button>

            <div className="mt-3 space-y-2">
              {expenseDate === "" ? (
                <p className="text-gray-400 text-sm">Select a date to see expenses.</p>
              ) : todaysExpenses.length === 0 ? (
                <p className="text-gray-400 text-sm">No expenses for this date.</p>
              ) : (
                todaysExpenses.map((e) => (
                  <div key={e.id} className="flex justify-between bg-[#f6f2ff] p-2 rounded-lg">
                    <span>{e.name}</span>
                    <div className="flex gap-2">
                      <span>₹{e.amount}</span>
                      <button
                        onClick={() => deleteExpense(e.id)}
                        className="text-red-400"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Money Owed To Me */}
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">Money Owed To Me</h3>
            <input
              value={person}
              onChange={(e) => setPerson(e.target.value)}
              placeholder="Person"
              className="w-full border p-2 rounded-lg mb-2"
            />
            <input
              value={oweAmount}
              onChange={(e) => setOweAmount(e.target.value)}
              placeholder="Amount"
              className="w-full border p-2 rounded-lg mb-2"
            />

            <button
              onClick={addOwed}
              className="bg-purple-300 text-white px-4 py-1 rounded-lg"
            >
              Add
            </button>

            <div className="mt-3 space-y-2">
              {owedList.map((o) => (
                <div key={o.id} className="flex justify-between bg-[#f6f2ff] p-2 rounded-lg">
                  <span>{o.name}</span>
                  <div className="flex gap-2">
                    <span>₹{o.amount}</span>
                    <button
                      onClick={() => deleteOwed(o.id)}
                      className="text-red-400"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* My Debts */}
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">My Debts</h3>
            <input
              value={debtPerson}
              onChange={(e) => setDebtPerson(e.target.value)}
              placeholder="Person"
              className="w-full border p-2 rounded-lg mb-2"
            />
            <input
              value={debtAmount}
              onChange={(e) => setDebtAmount(e.target.value)}
              placeholder="Amount"
              className="w-full border p-2 rounded-lg mb-2"
            />

            <button
              onClick={addDebt}
              className="bg-purple-300 text-white px-4 py-1 rounded-lg"
            >
              Add
            </button>

            <div className="mt-3 space-y-2">
              {debts.map((d) => (
                <div key={d.id} className="flex justify-between bg-[#f6f2ff] p-2 rounded-lg">
                  <span>{d.name}</span>
                  <div className="flex gap-2">
                    <span>₹{d.amount}</span>
                    <button
                      onClick={() => deleteDebt(d.id)}
                      className="text-red-400"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Finance Notes */}
          <div className="bg-white p-6 rounded-3xl shadow-lg col-span-2">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">Finance Notes</h3>

            <input
              type="date"
              value={noteDate}
              onChange={(e) => setNoteDate(e.target.value)}
              className="w-full border p-2 rounded-lg mb-2"
            />

            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Write your note..."
              className="w-full border p-3 rounded-lg mb-2"
            />

            <button
              onClick={addNote}
              className="bg-purple-300 text-white px-4 py-1 rounded-lg mb-3"
            >
              Add Note
            </button>

            <div className="space-y-2">
              {noteDate === "" ? (
                <p className="text-gray-400 text-sm">Select a date to see notes.</p>
              ) : todaysNotes.length === 0 ? (
                <p className="text-gray-400 text-sm">No notes for this date.</p>
              ) : (
                todaysNotes.map((n) => (
                  <div key={n.id} className="flex justify-between bg-[#f6f2ff] p-2 rounded-lg">
                    <span>{n.text}</span>
                    <button
                      onClick={() => deleteNote(n.id)}
                      className="text-red-400"
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Finance


