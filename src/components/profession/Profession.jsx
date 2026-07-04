import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "HTML",
    description:
      "Proficient in creating well-structured, semantic HTML for building accessible web applications.",
  },
  {
    id: 2,
    title: "CSS",
    description:
      "Skilled in styling web pages using CSS, creating responsive designs and modern layouts.",
  },
  {
    id: 3,
    title: "JavaScript",
    description:
      "Experienced in JavaScript for building interactive and dynamic web applications.",
  },
  {
    id: 4,
    title: "Java (Beginner)",
    description:
      "Learning Java programming fundamentals and object-oriented concepts.",
  },
  {
    id: 5,
    title: "Python (Learning)",
    description:
      "Currently learning Python programming and exploring its applications.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">Skills</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            <strong>Technical Skills:</strong> HTML, CSS, JavaScript, Java (Beginner), Python (Learning)
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            <strong>Soft Skills:</strong> Quick Learner, Positive Person, Adaptable Person, Flexible Person
          </p>
        </div>
        <a
          href="#contact"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
