import video from '../../src/video/topo-landing.webm'

const Header = () => {
    return (
      <header id="header" role="banner">
        <video preload="auto" loop autoPlay>
          <source src={video} type="video/webm" />
        </video>
        <section>
          <h1 title="INTRODUCTION">INTRODUCTION</h1>
          <p className={"apply-hacker-type-effect"}>Xaxeric{"'"}s personal webpage.</p>
        </section>
      </header>
    )
}

export default Header
