import React, {useState} from 'react'
import Editor from './components/Editor'
import Preview from './components/Preview'

const App = () => {
  
  const [markdown, setMarkdown] = useState(`Welcome to my Markdown Previewer!`)

  return (
    <div className="min-h-screen bg-slate-500 flex flex-col p-4 justify-center space-y-10">
      <h1 className="text-3xl font-bold flex justify-center mb-4" >React Markdown Previewer</h1>  
      <div className='w-full h-full flex flex-col space-y-4 justify-center items-center'>
        <div className='w-1/2 '>
          <h2 className='text-xl font-semibold p-2'>Editor</h2>
          <Editor markdown={markdown} onChange={setMarkdown} />
        </div>
        <div className='w-3/4 h-1/2'>
          <h2 className='text-xl font-semibold p-2'>Previewer</h2>
          <Preview markdown={markdown} />
        </div>
      </div>
    </div>
  )
}

export default App