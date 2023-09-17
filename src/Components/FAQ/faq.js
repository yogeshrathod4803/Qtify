import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./faq.module.css"; // Import your custom CSS file

export default function BetterAccordion() {
  return (
    <div className={styles.centerContainer}>
      <div className={styles.accordionContainer}>
        <Typography variant="h1" className={styles.h1}>
          FAQ
        </Typography>
        <Accordion className={styles.customAccordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={styles.icon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={styles.accordionHead}
          >
            <Typography variant="h6">Is Qtify free to use?</Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.customAccordionSummary}>
            <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.customAccordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={styles.icon} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            className={styles.accordionHead}
          >
            <Typography variant="h6">
              Can I download and listen to songs offline?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.customAccordionSummary}>
            <Typography>
              Sorry, unfortunately, we don't provide the service to download any
              songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
