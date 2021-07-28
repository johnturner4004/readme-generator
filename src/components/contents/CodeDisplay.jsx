import Card from '@material-ui/core/Card';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function CodeDisplay() {
  const textInput = useSelector(state => state.textInput);
  const dispatch = useDispatch();

  return(
    <Card>
      {JSON.stringify(textInput)}
      <SyntaxHighlighter language="markdown" style={atomDark}>
        {`# ${textInput.test}`}
      </SyntaxHighlighter>
    </Card>
  )
}