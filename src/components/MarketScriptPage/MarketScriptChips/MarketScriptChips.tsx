import { Chip, ListItem } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";

const MarketScriptChips = () => {
  return (
    <div className="">
      <ListItem className="flex gap-2" alignItems="center">
        <Chip size="medium" label="High Concept" />
        <Chip size="medium" label="High Concept" />
        <Chip size="medium" label="High Concept" />
      </ListItem>
      <ListItem className="flex">
        <CustomInput
        
          variant="outlined"
          size="medium"
          placeholder="Production Cost - High"
        />
        <CustomInput
        
          variant="outlined"
          size="medium"
          placeholder="No of Cast - 20"
        />
      </ListItem>
    </div>
  );
};

export default MarketScriptChips;
