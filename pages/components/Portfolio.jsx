import {products}  from '../data';
import Project from './Project';
const Portfolio = () => {
    return (
        <>
            <div className="portfolio">
                <div className="container">
                    <h1>Create & inspire. Its Arnab</h1>
                    <p>Lama is a creative portfolio that your work has been waiting for. Beautiful homes, stunning portfolio styles & a whole lot more awaits inside.</p>
                    <div className="projects">
                        <div className="project">
                            {
                                products.map((e)=>{
                                    return(
                                        <Project key={e.id} img={e.img} link={e.link}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;