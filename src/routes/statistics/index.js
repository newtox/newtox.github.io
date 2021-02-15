import { 
  Component 
} from 'preact';

class Statistics extends Component {
  render() {
    return (
      <div class="content-wrapper">
        <div class="container-fluid">
          <div class="content">
            <h3 class="content-header font-weight-medium">Statistics</h3>
            <p class="font-size-18">
              Yes, statistics.
              I haven't done much on github, but maybe I'll change that in the future.
            </p>
          </div>
          <div class="row">
            <div class="col-md-7">
              <div class="content">
                <h4 class="content-header">GitHub</h4>
                <p class="font-size-18">
                The following graphic is a chart of general GitHub statistics,
                including commits, contributions, and more!
                </p>
              </div>
            </div>
            <div class="col-md-5">
              <div class="content text-center">
                <a
                  href="https://github.com/anuraghazra/github-readme-stats"
                  target="_blank"
                >
                  <img
                    class="img-fluid shadow-lg hidden-lm"
                    alt="Github Stats"
                    src="https://github-readme-stats.vercel.app/api/?username=Newtox&show_icons=true&hide_border=true&title_color=faa627&bg_color=36393f&text_color=ffffffcc&icon_color=ffffff&custom_title=GitHub Stats"
                  />
                  <img
                    class="img-fluid shadow-lg hidden-dm"
                    alt="Github Stats"
                    src="https://github-readme-stats.vercel.app/api/?username=Newtox&show_icons=true&hide_border=true&title_color=faa627&bg_color=ffffff&text_color=000000d9&icon_color=ffffff&custom_title=GitHub Stats"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-7">
              <div class="content">
                <h4 class="content-header">Most Used Languages</h4>
                <p class="font-size-18">
                In this chart, you can see the programming languages I use in my
                projects the most.
                </p>
              </div>
            </div>
            <div class="col-md-5">
              <div class="content text-center">
                <a
                  href="https://github.com/anuraghazra/github-readme-stats"
                  target="_blank"
                >
                   <img
                    class="img-fluid shadow-lg hidden-lm"
                    alt="Github Stats"
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=Newtox&show_icons=true&hide_border=true&title_color=faa627&bg_color=36393f&text_color=ffffffcc&icon_color=ffffff&langs_count=10"
                  />
                  <img
                    class="img-fluid shadow-lg hidden-dm"
                    alt="Github Stats"
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=Newtox&show_icons=true&hide_border=true&title_color=faa627&bg_color=ffffff&text_color=000000d9&icon_color=ffffff&langs_count=10"
                  />
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
    );
  }
}

export default Statistics;