import '../App.css';
import React, {useState} from 'react'

class Gallery extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        index: 0,
        count: 0,
        imgs: [
          {title: 'p1', text: 'this is p1.', src: 'https://dummyimage.com/800x450/000000/fff.png'},
          {title: 'p2', text: 'this is p2.', src: 'https://dummyimage.com/800x450/41578a/fff.png'},
          {title: 'p3', text: 'this is p3.', src: 'https://dummyimage.com/800x450/8a4242/fff.png'},
          {title: 'p4', text: 'this is p4.', src: 'https://dummyimage.com/800x450/428a49/fff.png'},
        ]
      };
      this.previousImg = this.previousImg.bind(this);
      this.nextImg = this.nextImg.bind(this);
      this.chooseImg = this.chooseImg.bind(this);

    }
    previousImg() {
      const { length } = this.state.imgs;
      const { index } = this.state;
      const newIndex =  index === 0 ? length - 1 : index - 1;
      this.setState({ index: newIndex, count: newIndex });
    }
    nextImg() {
      const { length } = this.state.imgs;
      const { index } = this.state;
      const newIndex =  index === length - 1 ? 0 : index + 1;
      this.setState({ index: newIndex, count: newIndex });
    }
    chooseImg(e) {
      const { length } = this.state.imgs;
      // const { index } = this.state; 
      // console.log('chooseImg index', e.target.src)
      // const chooseImg = e.target.src
      for (let i = 0; i < length; i++) {
        if (this.state.imgs[i].src === e.target.src) {
          // console.log('true!!!', i)
          const newIndex = i
          // const chooseImg = length - 1      
          this.setState({ index: newIndex, count: newIndex})
          
        }
      }
    }
  
    render() {
      const { index, imgs, count } = this.state;
      // const [index, setIndex] = useState(0);

      return (
        <div className="background">
          <div className="upperBox">
            <img className="arrowImg" onClick={this.previousImg} src='https://www.flaticon.com/svg/vstatic/svg/860/860790.svg?token=exp=1616557162~hmac=605c90dd65a1c86b714dd77e689f1ca6' />
            <div className="positionBox">
              <img className="container" src={imgs[index].src} />
              <div className="textBox">
                <h1>{imgs[index].title}</h1>
                <p>{imgs[index].text}</p>
              </div>
            </div>
            <img className="arrowImg" onClick={this.nextImg} src='https://www.flaticon.com/svg/vstatic/svg/709/709586.svg?token=exp=1616557162~hmac=735cffad3de956cccd39a4e37d458a51' />
          </div>
          <div className="bottomBox">
            <ul>
              {imgs.map((item, index) => {
                // if (count === index) {
                  return (
                    <div className="showInRow">
                    <div className="thumbnailsBox">
                      {/* <img className="triangel" src="https://www.flaticon.com/svg/vstatic/svg/595/595008.svg?token=exp=1616569019~hmac=aa56caadee9d9f7405e70854aa495841" /> */}
                      <img onClick={this.chooseImg} className={count === index ? "focus" : "thumbnails"} key={index} src={item.src} />
                    </div>
                  </div>
                  )
                // } else {
                //   return(
                //     <div className="showInRow">
                //       <div className="thumbnailsBox">
                //         {/* <img className="triangel" src="https://www.flaticon.com/svg/vstatic/svg/595/595008.svg?token=exp=1616569019~hmac=aa56caadee9d9f7405e70854aa495841" /> */}
                //         <img onClick={this.chooseImg} className="thumbnails" key={index} src={item.src} />
                //       </div>
                //     </div>
                //   )
                // }
              })}
            </ul>
          </div>
        </div>
      );
    }
  
  }

export default Gallery;