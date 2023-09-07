import { Children } from 'react';

export const CreateDecoration = ({top, left, backgroundImage, height = "2rem", width = "2rem"}) => { 
    return ( <div className={"decoration"} style={{"top": top, "left": left, "backgroundImage": `url(${backgroundImage})`, "height": height, "width": width}}> </div> ) 
}

export const CreateNewSection = ({id, title, children}) => { 
    return ( 
        <> 
            <header role="heading">{id}</header>
            <article>
                <h1>{title}</h1>
                <div className={"apply-row-flex"}>
                    {Children.map(children, child => child)}
                </div>
            </article>
        </> ) 
}
