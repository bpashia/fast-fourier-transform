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
fabOff: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    overflow: 'auto',
    backgroundColor: 'red',
    color: 'white',
    size: 'large'
  },
  
}));

export function App() {
  const classes = useStyles();
  const context = new (window.AudioContext)();
  
const gainNode =context.createGain();
  const analyser = context.createAnalyser();
    analyser.fftSize = 256;
    console.log({context, analyser})
    const bufferLength = analyser.frequencyBinCount;
  const [showData, setShowData] = React.useState<boolean>(true);
  const toggleData = () =>{
    setShowData(!showData);
    if(context.state==='suspended'){context.resume()}
    else(context.suspend())
    console.log({showData, toggleData})
  }
  const canvasRef = React.useRef<HTMLCanvasElement>();
  console.log(canvasRef.current)
  // const getMedia =()=>{
   navigator.mediaDevices.getUserMedia({audio: true}).then((stream)=>{
     const source = context.createMediaStreamSource(stream);
      source.connect(gainNode);
             
             gainNode.connect(analyser);
             analyser.connect(context.destination)
             if(canvasRef.current && showData){
             visualize(canvasRef)
             }
   }).catch((err)=>{
     console.log('ERROR', err)
   })
   
   
   function visualize(canvasRef: React.MutableRefObject<HTMLCanvasElement>) {
     if (context.state==='suspended'){context.resume()}
     const canvas:HTMLCanvasElement = canvasRef.current;
    const canvasCtx = canvas.getContext('2d');
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    
    
      analyser.fftSize = 256;
      const bufferLength = analyser.fftSize;
      console.log(bufferLength);
      const dataArray = new Uint8Array(bufferLength);

      canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

      
function draw() {
  const drawVisual = requestAnimationFrame(draw);
  canvasCtx.fillStyle = 'rgb(0, 0, 0)';
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
  if (showData){
analyser.getByteTimeDomainData(dataArray);

 const data = fft(Array.from(dataArray));
  

  const barWidth = (WIDTH / bufferLength) * 2.5;
  
  let x = 0;
  for(let i = 1; i < bufferLength; i++) {
    
    const barHeight = data[i]*10;
    
    canvasCtx.fillStyle = 'rgb(0,'+(barHeight+100) +','+(barHeight+100)+')';
    canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight/2);

    x += barWidth + 1;
    
  }
}
}

      draw();
    
    }
   
  return (
    <>
    {showData && <Tooltip title="Mute">
              <Fab
                className={classes.fabOn}
                onClick={toggleData}
              >
                <MicIcon />
              </Fab>
            </Tooltip>}
    {!showData && <Tooltip title="Unmute">
              <Fab
                className={classes.fabOff}
                onClick={toggleData}
              >
                <MicOffIcon />
              </Fab>
            </Tooltip>}
    {/* <IconButton onClick ={toggleData}><MicIcon/></IconButton> */}
    <canvas width = {document.documentElement.clientWidth} height = {document.documentElement.clientHeight} color={'green'} ref={canvasRef}/>
   </>
    
  );
  }

export default App;

