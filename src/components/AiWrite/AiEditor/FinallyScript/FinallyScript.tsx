import { Divider, Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import { useRouter } from "next/router";

interface IProps {
  suggestResponse: string;
  title: string;
  character: string;
}

const FinallyScript = ({ suggestResponse, title, character }: IProps) => {
  const { reload } = useRouter();

  const handleWriteNew = () => reload();

  return (
    <div>
      <Typography variant="h4" className="leading-none mb-2">
        Add Detail
      </Typography>
      <Typography color="black" variant="body2">
        Expand your story and add the details you want to your story.
      </Typography>
      <Divider className="my-4 bg-primary-main" />
      <label>titles</label>
      <textarea
        contentEditable={false}
        rows={1}
        value={title}
        className="resize-none mb-4 cursor-default text-primary-main h-full courier outline-none w-full block min-w-full p-5 min-h-[15vh]"
      />
      <label>characters</label>
      <textarea
        contentEditable={false}
        rows={1}
        value={character}
        className="resize-none mb-4 cursor-default text-primary-main h-full courier outline-none w-full block min-w-full p-5 min-h-[15vh]"
      />
      <textarea
        contentEditable={false}
        rows={1}
        value={suggestResponse}
        className="resize-none cursor-default text-primary-main h-full courier outline-none w-full block min-w-full p-5 min-h-[43vh] lg:min-h-[51.5vh]"
      />
      <Btn className="px-4 py-2 lg:px-6 mt-4 lg:py-3" onClick={handleWriteNew}>
        Write new
      </Btn>
    </div>
  );
};

export default FinallyScript;
