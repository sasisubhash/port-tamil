import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "FULL STACK",
    title: "Farm Share – Agriculture Based Project",
    description:
      "A FarmShare (Java Full Stack Project) is a web-based platform that allows farmers to easily rent farming tools, vehicles, and manpower as needed, helping reduce costs and improve productivity by providing quick and convenient access to essential agricultural resources.",
    link: "#",
  },
  {
    id: 2,
    image: card2,
    category: "WEB APPLICATION",
    title: "Student Marklist Management System",
    description:
      "A structured record system that displays a student's subject-wise marks, along with total, average, and grades — helping teachers and students easily evaluate, track, and analyze academic performance.",
    link: "#",
  },
  {
    id: 3,
    image: card3,
    category: "APPLICATION",
    title: "Scientific Calculator",
    description:
      "A project developed to perform both basic and advanced calculations like trigonometry, logarithms, and exponents quickly and accurately.",
    link: "#",
  },
  {
    id: 4,
    image: card4,
    category: "CERTIFICATION",
    title: "Paper Presentation",
    description:
      "Participated in paper presentation at Nandha College of Engineering, showcasing technical knowledge and research skills.",
    link: "#",
  },
  {
    id: 5,
    image: card5,
    category: "CERTIFICATION",
    title: "Technical Workshop",
    description:
      "Attended Technical Workshop at Excel Engineering College to enhance practical skills and knowledge in emerging technologies.",
    link: "#",
  },
  {
    id: 6,
    image: card6,
    category: "CERTIFICATION",
    title: "Paper Presentation & Gaming Workshop",
    description:
      "Paper Presentation at Excel Engineering College and Gaming Workshop by Let's Gametech, expanding technical and creative skills.",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Projects & Certifications</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Academic projects and certifications demonstrating technical skills and continuous learning in computer science and engineering.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#contact"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
