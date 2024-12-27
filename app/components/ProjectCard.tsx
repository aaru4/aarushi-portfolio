interface ProjectCardProps {
    title: string;
    org: string;
    desc: string;
    date: string;
    color: string;
  }
  
  export const ProjectBox: React.FC<ProjectCardProps> = ({ title, org, date, desc, color }) => {
    return (
      <div style={{...cardStyles.container, backgroundColor: color }}>
        <h1 style={cardStyles.title}>{title}</h1>
        <p style={cardStyles.date}>{date}</p>
        <p style={cardStyles.org}>{org}</p>
        <p style={cardStyles.desc}>{desc}</p>
      </div>
    );
  };
  
  const cardStyles = {
    container: {
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "16px",
      maxWidth: "400px",
      margin: "16px auto",
      textAlign: "center" as const,
    },
    title: {
      fontSize: "18px",
      marginBottom: "8px",
      color: "black",
    },
    org: {
      fontSize: "14px",
      color: "black",
    },
    date: {
      fontSize: "14px",
      color: "black",
    },
    desc: {
      fontSize: "10px",
      color: "black",
    },
  };
