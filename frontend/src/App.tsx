import { useState } from 'react'
import './App.css'

function App() {
  const [file, setFile] = useState<File | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files)
    console.log(e.target)
    setFile(e.target.files![0])
    console.log(e.target.files![0])
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const url = 'http://localhost:3000/upload' // TODO: add to .env
    const formData = new FormData()
    formData.append('document_file', file!)
    formData.append('content-type', 'multipart/form-data')
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  return (
    <>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="file"
          name="document_file"
          accept=".pdf,.doc,.docx"
        />
        <button type="submit">Submit</button>'
      </form>
    </>
  )
}

export default App
