import React from 'react';
import './App.css';

import Rank from './components/Rank'
import ImageLink from './components/FormInput'
import FaceRecognition from './components/FaceRecognition';

import Clarifai from 'clarifai';

const apiKey = 'f4f9e073483f424aaaf13c7eb178bb7e';

const app = new Clarifai.App({
  apiKey
})

class App extends React.Component {
  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:'',
      box:{}
    }
  }
  handleChange=e=>{
    const input = e.target.value;
    this.setState({input})
  }

  calculateFaceLocation = data =>{
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  console.log(clarifaiFace)
  const image = document.getElementById('inputImage');
  const width= Number(image.width);
  const height=Number(image.height)
  return {
    leftCol : clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - clarifaiFace.right_col * width,
    bottomRow: height - clarifaiFace.bottom_row * height
  }
  }
  displayFaceBox = box =>{
    this.setState({box})
  }

  detectFace = () =>{
    this.setState({imageUrl:this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response=> {
      // do something with response
      this.displayFaceBox(this.calculateFaceLocation(response))
    },
    function(err) {
      // there was an error
    }
  );


  }


  render(){
    return (
      <div className='app'>
        <Rank/>
        <ImageLink handleChange={this.handleChange} imageUrl={this.state.input} detectFace={this.detectFace}/>
        <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box}/>
        
      </div>
    );
  }
  
}

export default App;
