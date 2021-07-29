import { Divider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  formCard: {
    padding: 10,
    margin: 10,
  },
});


export default function Form() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [projectName, setProjectName] = useState('')
  const test = useSelector(state => state.textInput.test);

  useEffect(() => {
    handleBlur()
  }, []);

  const handleBlur = () => {
    let code = (
      `# ${projectName}`
    );
    dispatch({ type: 'UPDATE_TEXT' , payload: { code: code } })
  }

  return (
    <Card className={classes.formCard}>
    <TextField value={projectName} onChange={(event)  => setProjectName(event.target.value)} onBlur={() => handleBlur()} label="Project name" />
    </Card>
  )
}