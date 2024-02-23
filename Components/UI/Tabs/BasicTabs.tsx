import * as React from "react";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Paragraph as P } from "@Components/Elements/Paragraph/Paragraph";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1.2, minHeight: "100px" }}>
          <P text={children} />
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface BasicTabsProps {
  tabsData: {
    id: number;
    label: string;
  }[];
  customTabPanelData: {
    index: number;
    text: string | React.ReactNode;
  }[];
}

const BasicTabs = (props: BasicTabsProps) => {
  const { tabsData, customTabPanelData } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ border: "1px solid rgba(54, 16, 106, 0.1)", borderRadius: 2 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          orientation="horizontal"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 1 },
            },
            backgroundColor: "rgb(94, 63, 135)",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            color: "white",
            width: { xs: 400, sm: 700, md: "100%", lg: "100%" },
          }}
        >
          {tabsData.map((singleTab: { id: number; label: string }) => {
            const { id, label } = singleTab;
            return (
              <Tab
                key={id}
                label={label}
                {...a11yProps(id)}
                disableRipple
                disableFocusRipple
                disableTouchRipple
                sx={{
                  color: "white",
                  "&.Mui-selected": { color: "white", p: 0 },
                }}
              />
            );
          })}
        </Tabs>
        {customTabPanelData.map((singleCustomTabPanel: { index: number; text: string | React.ReactNode }) => {
          const { index, text } = singleCustomTabPanel;
          return (
            <CustomTabPanel value={value} index={index} key={index}>
              {text}
            </CustomTabPanel>
          );
        })}
      </Box>
    </>
  );
};

export default BasicTabs;

{
  /* <ScrollableTabs
            tabsData={[
              { id: 0, label: "One" },
              { id: 1, label: "Two" },
              { id: 2, label: "Three" },
            ]}
            customTabPanelData={[
              {
                index: 0,
                text: "One text for one...!",
              },
              {
                index: 1,
                text: "Two text for one...!",
              },
              {
                index: 2,
                text: `One Table Data Should Support and Display In here`,
              },
            ]}
          /> */
}
