import { useState } from 'react'
import './App.css'

function App() {
  const [file, setFile] = useState<File | null>(null)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e.target)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files)
    console.log(e.target)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="file" accept=".pdf,.doc,.docx" />
        <button type="submit">Submit</button>'
      </form>
    </>
  )
}

export default App
