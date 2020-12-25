import React from 'react'
import {StoryStep} from './general'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Box, Button } from '@material-ui/core';

export const StoryElement = ({title, story}: {title: string, story: StoryStep[]})=>{
const [currentStep, setCurrentStep] = React.useState<number>(0);

const [showResults, setShowResults]  = React.useState<boolean>(false);
const [currentChoice, setCurrentChoice] = React.useState<number>(0);


return (
    <Grid>
    <Grid xs={12} spacing ={2}>
    <Card>
    <Typography variant='h2'>{title}</Typography>
    <Box><Typography>{story[currentStep].prompt}</Typography></Box>
    </Card>
    </Grid>
    {!showResults  && story[currentStep].options && story[currentStep].options.map((value,index)=><Grid xs={6} spacing ={2}>
    <Card>
    <Typography variant='h4'>{`Option ${index+1}`}</Typography>
    <Box><Typography>{value}</Typography></Box>
    </Card>
    <Grid xs = {3} spacing ={2}>
        <Button onClick = {()=>{setCurrentChoice(index+1)
        setShowResults(true);
        }}>
            {`Option ${index + 1}`}
        </Button>
    </Grid>
    </Grid>
    )
    
    }
    {showResults && currentChoice && 
    <Grid xs ={12}>
    <Card>
    <Typography variant='h4'>{currentChoice ===story[currentStep].correctAnswer? 'Correct': 'Incorrect'}</Typography>
    <Box><Typography>{story[currentStep].results[currentChoice-1]}</Typography></Box>

    </Card>
    <Grid xs = {3} spacing ={2} alignContent="center">
        <Button onClick = {()=>{setShowResults(false);
        if (currentChoice ===story[currentStep].correctAnswer){
            setCurrentStep(currentStep+1)
        }else{
            setCurrentStep(0)
        }
        setCurrentChoice(0);
        }}>
            {`Next`}
        </Button>
    </Grid>
    </Grid>}
    {/* {currentStep +1 ===story.length && <Grid xs ={12}>
    <Card>
    <Typography variant='h4'>{`Success!`}</Typography>
    <Box><Typography>{story[currentStep].prompt}</Typography></Box>
    </Card>
    </Grid>} */}

    </Grid>
)
}