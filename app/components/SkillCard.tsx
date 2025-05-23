interface SkillCardProps {
  title: string;
  color: string;
}

export const SkillBox: React.FC<SkillCardProps> = ({ title, color }) => {
  return (
    <div className={`w-[150px]`}
      style={{ ...cardStyles.container, backgroundColor: color }}>
      <h1 style={cardStyles.title}>{title}</h1>
    </div>
  );
};

const cardStyles = {
  container: {
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "6px",
    width: "200px",
    margin: "16px auto",
    textAlign: "center" as const,
  },
  title: {
    fontSize: "20px",
    marginBottom: "2px",
    color: "black",
  },
};
