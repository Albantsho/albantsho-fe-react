import { Skeleton } from "@mui/material";

interface IProps {
  value: string;
  handleChangeValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Editor = ({ handleChangeValue, value }: IProps) => {
  return (
    <textarea
      onChange={handleChangeValue}
      placeholder="Please write a few words..."
      rows={1}
      value={value}
      className="resize-none h-full courier outline-none w-full block min-w-full p-5 min-h-[43vh] lg:min-h-[51.5vh]"
    />
  );
};

export default Editor;
