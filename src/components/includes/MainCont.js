import React from "react";

//map 메서드 쓰려면 배열 안에 넣어줘야함.
const textINfor = [
    {text: "we provide"},
    {text: "visual coding"},
    {text: "solution"},
    {text: "for you webs"}
];

function Info({text}) {
    return <div>{text}</div>;
}

function MainCont(){
    return (
        <section className="main__cont">
            <div className="main__inner">
                {textINfor.map((txt) => (
                    <Info text={txt.text} key={txt.text} />                
                ))}
            </div>
        </section>
    );
}

export default MainCont;