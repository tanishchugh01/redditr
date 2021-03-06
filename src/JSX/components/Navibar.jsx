import SearchPair from "../widgets/SearchPair";
import { ReactComponent as LogoSvg } from "../../Assets/SVG/logo.svg";
import IconButton from "../widgets/IconButton";

const Navibar = ({ inputTextFn, inputClickFn }) => {
  return (
    <nav className="flex justify-around shadow-lg py-3 bg-white align-middle sticky top-0 w-full">
      {/* from-yellow-500 to-yellow-400 bg-gradient-to-b */}
      <div className=" flex">
        <LogoSvg className=" h-12 w-12 hover:animate-wiggle" id="navLogo"/>
        <p className=" text-5xl myGradient hiddenInPhone bg-clip-text text-transparent font-extrabold">redditr</p>
      </div>
      <SearchPair
        textFn={inputTextFn}
        clickFn={inputClickFn}
        icon="search"
        buttonClass="myGradient"
        height={10}
        iconColor="white"
      />
      <div className=" hiddenInPhone">
      <IconButton
        icon="github"
        fn={() =>
          window.open("https://github.com/tanishchugh01/redditr", "_blank")
        }
        height={12}
        className="outline-2 outline-double"
        iconSize="text-3xl"
      />
      {/* <a href="#">
        help
      </a> */}
      </div>
    </nav>
  );
};

export default Navibar;
