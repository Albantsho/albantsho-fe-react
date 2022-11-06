import OneUser from "./OneUser/OneUser";

const allUsersList: Array<{
  id: number;
  name: string;
  role: string;
  status?: "Freeze" | "Block" | undefined;
}> = [
  { id: 1, name: "Ryan Dokidis", role: "Producer", status: "Block" },
  { id: 2, name: "Tiana Gouse", role: "Writer", status: "Freeze" },
  { id: 3, name: "Ryan Dokidis", role: "Producer" },
  { id: 4, name: "Ryan Dokidis", role: "Producer", status: "Block" },
  { id: 5, name: "Tiana Gouse", role: "Writer", status: "Freeze" },
  { id: 6, name: "Ryan Dokidis", role: "Producer" },
  { id: 4, name: "Ryan Dokidis", role: "Producer" },
  { id: 5, name: "Tiana Gouse", role: "Writer" },
  { id: 6, name: "Ryan Dokidis", role: "Producer" },
];

const AllUsersList = () => {
  return (
    <div className="flex flex-col gap-4 mt-8 mb-16">
      {allUsersList.map((user) => (
        <OneUser key={user.id} user={user} />
      ))}
    </div>
  );
};

export default AllUsersList;
