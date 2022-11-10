import { TabContext } from "@mui/lab";
import { Tab, Tabs } from "@mui/material";
import useEditorDrawer from "../useEditorDrawer";
import TabPanelInsert from "./TabPanelInsert/TabPanelInsert";
import TabPanelText from "./TabPanelText/TabPanelText";

const TabsList = () => {
  const { activeLinkChange, activeLinkIndex } = useEditorDrawer();

  return (
    <TabContext value={activeLinkIndex}>
      <Tabs
        value={activeLinkIndex}
        onChange={activeLinkChange}
        className="bg-white rounded-md shadow-primary"
        sx={{
          "& .MuiTabs-indicator": {
            borderBottom: {
              sx: "4px solid #7953B5",
            },
          },
        }}
      >
        <Tab
          value="0"
          sx={{
            "&.MuiButtonBase-root": {
              flexGrow: 1,
              px: { md: 10 },
              maxWidth: "100%",
            },
          }}
          className={`text-gray-600 futura text-2xl font-medium`}
          label="Text"
        />
        <Tab
          value="1"
          sx={{
            "&.MuiButtonBase-root": {
              flexGrow: 1,
              px: { md: 10 },
              maxWidth: "100%",
            },
          }}
          className={`text-gray-600 futura text-2xl font-medium`}
          label="Insert"
        />
      </Tabs>
      <div>
        <TabPanelText />
        <TabPanelInsert />
      </div>
    </TabContext>
  );
};

export default TabsList;
