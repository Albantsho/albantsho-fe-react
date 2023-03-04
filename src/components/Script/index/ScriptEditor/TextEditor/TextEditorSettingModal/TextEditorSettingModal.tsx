import {
  FormControlLabel,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
  editorSetting: { theme: string };
  closeSettingModal: () => void;
  openSettingModal: boolean;
  handleChangeSettingIcon: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextEditorSettingModal = ({
  closeSettingModal,
  editorSetting,
  openSettingModal,
  handleChangeSettingIcon,
}: IProps) => {
  return (
    <Modal className="px-5" open={openSettingModal} onClose={closeSettingModal}>
      <div className="px-6 relative bg-white w-full mt-12 lg:mt-28 max-w-sm mx-auto py-14 rounded-lg">
        <IconButton
          onClick={closeSettingModal}
          className="absolute top-5 right-5"
          color="error"
        >
          <AiOutlineClose />
        </IconButton>
        <Typography variant="h5" className="text-primary-700">
          TextEditor Setting
        </Typography>
        <div>
          <Typography>Text markup</Typography>
          <RadioGroup
            onChange={handleChangeSettingIcon}
            className="flex flex-row gap-2"
          >
            <FormControlLabel value="icon" control={<Radio />} label="Icon" />
            <FormControlLabel
              value="bullet"
              control={<Radio />}
              label="Bullet"
            />
          </RadioGroup>
        </div>
      </div>
    </Modal>
  );
};

export default TextEditorSettingModal;
