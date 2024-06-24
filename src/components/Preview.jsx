import React from 'react'
// import {marked} from 'marked'
const Preview = ({ markdown }) => {
    return (
        <div
            id='preview'
            className='w-full h-full p-4 border-2 border-gray-300 rounded-lg bg-slate-300'
            dangerouslySetInnerHTML={{__html: window.marked(markdown) }}
        />
    )
}

export default Preview