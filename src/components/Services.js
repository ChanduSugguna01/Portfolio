import Card from "./Card"
function Services()
{
    return (
    <div className="services">
        <p className="text-muted text-sub-title text-center">What can i do for you</p>
        <h2 className="sub-title text-muted">SERVICES</h2>
        <br></br>
        <div className="row">
            <Card 
            text="Web Design" 
            img="fas fa-desktop"  
            description="I design modern and intuitive websites that not only look great but also deliver an exceptional user experience. Whether you're a startup, freelancer, or an established business, I craft custom designs tailored to your goals."
            />

            <Card 
            text="Web Application" 
            img="fas fa-code"  
            description="I specialize in developing custom web applications that solve real-world problems, automate workflows, and deliver seamless digital experiences. From dynamic dashboards to full-featured platforms—your idea becomes a robust solution."
             />

            
        </div>
     </div>
    )
}
export default Services