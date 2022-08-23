import ImageAuth from "./ImageSection/ImageAuth";

interface IProps{
    children: React.ReactNode;
}

const AuthenticationLayout = ({children}:IProps) => {
  return (
    <main className="container max-w-screen-2xl mx-auto flex flex-col md:flex-row min-h-screen">
      <ImageAuth />
      {children}
    </main>
  );
};

export default AuthenticationLayout;