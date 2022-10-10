import { IconButton, SvgIcon, Typography } from "@mui/material";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Transforms } from "slate";
import {
  ReactEditor,
  useFocused,
  useSelected,
  useSlate,
  type RenderElementProps,
} from "slate-react";

const ImageComponent = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  const editor = useSlate();
  const path = ReactEditor.findPath(editor as any, element);
  const selected = useSelected();
  const focused = useFocused();

  const handleRemoveImage = () => {
    Transforms.removeNodes(editor, { at: path });
  };

  if (element.type === "image") {
    return (
      <div {...attributes}>
        <div style={{ opacity: 0 }}>{children}</div>
        <div
          contentEditable={true}
          className={`relative ${
            selected && focused ? "shadow-primary" : "none"
          }`}
        >
          <img alt="" src={element.url} />
          <IconButton
            onClick={handleRemoveImage}
            className={`${selected ? "flex" : "hidden"} top-1 left-1 absolute`}
          >
            <SvgIcon component={RiDeleteBin6Line} />
          </IconButton>
        </div>
      </div>
    );
  } else {
    return <Typography {...attributes}>{children}</Typography>;
  }
};

export default ImageComponent;
