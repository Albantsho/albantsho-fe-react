import { LoadingButton } from "@mui/lab";
import NotificationComponent from "@shared/NotificationComponent/NotificationComponent";
import ProfileMenu from "@shared/ProfileMenu/ProfileMenu";

interface IProps {
  loading: boolean;
}

const TitlePageNavOnDesktop = ({ loading }: IProps) => {
  return (
    <div className="lg:flex px-1 flex-1 items-center hidden">
      <div className="flex ml-auto items-center justify-end w-fit gap-12">
        <LoadingButton
          loading={loading}
          type="submit"
          className="bg-[#5D5FEF] hover:bg-[#5D5FEF]/90 px-7 py-2 rounded-lg ml-auto font-bold"
          variant="contained"
          disableElevation
        >
          Save
        </LoadingButton>
        <NotificationComponent />
        <ProfileMenu />
      </div>
    </div>
  );
};

export default TitlePageNavOnDesktop;
