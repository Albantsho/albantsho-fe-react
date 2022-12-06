import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import type { RenderElementProps } from "slate-react";
import ChangeCharacterStatus from "../../../ChangeCharacterStatus/ChangeCharacterStatus";

const CharacterComponent = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  const [openChangeCharacterStatusMenu, setOpenChangeCharacterStatusMenu] =
    useState(false);

  const closeChangeCharacterStateMenu = () =>
    setOpenChangeCharacterStatusMenu(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    element.children[0].text.endsWith(`(`)
      ? setOpenChangeCharacterStatusMenu(true)
      : closeChangeCharacterStateMenu();
  }, [element.children]);

  if (element.type === "character") {
    return (
      <div className="ml-auto relative w-3/5 mb-[18px]">
        <p
          {...attributes}
          itemID={element.id}
          style={{
            padding: "0px 40px",
            textAlign: "start",
            position: "relative",
            textTransform: "uppercase",
            color: "black",
            marginLeft: "auto",
            fontFamily: "Courier",
            fontSize: "18px",
          }}
        >
          <FaUser
            style={{
              position: "absolute",
              left: "0",
              top: "1px",
              bottom: "0",
              width: "24px",
              height: "20",
              color: "#DCD8E4",
            }}
          />
          {children}
        </p>
        <ChangeCharacterStatus
          openChangeCharacterStatusMenu={openChangeCharacterStatusMenu}
          closeChangeCharacterStateMenu={closeChangeCharacterStateMenu}
        />
      </div>
    );
  } else {
    return (
      <p
        style={{
          marginBottom: "3px",
          width: "100%",
          fontFamily: "courier",
          fontSize: "16px",
        }}
        {...attributes}
      >
        {children}
      </p>
    );
  }
};

export default CharacterComponent;
