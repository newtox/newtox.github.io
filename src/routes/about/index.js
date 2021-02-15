import { 
  Component 
} from 'preact';

class About extends Component {
  render() {
    return (
      <div class="content-wrapper">
        <div class="container-fluid">
          <div class="content">
          <div class="card">
            <h1 class="card-title">Basic Information</h1>
            <p class="font-size-18">
              • Name: Justin
              <br></br>
              • Age: 17
              <br></br>
              • Country: Germany
              <br></br>
              • Hobbies: Programming, Gaming
            </p>
          </div>
          <div class="card">
            <div class="card-title">Favorite Games / Applications</div>
            <p class="font-size-18">
              • Dead by Daylight
              <br></br>
              • Titanfall 2
              <br></br>
              • SCP: Secret Laboratory
              <br></br>
              • Visual Studio Code
              <br></br>
              • MobaXterm
              <br></br>
              • Discord    
            </p>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;