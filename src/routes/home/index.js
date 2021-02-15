import { 
  Component 
} from 'preact';
import style from './style.css';

class Home extends Component {
  render() {
    return (
      <div class="content-wrapper">
        <div class="container-fluid">
          <div class="content">
            <div class="alert alert-secondary" role="alert">
              <h4 class="alert-heading">Site Under Construction</h4>
              Welcome to my website! Unfortunately, it is still under construction.
              If you would like, you can still browse currently implements
              pages. What you see is not final and is subject to change. Lastly,
              expect bugs. Thank you!
            </div>
          </div>
        </div>
        <div class="container-lg">
          <div class="row">
            <div class="col-md-8">
              <div class="content">
                <h3 class="content-header font-weight-medium">
                  Hey there,
                  I'm Newtox
                </h3>
                <p class="font-size-18">
                  And I'd like to welcome you to my website! :D
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="content text-center">
                <img
                  class={`img-fluid rounded-circle shadow-lg ${style.avatar}`}
                  src="https://avatars1.githubusercontent.com/u/39810250"
                />
              </div>
            </div>
          </div>
          <div class="" />
        </div>
        <div class="container-fluid">
          <div class="content text-center">
            <h3>
              How can I help you today?
            </h3>
            <a class="btn btn-primary" href="/about" role="button">
              About
            </a>
            <a class="btn btn-primary ml-10" href="/statistics" role="button">
              Statistics
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;