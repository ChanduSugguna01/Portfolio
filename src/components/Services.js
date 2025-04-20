import Card from "./Card";
import './Services.css'; // Add this CSS file for animations

function Services() {
  return (
    <div className="services">
      <p className="text-muted text-sub-title text-center fade-in">What can I do for you</p>
      <h2 className="sub-title text-muted slide-in-bottom">SERVICES</h2>
      <br />
      <div className="row">
        <div className="card-wrapper zoom-in">
          <Card
            text="Web Design"
            img="fas fa-desktop"
            description="I design modern and intuitive websites that not only look great but also deliver an exceptional user experience. Whether you're a startup, freelancer, or an established business, I craft custom designs tailored to your goals."
          />
        </div>

        <div className="card-wrapper zoom-in delay">
          <Card
            text="Web Application"
            img="fas fa-code"
            description="I specialize in developing custom web applications that solve real-world problems, automate workflows, and deliver seamless digital experiences. From dynamic dashboards to full-featured platforms—your idea becomes a robust solution."
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
