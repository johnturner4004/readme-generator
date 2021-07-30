import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const useStyles = makeStyles({
  codeCard: {
    padding: 10,
    margin: 10,
    height: '100%',
    backgroundColor: '#1D1F21',
  },
});

export default function CodeDisplay() {
  const classes = useStyles();
  const textInput = useSelector(state => state.textInput);

  return(
    <Card className={classes.codeCard}>
      {textInput ?
      <SyntaxHighlighter 
        wrapLongLines={true}
        className={classes.codeCard} 
        language="markdown" 
        style={atomDark}
      >
        {textInput.code}
      </SyntaxHighlighter>
      :""}
    </Card>
  )
}