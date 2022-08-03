import React from 'react'
//함수형
/* function PortCont() {
  return (
    <div>PortCont</div>
  )
}

export default PortCont; */

//함수형 작업
function PortItem({ link, title, image, category }) {
  return (
    <article className="port__item">
      <figure className="img">
        <a href={link}>
          <img src={image} alt={title} />
        </a>
      </figure>
      <div className="text">
        <h3>{title}</h3>
        <p>{category}</p>
      </div>
    </article>
  );
}

function PortCont({ ports }) {
  return (
    <section className="port__cont">
      <div className="container">
        <div className="port__inner">
          {ports.map((port) => (
            <PortItem
              key={port.id}
              link={port.link}
              title={port.title}
              image={port.image}
              category={port.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortCont;
