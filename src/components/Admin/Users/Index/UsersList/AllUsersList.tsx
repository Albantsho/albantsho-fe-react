import { Box } from "@mui/material";
import OneUser from "./OneUser/OneUser";

const allUsersList: Array<{
  id: number;
  name: string;
  role: string;
  status?: "Freeze" | "Block" | undefined;
}> = [
  { id: 1, name: "Ryan Dokidis", role: "Producer", status: "Block" },
  { id: 2, name: "Tiana Gouse", role: "Writer", status: "Freeze" },
  { id: 3, name: "Ryan Dokidis sadsdas", role: "Producer" },
  { id: 4, name: "Ryan Dokidis", role: "Producer", status: "Block" },
  { id: 5, name: "Tiana Gouse", role: "Writer", status: "Freeze" },
  { id: 6, name: "Ryan Dokidis", role: "Producer" },
  { id: 7, name: "Ryan Dokidis", role: "Producer" },
  { id: 8, name: "Tiana Gouse", role: "Writer" },
  { id: 9, name: "Ryan Dokidis", role: "Producer" },
];

const AllUsersList = () => {
  return (
    <Box
      className="gap-4 mt-8 mb-16 grid sm:flex sm:flex-col"
      gridTemplateColumns={{
        xs: "repeat(auto-fill, minmax(200px, auto))",
      }}
    >
      {allUsersList.map((user) => (
        <OneUser key={user.id} user={user} />
      ))}
    </Box>
  );
};

export default AllUsersList;
