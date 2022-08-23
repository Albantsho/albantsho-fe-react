import ImageAuth from "./ImageSection/ImageAuth";

interface IProps {
  children: React.ReactNode;
}

const AuthenticationLayout = ({ children }: IProps) => {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen">
      <ImageAuth />
      <div className="flex-[2]">{children}</div>
    </main>
  );
};

export default AuthenticationLayout;
