import { TabPanel } from "@mui/lab";
import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  SvgIcon,
} from "@mui/material";
import { BsCode, BsTypeBold } from "react-icons/bs";
import { FiItalic } from "react-icons/fi";
import { MdExpandLess, MdOutlineExpandMore } from "react-icons/md";
import ColorButton from "../../../Buttons/ColorButton/ColorButton";
import EmojiButton from "../../../Buttons/EmojiButton/EmojiButton";
import useHeadingButtonList from "../../../Buttons/HeadingButtonList/useHeadingButtonList";
import MarkButton from "../../../Buttons/MarkButton/MarkButton";

import useEditorDrawer from "../../useEditorDrawer";

const TabPanelText = () => {
  const { handleOpenHeadingList, openHeadingList, handleListItemClick } =
    useEditorDrawer();
  const { listButtons } = useHeadingButtonList();

  return (
    <TabPanel className="min-h-[400px]" value="0">
      <div className="flex justify-between gap-1 sm:gap-3">
        <MarkButton format="bold" icon={BsTypeBold} />
        <MarkButton format="italic" icon={FiItalic} />
        <ColorButton />
        <EmojiButton />
        <MarkButton format="code" icon={BsCode} />
      </div>
      <Divider className="my-2" />
      <List>
        <ListItemButton
          TouchRippleProps={{ className: "text-primary-main" }}
          className="text-primary-700 hover:bg-primary-50/50"
          onClick={handleOpenHeadingList}
        >
          <ListItemText
            primaryTypographyProps={{
              className: "futura font-semi-bold",
              variant: "h6",
            }}
          >
            Style
          </ListItemText>
          {openHeadingList ? (
            <SvgIcon fontSize="medium" component={MdExpandLess} />
          ) : (
            <SvgIcon fontSize="medium" component={MdOutlineExpandMore} />
          )}
        </ListItemButton>
        <Collapse in={openHeadingList}>
          <List disablePadding>
            {listButtons.map(({ format, option, variant }, index) => (
              <ListItemButton
                className="text-gray-500 hover:bg-primary-50/25 max-h-[40px]"
                TouchRippleProps={{ className: "text-primary-main" }}
                sx={{
                  "& .MuiTypography-root": {
                    fontSize:
                      option === "Heading 1"
                        ? "24px"
                        : option === "Heading 2"
                        ? "22px"
                        : option === "Heading 3"
                        ? "20px"
                        : option === "Heading 4"
                        ? "18px"
                        : option === "Heading 5"
                        ? "16px"
                        : option === "Heading 6"
                        ? "14px"
                        : "14px",
                    fontWeight: "bold",
                  },
                }}
                key={index}
              >
                <ListItemText
                  onClick={handleListItemClick(index, variant, format)}
                >
                  {option}
                </ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
    </TabPanel>
  );
};

export default TabPanelText;
