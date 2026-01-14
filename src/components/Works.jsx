import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@heroui/react";

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
  const { t } = useTranslation();
  console.log("tags", tags);
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 pb-12 rounded-2xl sm:w-90 w-full h-full relative"
      >
        <div className="relative w-full h-57.5">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          {website_link ? (
            <a
              href={website_link}
              target="_blank"
              rel="noreferrer"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <Button color="primary" variant="shadow" isDisabled={inprocess}>
                {inprocess ? <p>En construction...</p> : <p>Voir le site</p>}
              </Button>
            </a>
          ) : (
            <Button
              color="primary"
              variant="shadow"
              isDisabled
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80"
            >
              En construction...
            </Button>
          )}
          <div className="absolute bottom-44 inset-0 flex items-center justify-end m-3 card-img_hover">
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
          <h3 className="text-base-title font-bold text-[24px]">{t(name)}</h3>
          <p className="mt-2 text-base-content text-[14px]">{t(description)}</p>
        </div>
        <div className="bottom-4 absolute flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={t(tag.nameKey)} className={`text-[14px] ${tag.color}`}>
              #{t(tag.nameKey)}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>{t("projects.subtitle")}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t("projects.title")}</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-base-content"
        >
          {t("projects.description")}
        </motion.p>
      </div>

      <div className="mt-8 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            name={t(project.nameKey)}
            description={t(project.descriptionKey)}
            tags={project.tags}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
