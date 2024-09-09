import React, { useState } from "react";

const ExpandableParagraph = () => {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleParagraph = (index) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter((i) => i !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  const paragraphs = [
    "Yeh aik example paragraph hai jo icon click karne par khulta hai. Aap isko apne content se replace kar saktay hain.",
    "Yeh doosra example paragraph hai jo alag content ke sath khulta hai.",
    "Yeh teesra example paragraph hai jo bhi click hone par open hota hai.",
  ];

  return (
    <>
      {paragraphs.map((text, index) => (
        <div key={index} style={{ maxWidth: "600px", marginLeft: '40px', marginBottom: '20px' }}>
          <h2 style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            Your Heading {index + 1}
            <span
              onClick={() => toggleParagraph(index)}
              style={{ cursor: "pointer", marginLeft: "auto", fontSize: "24px", color: "blue" }}
            >
              {expandedIndexes.includes(index) ? "−" : "+"}
            </span>
          </h2>
          {expandedIndexes.includes(index) && (
            <p style={{ marginTop: "10px", lineHeight: "1.6" }}>
              {text}
            </p>
          )}
        </div>
      ))}
    </>
  );
};

export default ExpandableParagraph;
