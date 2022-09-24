import ImageAuth from "./ImageSection/ImageAuth";

interface IProps {
  children: React.ReactNode;
}

const AuthenticationLayout = ({ children }: IProps) => {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen  mx-auto">
      <ImageAuth />
      <div className="flex-[2] max-w-screen-lg xl:mr-auto pb-16">
        {children}
      </div>
    </main>
  );
};

export default AuthenticationLayout;
