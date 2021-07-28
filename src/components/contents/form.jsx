import { Divider } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'


export default function Form() {
  const dispatch = useDispatch()
  const [projectName, setProjectName] = useState('title')
  const test = useSelector(state => state.textInput.test)

  const handleBlur = () => {
    dispatch({ type: 'UPDATE_TEXT' , payload: { test: projectName } })
  }

  return (
    <>
    <TextField value={projectName} onChange={(event)  => setProjectName(event.target.value)} onBlur={() => handleBlur()} label="Project name" />
    </>
  )
}