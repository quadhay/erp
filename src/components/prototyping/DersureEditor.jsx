import React, { useState } from 'react'
import {Editor, EditorState} from 'draft-js'
import 'draft-js/dist/Draft.css'
// import PropTypes from 'prop-types'

const DersureEditor = () => {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    )

    return (
        <div className="p-3" style={{maxWidth: '600px'}}>
            <Editor editorState={editorState} onChange={setEditorState} />
        </div>        
    )
}

// DersureEditor.propTypes = { inputs: PropTypes.object.isRequired, handleChange: PropTypes.func.isRequired }

export default DersureEditor
