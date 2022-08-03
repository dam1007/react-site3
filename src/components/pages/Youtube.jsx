import React, { useEffect, useState } from 'react'
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Contents from '../layout/Contents';
import YoutubeCont from '../includes/YoutubeCont';
import Title from '../layout/Title';
import YoutubeList from '../includes/YoutubeList';
import Contact from '../layout/Contact';
import YoutubeSearch from '../includes/YoutubeSearch';

function Youtube() {
  //1.사진 가져오기
  const [videos, setVideos] = useState([]);

  //2. 써치이번에는 useEFfect 필요없음.
  const search = (query) => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=32&q=${query}&key=AIzaSyCXKxujgGX_BGPi-L-G-sYa8NZX-VWm8hk`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
         //result를 videos에 저장시켜줌.
         setVideos(result.items);
      })
      .catch((error) => console.log('error', error));
  

  };

  //1.사진 가져오기
  useEffect(() => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    //fetch() - 변화되는 데이터를 계속 불러와주는 것.
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=bts&key=AIzaSyCXKxujgGX_BGPi-L-G-sYa8NZX-VWm8hk", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
         //result를 videos에 저장시켜줌.
         setVideos(result.items);
      })
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <>
      <Header />
        <Contents>
            <Title title={["youtube", "reference"]} />
            <section className="youtube__cont">
              <div className="container">
                <div className="youtube__inner">
                  <YoutubeSearch onSearch={search} />
                  <YoutubeList videos={videos} />
                </div>
              </div>
            </section>
            <Contact />
          <YoutubeCont />
        </Contents>
      <Footer />
    </>
  );
}

export default Youtube