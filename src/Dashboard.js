import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, List, ListItem, ListItemText, Chip, Button, TextField } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px',
    padding: theme.spacing(3, 2),
  },
  flex: {
    display: 'flex',
  },

  topicsWindow: {
    width: '30%',
    height: '300px',
    borderRight: '1px solid lightgray'
  },
  chatWindow: {
    width: '70%',
    height: '300px',
    padding: '20px'
  },
  chatBox: {
    width: '85%'
  },
  button: {
    width: '15%'
  },
}));


export default function Dashboard() {

  const classes = useStyles();

  const [textValue, changeTextValue] = React.useState('');

  return (
    <div>
      <Paper className={classes.root}>

          <Typography variant='h4' component='h4'>
              Lake chat app
          </Typography>
          <Typography variant='h6' component='h6'>
              Topic placeholder
          </Typography>


          <div className={classes.flex}>
              <div className={classes.topicsWindow}>
                <List>
                  {
                      ['topic'].map(topic => (
                        <ListItem key={topic} button>
                            <ListItemText primary={topic} />
                        </ListItem>
                      ))
                  }
                </List>
              </div>

              <div className={classes.chatWindow}>
                {
                    [{ from: 'user', msg: 'hello' }].map((chat, i) => (
                      <div className={classes.flex} key={i}>
                        <Chip label={chat.from} className={classes.chip} />
                        <Typography variant='p'>
                            {chat.msg}
                        </Typography>
                       </div>
                    ))
                }
              </div>
          </div>

          <div className={classes.flex}>
              <TextField
                label='Send a chat'
                className={classes.chatBox}
                value={textValue}
                onChange={e => changeTextValue(e.target.value)}
              />

              <Button variant='contained' color='primary'>
                  Send
              </Button>
          </div>


      </Paper>
    </div>
  )
}
