import * as Factory from './Factory.jsx'

const MainContent = () => {
    const decoration1 = "/images/decoration-1.svg";
    const decoration2 = "/images/decoration-2.svg";
    const decoration3 = "/images/decoration-3.svg";
    const decoration5 = "/images/decoration-5.svg";

    return (
        <main>
            <Factory.CreateNewSection id=".01" title="self">
                <Factory.CreateDecoration top="50%" left="80%" backgroundImage={decoration1}/>
                <Factory.CreateDecoration top="10%" left="80%" backgroundImage={decoration1}/>
                <Factory.CreateDecoration top="5%" left="80%" backgroundImage={decoration2}/>
                <Factory.CreateDecoration top="40%" left="80%" backgroundImage={decoration2}/>
                <Factory.CreateDecoration top="20%" left="80%" backgroundImage={decoration3}/>
                <Factory.CreateDecoration top="90%" left="80%" backgroundImage={decoration3}/>
                <Factory.CreateDecoration top="78%" left="79%" backgroundImage={decoration5} height="5rem"/>
                <div>
                    <h2>NAME</h2>
                    <p>Xaxeric</p>
                </div>
                <div>
                    <h2>JOB_TYPE</h2>
                    <p>Software Engineer</p>
                </div>
                <div>
                    <h2>LOCATION</h2>
                    <p>Citizen of Earth</p>
                </div>
            </Factory.CreateNewSection>
            <Factory.CreateNewSection id=".02" title="Val.">
                <div>
                    <h2>S_T</h2>
                    <p>Skill and Tools</p>
                    <p>-</p>
                    <div className={"apply-thin-color"}>
                        <p>Web Design</p>
                        <p>Front-end</p>
                        <p>Figma</p>
                        <p>Inkscape</p>
                        <p>Shell</p>
                        <p>Linux</p>
                        <p>Python</p>
                    </div>
                </div>
                <div>
                    <h2>CXNT_ACT</h2>
                    <p>Contact</p>
                    <p>-</p>
                    <a href="https://github.com/xaxeric">Github</a>
                    <a href="mailto:xaxeric.dev@gmail.com">Email</a>
                </div>
            </Factory.CreateNewSection>
        </main>
    )
}

export default MainContent
