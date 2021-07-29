import Card from '@material-ui/core/Card';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  codeCard: {
    margin: 10,
    padding: 10,
    height: '100%',
    backgroundColor: '#000',
  },
});

export default function CodeDisplay() {
  const classes = useStyles();
  const textInput = useSelector(state => state.textInput);
  const dispatch = useDispatch();

  return(
    <Card className={classes.codeCard}>
      {textInput ?
      <SyntaxHighlighter className={classes.codeCard} language="markdown" style={atomDark}>
        {textInput.code}
      </SyntaxHighlighter>
      :""}
    </Card>
  )
}