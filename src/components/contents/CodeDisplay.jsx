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
    fontSize: '0.6em',
  },
});

export default function CodeDisplay() {
  const classes = useStyles();
  const store = useSelector(store => store);

  return(
    <Card className={classes.codeCard}>
      <div>
      {/* {store.shieldCode ?
      <SyntaxHighlighter 
        wrapLongLines={true}
        language="markdown" 
        style={atomDark}
      >
        {store.shieldCode}
      </SyntaxHighlighter>
      :""}
      {store.overviewCode ?
      <SyntaxHighlighter 
        wrapLongLines={true}
        language="markdown" 
        style={atomDark}
      >
        {store.overviewCode}
      </SyntaxHighlighter>
      :""}
      {store.iconList ?
      <SyntaxHighlighter 
        wrapLongLines={true}
        language="markdown" 
        style={atomDark}
      >
        {store.iconList}
      </SyntaxHighlighter>
      :""}
      {store.gettingStartedCode ?
      <SyntaxHighlighter 
        wrapLongLines={true}
        language="markdown" 
        style={atomDark}
      >
        {store.gettingStartedCode}
      </SyntaxHighlighter>
      :""}
      {store.licenseCode ?
      <SyntaxHighlighter
        wrapLongLines={true}
        language="markdown"
        style={atomDark}
      >
        {store.licenseCode}
      </SyntaxHighlighter>
      :""}
      {store.conclusionCode ?
      <SyntaxHighlighter
        wrapLongLines={true}
        language="markdown"
        style={atomDark}
      >
        {store.conclusionCode}
      </SyntaxHighlighter>
      :""} */}
      {store ?
      <SyntaxHighlighter
      wrapLongLines={true}
      language="markdown"
      style={atomDark}
      >
        {store.shieldCode +
        store.overviewCode +
        store.iconList +
        store.gettingStartedCode +
        store.licenseCode +
        store.conclusionCode}
      </SyntaxHighlighter>
      :""}
      </div>
    </Card>
  )
}