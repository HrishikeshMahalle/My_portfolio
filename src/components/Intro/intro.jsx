import React,{useEffect,useRef} from 'react'
import './intro.scss'
import Logo from "../Intro/latop.png"
import Image from 'react-image-resizer';
import { ExpandMore } from '@material-ui/icons';
import { init } from 'ityped'

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: false, 
            strings: ['Developer!', 'Designer!' ] });
    }, []);
    return (
        <div className="intro" id="intro">
          <div className="left">
            <div className="imageContainer">
            <Image className="Image" src={Logo} height={400} width={400}/>
            </div>
          </div>
          <div className="right">
            <div className="wrapper">
                <h2>Hi There, This is</h2>
                <h1>Hrishi</h1>
                <h3>FrontEnd <span ref={textRef}>Web-</span></h3>
            </div>
          </div>
          <a href="#portfolio">
                <ExpandMore className="Icon"
                />
            </a>
        </div>
    )
}
