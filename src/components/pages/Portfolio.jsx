import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import PortCont from "../includes/PortCont";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
// import axios from "axios";

// function Portfolio() {
//   return (
//     <>
//       <Header />
  //       <Contents>
  //         <PortCont />
  //       </Contents>
//       <Footer />
//     </>
//   );
// }

// function Portfolio {

// }

/* class Portfolio extends React.Component {
  state = {
    ports: [],
  };

  getPorts = async () => {
    const {
      data: {
        data: { ports },
      },
    } = await axios.get(
      "https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json"
    );
    console.log(data.data.data.ports);
    this.setState({ ports });
  };

  componentDidMount() {
    this.getPorts();
  }

  render() {
    const { ports } = this.state;
    return (
      <>
        <Header />
        <Contents>
          <PortCont ports={ports} />
        </Contents>
        <Footer />
      </>
    );
  }
} */

//함수 써서 작업
function Portfolio() {
  //1. 변수 설정. 함수에는 state가 없어서 class처럼 데이터가 변할 때 같이 안 변함. so 리액트 훅의 대표적인 기능인 useState 사용. useState 말고 다른 것도 있음.
  //구조는 배열구조할당.
  //useState()안에 데이터는 계속 변할거임. useEFfect() 선언해줌. 이미 만들어있는 함수들임.
  //ports는 변수고 setPorts는 변하는 값 저장해줌. so setPorts는 함수라고 보면 됨.
  const [ports, setPorts] = useState([]);

  useEffect(() => {
    //axios는 데이터 가져오는 fetch() 메서드를 편하게 쓴거임. so 이번엔 fetch()로 작업. 둘 다 php의 get 방식이 변형된 것.
    //fetch() 쓸 때는 .then 사용해서 이어 쓰는 것. 문법임.
    const requestOption = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(
      'https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json',
      requestOption
    )
    .then((response) => response.json())
    .then((result) => {setPorts(result.data.ports);
      console.log(result.data.ports);
    })
    .then((error) => console.log('error', error));
  }, []);
//setPorts(result.data.ports))

//class는 return에 변수값 설정 안해도 됨.
  return (
    <>
      <Header />
        <Contents>
          <Title title={['portfolio', 'site']} />
          <PortCont ports={ports} />
          <Contact />
        </Contents>
      <Footer />
    </>
  );
}


export default Portfolio;
