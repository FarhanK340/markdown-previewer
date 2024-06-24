import React, {useState} from 'react'
import Editor from './components/Editor'
import Preview from './components/Preview'

const App = () => {
  
  const [markdown, setMarkdown] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`)

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