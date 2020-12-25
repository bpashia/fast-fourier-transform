import React, {Component} from 'react';
import './app.css';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { ReactComponent as Logo } from './logo.svg';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import star from './star.svg';
import {fft} from './fft';
import { Fab, makeStyles, Tooltip } from '@material-ui/core';
import {StoryStep, storyOne, storyFive, storyTwo, storyFour, storySix, storyThree} from '../../../../libs/Christmas-Code-Project'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Box, Button } from '@material-ui/core';
import {Route, useRouteMatch, Switch, BrowserRouter as Router} from 'react-router-dom';


export const StoryElement = ({title, story}: {title: string, story: StoryStep[]})=>{
  const classes = useStyles();
const [currentStep, setCurrentStep] = React.useState<number>(0);

const [showResults, setShowResults]  = React.useState<boolean>(false);
const [currentChoice, setCurrentChoice] = React.useState<number>(0);


return (
    <Grid container spacing ={2} alignItems='center'>
    <Grid item xs={12}>
    <Card>
    <Typography className={classes.typography} variant='h1'>{title}</Typography>
    <Box paddingTop = {5} paddingBottom = {5}><Typography className={classes.typography} variant= 'h3'>{story[currentStep].prompt}</Typography></Box>
    </Card>
    </Grid>
    
    {!showResults  && story[currentStep].options && story[currentStep].options.map((value,index)=>
    <Grid item xs={6} spacing ={2}>
    <Card>
    <Typography className={classes.typography} variant='h3'>{`Option ${index+1}`}</Typography>
    <Box paddingTop = {5} paddingBottom = {5}><Typography className={classes.typography}variant='h4'>{value}</Typography></Box>
    </Card>

    <Grid item xs = {12} spacing ={2} alignContent='center'>
        <Button fullWidth className = {classes.button} variant = 'contained' onClick = {()=>{setCurrentChoice(index+1)
        setShowResults(true);
        }}>
          <Typography className ={classes.typography}variant='h3'>
            {`Option ${index + 1}`}
            </Typography>
        </Button>
    </Grid>
    </Grid>
    )
    
    }
    {showResults && currentChoice && 
    <Grid xs ={12}>
    <Card>
    <Typography className={classes.typography} variant='h3'>{currentChoice ===story[currentStep].correctAnswer? 'Correct!': 'Incorrect!'}</Typography>
    <Box paddingTop = {5} paddingBottom = {5}><Typography variant='h4' className={classes.typography}>{story[currentStep].results[currentChoice-1]}</Typography></Box>

    </Card>
    <Grid xs = {6} spacing ={2} alignContent="center">
        <Button fullWidth className = {classes.button} variant = 'contained' onClick = {()=>{setShowResults(false);
        if (currentChoice ===story[currentStep].correctAnswer){
            setCurrentStep(currentStep+1)
        }else{
            setCurrentStep(0)
        }
        setCurrentChoice(0);
        }}>
          <Typography className ={classes.typography}variant='h3'>
            {`Next`}
            </Typography>
        </Button>
    </Grid>
    </Grid>}
    {/* {currentStep +1 ===story.length && <Grid xs ={12}>
    <Card>
    <Typography className={classes.typography} variant='h4'>{`Success!`}</Typography>
    <Box><Typography className={classes.typography}>{story[currentStep].prompt}</Typography></Box>
    </Card>
    </Grid>} */}

    </Grid>
)
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  fabOn: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    overflow: 'auto',
    backgroundColor: 'green',
    color: 'white',
    size: 'large'
  },
typography: {
    fontFamily: 'Apple Chancery',
    color: 'darkred'
  },
  button:{
    color: 'darkred',    

  },
  buttonTypography: {
    color: 'white'
    
  }
  
}));

export const AppRouter = () =>{
// const {path}= useRouteMatch()
const classes = useStyles();
const path = ''
console.log({path})

return(
  <Router basename={'fast-fourier-transform'}>
  <Switch>
    <Route path = {`/1`} render ={()=><StoryElement title ='Futuristic Friendship' story ={storyFive}/>}/>
    <Route path = {`/2`} render ={()=><StoryElement title ='Equation Elation' story ={storyFour}/>}/>
    <Route path = {`/3`} render ={()=><StoryElement title ='Stage Fright' story ={storyTwo}/>}/>
    <Route path = {`/4`} render ={()=><StoryElement title ='Airport in Aldovia' story ={storyOne}/>}/>
    <Route path = {`/5`} render ={()=><StoryElement title ='Quartz, Parchment, Shears' story ={storySix}/>}/>
    <Route path = {`/6`} render ={()=><StoryElement title ='Swede, Swede Revenge' story ={storyThree}/>}/>
    <Route path = {`/`} render ={()=><Grid item xs={12}>
    <Card>
    <Typography className={classes.typography} variant='h1'>{`Welcome to a Game of Common Sense!`}</Typography>
    </Card>
    </Grid>}/>
  </Switch>
  </Router>
)
}

export function App() {
  const classes = useStyles();
  
return (
<AppRouter/>
)
  }

export default App;

