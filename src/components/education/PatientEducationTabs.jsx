import React, { useState } from "react";
import { patientEducationData } from "../../patientEDucationData";

const PatientEducationTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [subActiveTab, setSubActiveTab] = useState(0);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      border: "1px solid #ccc",
      borderRadius: "8px",
      marginTop: "20px",
    },
    mainTabsContainer: {
      display: "flex",
      justifyContent: "space-around",
      backgroundColor: "#f8f9fa",
      borderBottom: "2px solid #ccc",
      padding: "10px 0",
    },
    mainTab: {
      padding: "10px 20px",
      border: "none",
      backgroundColor: "transparent",
      color: "#333",
      fontWeight: "normal",
      cursor: "pointer",
      outline: "none",
      borderBottom: "4px solid transparent",
    },
    activeMainTab: {
      padding: "10px 20px",
      border: "none",
      backgroundColor: "transparent",
      color: "rgb(5, 145, 191)",
      fontWeight: "bold",
      cursor: "pointer",
      outline: "none",
      borderBottom: "4px solid rgb(5, 145, 191)",
    },
    contentContainer: {
      display: "flex",
      marginTop: "20px",
      flexDirection: "row-reverse",
    },
    subTabsContainer: {
      display: "flex",
      flexDirection: "column",
      width: "250px",
      backgroundColor: "rgb(5 145 191)",
      color: "white",
      height: "fit-content",
    },
    subTab: {
      padding: "15px",
      textAlign: "left",
      backgroundColor: "transparent",
      color: "white",
      fontWeight: "normal",
      cursor: "pointer",
      outline: "none",
      borderBottom: "1px solid white",
    },
    activeSubTab: {
      padding: "15px",
      textAlign: "left",
      backgroundColor: "#0056b3",
      color: "white",
      fontWeight: "bold",
      cursor: "pointer",
      outline: "none",
    },
    detailsContainer: {
      flex: 1,
      padding: "0px 20px 20px 20px",
    },
    title: {
      color: "rgb(7, 42, 150)",
      fontWeight: "600",
    },
    headingImageContainer: {
      display: "flex",
      alignItems: "center",
      marginBottom: "15px",
    },
    imageStyle: {
      borderRadius: "10px",
      maxWidth: "200px",
      height: "auto",
    },
  };

  const backgroundColors = [
    "#f9f3dc",
    "#e3f2fd",
    "#e8f5e9",
    "#fbe9e7",
    "#ede7f6",
  ];

  const renderContent = (content) => {
    return content.map((section, index) => (
      <div key={index} className="d-flex justify-content-between tabs-content-separation">
        <div
          className="w-100"
          style={{
            background:
              index === 0
                ? "linear-gradient(to right,rgb(17, 141, 243),rgb(90, 185, 254))"
                : "",
            color: index === 0 ? "white" : "black",
            padding: "12px",
          }}
        >
          {/* Section Title */}
          <div
            style={{
              ...styles.headingImageContainer,
              backgroundColor: backgroundColors[index % backgroundColors.length],
              padding: "12px",
              display: "flex",
              alignItems: "center",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            {section.icon && (
              <i className={`fa ${section.icon}`} style={{ fontSize: "24px", marginRight: "10px", color: "#333" }}></i>
            )}
            <h4 className="m-0 py-1" style={styles.title}>{section.title}</h4>
          </div>

          {/* Section Text */}
          {section.text && (
            <ul>
              {section.text.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {/* Render Subtitles and Their Texts */}
          {section.subtitle1 && section.text1 && (
            <div className="px-4">
              <h5 style={{ fontWeight: 600 }}>{section.subtitle1}</h5>
              <ul>
                {section.text1.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {section.subtitle2 && section.text2 && (
            <div className="px-4">
              <h5 style={{ fontWeight: 600 }}>{section.subtitle2}</h5>
              <ul>
                {section.text2.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    ));
  };

  return (
    <div className="container-lg" style={styles.container}>
      {/* Main Tabs */}
      <div className="patientEducatonTabs" style={styles.mainTabsContainer}>
        {patientEducationData.map((tab, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveTab(index);
              setSubActiveTab(0);
            }}
            style={activeTab === index ? styles.activeMainTab : styles.mainTab}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content Container */}
      <div className="contentContainer-tabs" style={styles.contentContainer}>
        {/* Sub Tabs */}
        <div className="subTabsContainer" style={styles.subTabsContainer}>
          {patientEducationData[activeTab].subTabs.map((subTab, index) => (
            <button
              key={index}
              onClick={() => setSubActiveTab(index)}
              style={subActiveTab === index ? styles.activeSubTab : styles.subTab}
            >
              {subTab.title}
            </button>
          ))}
        </div>

        {/* Details Container */}
        <div style={styles.detailsContainer} className="DetailsContainer">
          {/* Main Title */}
          <h3 style={styles.title} className="mt-0">
            {patientEducationData[activeTab].subTabs[subActiveTab].title}
          </h3>

          {/* Render Content */}
          {renderContent(patientEducationData[activeTab].subTabs[subActiveTab].content)}
        </div>
      </div>
    </div>
  );
};

export default PatientEducationTabs;
