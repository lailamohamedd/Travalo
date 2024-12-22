import "./headerSection.scss";
const HeaderSection = ({ title }) => {
  return (
    <div className="header_section">
      <h5>{title}</h5>
    </div>
  );
};

export default HeaderSection;
