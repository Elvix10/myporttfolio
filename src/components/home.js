import './styles/home.scss'


const Home=()=>{
    return(
        <section className="home">
            <div className="home-container">
                <div className= "home-texts">
                    <h3>Welcome to my</h3>
                    <p>portfolio</p>
                    <p>you Wanna a coffe ,tea ...</p>
                </div>

                <div className= "home-photo">
                    <img src='../images/bruno.jpg' alt="miphoto"/>
                </div>

            </div>
        </section>
    )

}

export default Home