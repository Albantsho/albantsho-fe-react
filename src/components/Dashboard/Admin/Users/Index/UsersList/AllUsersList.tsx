import { Box } from "@mui/material";
import { IUserInformation } from "interfaces/user";
import OneUser from "./OneUser/OneUser";

interface IProps {
  usersList: IUserInformation[];
}

const AllUsersList = ({ usersList }: IProps) => {
  return (
    <Box
      className="gap-4 mt-8 mb-16 grid sm:flex sm:flex-col overflow-hidden"
      gridTemplateColumns={{
        xs: "repeat(auto-fill, minmax(200px, auto))",
      }}
    >
      {usersList.map((user) => (
        <OneUser key={user._id} user={user} />
      ))}
    </Box>
  );
};

export default AllUsersList;
