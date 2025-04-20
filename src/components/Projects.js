import React from 'react';
import Card2 from "./Card2";

// Swiper core & required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ProjectsItem from "../components/ProjectsItem";
import './Projects.css'; // Custom CSS for animations

function Projects() {
  const projects = ProjectsItem;

  return (
    <div className="services">
      <p className="text-muted text-sub-title text-center fade-in-top">These are some projects made by me</p>
      <h2 className="sub-title text-muted fade-in-bottom">PROJECTS</h2>
      <br />
      <div className="row">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          navigation={true}
          slidesPerView={2}
          spaceBetween={20}
          className="project-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="mySwiper slide-up">
              <Card2
                text={project.text}
                img={project.img}
                description={project.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
