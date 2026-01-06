import { styles } from "../styles";

export default function Divider() {
  return (
    <div className="text-center flex items-center justify-center gap-4 max-w-screen-md mx-auto">
      <div className="h-px bg-secondary rounded-full w-full"></div>
      <p className={`${styles.sectionSubText} text-secondary`}>OU</p>
      <div className="h-px bg-secondary rounded-full w-full"></div>
    </div>
  );
}
