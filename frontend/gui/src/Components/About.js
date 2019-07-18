import React from "react";
import VideoCover from "react-video-cover";
// import "./styles/about.scss";

const About = () => {
  const videoOptions = {
    src:
      "https://res.cloudinary.com/judoboy/video/upload/v1563067210/buildme.mp4",
    autoPlay: true,
    muted: true,
    loop: true
  };

  const video_style = {
    width: '100wh',
    height: '100vh',
    overflow: 'hidden',
    position: 'fixed',
    top: 0,
    zIndex: -1,

  };

  const content_style ={
    
        position: 'fixed',
        top: '13rem',
        background: 'rgba(0, 0, 0, 0.5)',
        color: '#f1f1f1',
        width: '100%',
        padding: '4rem',
        fontSize: '2rem'
  }

  return (
    <main>
      <div style={video_style}>
          <div style={content_style}> 
          <p>Our Mission Statement</p>
          <h2>We are committed to being the platform of choice among the developers and business owners,</h2>
          <h2> providing superior products and services, and being a good corporate citizen.</h2>
          </div>
        <VideoCover videoOptions={videoOptions} />   
      </div>
    </main>
  );
};

export default About;

// state = {
//     resizeNotifier: () => {},
//   }
// render() {
//     const videoOptions = {
//       src: '/buildme.mp4',
//       autoPlay: true,
//       loop: true,
//       muted: true
//     };
//     const style = {
//       width: '150vw',
//       height: '150vh',
//       position: 'fixed',
//       margin: 'auto',
//       top: '-25vh',
//       left: '-25vw',
//       zIndex: -2,
//     };
// return (
//       <div style={style} >
//         <VideoCover
//           videoOptions={videoOptions}
//           remeasureOnWindowResize
//           getResizeNotifier={resizeNotifier => {
//             this.setState({
//               resizeNotifier,
//             });
//           }}
//         />
//       </div>
//     );
//   }
// }
