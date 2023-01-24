import { Divider, SvgIcon, Typography } from "@mui/material";
import useScriptValueStore from "store/scriptValue.store";
import React from "react";
import { deserializeScriptWithOutDiv } from "utils/deserialize-script-with-div";
import PhotoIcon from "./assets/photo.svg";

const ScenesList = () => {
  const scriptValue = useScriptValueStore((state) => state.scriptValue);
  const htmlContent = new DOMParser().parseFromString(scriptValue, "text/html");

  const onlyNeedSections = deserializeScriptWithOutDiv(htmlContent.body).filter(
    (program: { type: string }) =>
      program.type === "heading" || program.type === "action"
  );
  const filteredArray = [];
  for (let i = 0; i < onlyNeedSections.length; i++) {
    if (onlyNeedSections[i].type === "heading") {
      filteredArray.push({
        heading: onlyNeedSections[i].children[0].text,
        auction:
          onlyNeedSections[i + 1] && onlyNeedSections[i + 1].type === "action"
            ? onlyNeedSections[i + 1].children[0].text
            : " ",
      });
    }
  }
  return (
    <>
      {filteredArray.map((group, index) => (
        <React.Fragment key={index}>
          <div>
            <div className="flex gap-4">
              <SvgIcon component={PhotoIcon} inheritViewBox />
              <Typography variant="h6" className="font-bold courier">
                {group.heading}
              </Typography>
            </div>
            <Typography variant="body1" className="text-gray-400 mt-3 courier">
              {group.auction}
            </Typography>
          </div>
          {index < filteredArray.length - 1 && <Divider className="my-4" />}
        </React.Fragment>
      ))}
    </>
  );
};

export default ScenesList;
