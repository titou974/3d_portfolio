import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  inprocess,
  website_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <a
            href={website_link}
            target="_blank"
            rel="noreferrer"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[#5877FA] p-4 rounded-md font-bold text-white bg-[#5877FA] transition-all hover:bg-white hover:text-[#5877FA]"
          >
            <p>Voir le site</p>
          </a>
          <div className="absolute bottom-44 inset-0 flex items-center justify-end m-3 card-img_hover">
            <p className={`${inprocess ? "" : "hidden"} me-3 font-bold`}>
              En développement...
            </p>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              {inprocess === true && (
                <i className="fa-solid fa-gear object-contain text-white"></i>
              )}
              {inprocess !== true && (
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              )}
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] dark:text-white">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} dark:text-stone-500`}>
          Voici mes
        </p>
        <h2 className={`${styles.sectionHeadText} dark:text-stone-700`}>
          Projets.
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary dark:text-stone-500"
        >
          Chacun de ces projets représente une étape importante de ma
          progression en tant que développeur full-stack, mettant en évidence
          mes compétences et mon engagement envers l'apprentissage continu. Les
          projets réalisés lors de mes formations démontrent ma capacité à
          appliquer les concepts et les compétences acquises dans des
          environnements structurés, tandis que mes projets personnels mettent
          en valeur ma créativité et ma passion pour l'exploration de nouvelles
          idées.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
