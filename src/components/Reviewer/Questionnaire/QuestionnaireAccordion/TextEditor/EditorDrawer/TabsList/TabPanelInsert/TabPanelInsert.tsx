import { TabPanel } from "@mui/lab";
import { List } from "@mui/material";
import React from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import {
  MdOutlineFormatListNumbered,
  MdFormatListBulleted,
} from "react-icons/md";
import BlockButton from "../../../BlockButton/BlockButton";
import EmailButton from "../../../EmailButton/EmailButton";
import ImageButton from "../../../ImageButtonList/ImageButtonList";
import LinkButton from "../../../LinkButton/LinkButton";
import TableButton from "../../../TableButton/TableButton";

const TabPanelInsert = () => {
  return (
    <TabPanel className="min-h-[400px]" value="1">
      <List className="space-y-2">
        <TableButton inDrawer="inDrawer" />
        <ImageButton inDrawer="inDrawer" />
        <BlockButton
          format="numberList"
          icon={MdOutlineFormatListNumbered}
          inDrawer="inDrawer"
          inDrawerTitle="Number List"
        />
        <BlockButton
          format="bulletList"
          icon={MdFormatListBulleted}
          inDrawer="inDrawer"
          inDrawerTitle="Bullet List"
        />
        <BlockButton
          format="blockquote"
          icon={AiFillExclamationCircle}
          inDrawer="inDrawer"
          inDrawerTitle="Blockquote"
        />
        <LinkButton inDrawer="inDrawer" />
        <EmailButton inDrawer="inDrawer" />
      </List>
    </TabPanel>
  );
};

export default TabPanelInsert;
