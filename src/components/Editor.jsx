import React from 'react'

const Editor = ({markdown, onChange}) => {
  return (
    <textarea 
        id='editor'
        className='w-full h-full p-4 border-2 border-gray-300 rounded-lg'
        value={markdown}
        onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default Editor;