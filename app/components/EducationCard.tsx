interface ECProjectCardProps {
    title: string;
    org: string;
    date: string;
    color: string;
  }
  
  function hexToRgba(hex: string, opacity: number) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  
  export const ECProjectBox: React.FC<ECProjectCardProps> = ({ title, org, date, color }) => {
    return (
      <div
        className={`w-[400px] h-[260px] flex flex-col p-6 rounded-lg shadow-lg mx-auto transform transition-transform duration-300`}
        style={{
          background: `linear-gradient(${hexToRgba(color, 0.5)}, ${color})`,
        }}
      >
        <div className="flex-grow">
          <h1 style={cardStyles.title}>{title}</h1>
          <p style={cardStyles.org}>{org}</p>
        </div>
        <div className="mt-auto">
          <p style={cardStyles.date}>{date}</p>
        </div>
      </div>
    );
  };
  
  const cardStyles = {
    container: {
      borderRadius: "12px",
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      maxWidth: "250px",
      margin: "16px auto",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    title: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#333",
      letterSpacing: "0.5px",
    },
    org: {
      fontSize: "24px",
      color: "#333",
      marginBottom: "8px",
    },
    date: {
      fontSize: "20px",
      color: "#333",
      marginTop: "8px",
      fontWeight: "bold",
      marginBottom: "12px",
    }
  };
  
