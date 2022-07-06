import { Component } from "react";
import Reel from "./Reel";

class InfiniteReel extends Component {
  state = { afterArr: [null] };
  tempAfter = null;

  addAnotherReel() {
    const newArr = [...this.state.afterArr];
    newArr.push(this.tempAfter);
    this.setState({ afterArr: newArr });
  }

  saveTempAfter(after) {
    this.tempAfter = after;
  }

  componentDidMount() {
    setTimeout(() => {
      window.addEventListener("scroll", this.scrollListen);
    }, 3000);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListen);
  }

  noOfReels = 1;

  scrollListen = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolledPerc = ((height - winScroll) / height) * 100;
    // console.log(scrolledPerc);

    if (scrolledPerc < 20 / this.noOfReels) {
      window.removeEventListener("scroll", this.scrollListen);

      this.noOfReels++;
      this.addAnotherReel();

      setTimeout(
        () => window.addEventListener("scroll", this.scrollListen),
        6000
      );
    }
  };

  render() {
    return (
      <div className="flex items-center w-[100%] flex-col">
        {this.state.afterArr.map((afterVal) => (
          <Reel
            subReddit={this.props.subReddit}
            after={afterVal}
            saveAfter={this.saveTempAfter.bind(this)}
            key={afterVal}
          />
        ))}
        
        <button
          className="p-5 flex text-white mt-3 text-center text-lg rounded-lg font-bold bg-twitter"
          onClick={() => {
            this.addAnotherReel();
          }}
        >
          Show More
        </button>
      </div>
    );
  }
}

export default InfiniteReel;
