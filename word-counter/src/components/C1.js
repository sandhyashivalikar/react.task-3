import { Component } from "react";

class C1 extends Component{
    
    constructor(props) 
    {
        super(props);
            this.state = {wordCount: 0}
    }



    render() {
        
        const handleChange = (e) =>{
            const text = e.target.value;
            const words = text.split(" ");
    
            let wordCount = 0;
            words.forEach((word) => {
                if(word.trim() !== ''){
                    wordCount++;
                }
            });
        this.setState({ wordCount: wordCount });
        }


        return(
            <div className="box">
                <div className="head">
                    <h1>Responsive Paragraph Word Counter</h1>
                </div>
                <div className="text">
                    <textarea name="" id="" cols="55" rows="8" placeholder="Enter Text..." onChange={handleChange}></textarea>
                </div>
                <div className="count">
                    <h5>Word count : {this.state.wordCount} </h5>
                </div>
            </div>
        )
    }
}
export default C1;