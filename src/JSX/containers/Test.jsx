import Reel from "./Reel";
import { Component } from "react";
import SearchPair from "../widgets/SearchPair";

class Test extends Component {
  constructor() {
    super();
    this.tempSubReddit = "meme";
    this.tempAfter = null;

    this.state = { subReddit: "meme", afterArr: [null] };
  }

  getInput(event) {
    // console.log(event.target.value,this.tempSubReddit);
    this.tempSubReddit = event.target.value;
  }

  submitInput() {
    this.setState({ subReddit: this.tempSubReddit, afterArr: [null] });
  }

  addAnotherReel() {
    const newArr = [...this.state.afterArr];
    newArr.push(this.tempAfter);
    this.setState({ afterArr: newArr });
  }

  saveTempAfter(after) {
    this.tempAfter = after;
  }

  render() {
    console.log(this.tempSubReddit);
    return (
      <>
        <div className="text-center">
          <SearchPair
            textFn={this.getInput.bind(this)}
            clickFn={this.submitInput.bind(this)}
            icon="search"
            buttonClass=" bg-gradient-to-br from-twitter to-reddit"
            className="  bg-twitter/70"
            height={8}
          />
        </div>

        {this.state.afterArr.map((afterVal) => (
          <Reel
            subReddit={this.state.subReddit}
            after={afterVal}
            saveAfter={this.saveTempAfter.bind(this)}
            key={afterVal}
          />
        ))}

        <button
          className="p-7 text-white font-bold bg-twitter ml-[40%]"
          onClick={() => {
            this.addAnotherReel();
          }}
        >
          Show More
        </button>
      </>
    );
  }
}

export default Test;