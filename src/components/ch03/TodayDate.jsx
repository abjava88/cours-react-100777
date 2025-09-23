import React from "react";

const TodayDate = ({locale}) => {
  const getDate = (locale) => {
    const today = new Date();
    return today.toLocaleDateString(locale);
  };

  return (
    <>
      <div>Today Date : {getDate(locale ? locale : "en-CA")}</div>
    </>
  );
};

export default TodayDate;
