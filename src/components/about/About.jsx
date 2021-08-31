import "./about.scss"

export default function About() {
    return (
        <div className="about" id="about">
        <div className="left">
            <div className="imgContainer">
            <img src="../assets/photo.png" class="img"></img>
            </div>
        </div>
        <div className="right">
            <div className="wrapper">
                <h2>Hi There, I'm</h2>
                <h1>Zahra Omer Mohamed</h1>
                <h3>Software Developer</h3>
                <div className="desc">
                <p>
                An ambitious and highly motivated software engineering graduate who </p>
                <p>developed a mature and responsible approach to any task that is undertaken </p>
                <p>and is seeking to find the opportunity to work in a challenging working</p> 
                <p>environment that encourages career development</p>
                </div>
                
            </div>
        </div>
            
        </div>
    )
}
