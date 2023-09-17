import React from "react";
import Card from "../Card/card";
import { CircularProgress, Box } from "@mui/material";
import styles from "../Section/section.module.css";
import Carousel from "../Carousel/carousel";
import BasicTabs from "../BasicTabs/basicTabs";

const Section = ({
  title,
  data,
  type,
  filteredDataValues = [],
  toggle = false,
  handleToggle = () => {},
  value,
  handleChange,
}) => {
  console.log({ data });
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        {type !== "songs" && (
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {!toggle ? "Show All" : "Collapse All"}
          </h4>
        )}
      </div>
      {type === "songs" && (
        <BasicTabs value={value} handleChange={handleChange} />
      )}
      {data.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.cardWrapper}>
          {toggle ? (
            <div className={styles.wrapper}>
              {filteredDataValues.map((ele) => (
                <Card key={ele.id} data={ele} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={filteredDataValues}
              component={(ele) => <Card key={ele.id} data={ele} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
