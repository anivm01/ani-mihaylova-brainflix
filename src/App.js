import './App.scss';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import videos from "./data/video-details.json";


function App() {
  const featuredVideo = videos[0];
  return (
    <>
    <Header />
    <Video image={featuredVideo.image} />
    <Details 
      title={featuredVideo.title}
      timestamp={featuredVideo.timestamp}
      channel={featuredVideo.channel}
      views={featuredVideo.views}
      likes={featuredVideo.likes}
      description={featuredVideo.description} />
    </>
  );
}

export default App;
