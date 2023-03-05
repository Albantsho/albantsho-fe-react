import { LoadingButton } from "@mui/lab";
import { Avatar, Button, SvgIcon, Tooltip, Typography } from "@mui/material";
import useAuthApi from "apis/Auth.api";
import countryList from "config/country-list.json";
import { IResData } from "interfaces/response";
import { IUserInformationInAdminPanel } from "interfaces/user";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense, useState } from "react";
import { MdNotInterested } from "react-icons/md";
import { SlDislike, SlLike } from "react-icons/sl";
import { QueryClient, useMutation } from "react-query";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";

const BlockingUserModal = dynamic(
  () => import("../Modals/BlockingUserModal/BlockingUserModal")
);
const FreezingUserModal = dynamic(
  () => import("../Modals/FreezingUserModal/FreezingUserModal")
);

interface IProps {
  user: IUserInformationInAdminPanel;
  refetch: any;
}

const queryClient = new QueryClient();

const UserInformation = ({ user, refetch }: IProps) => {
  const { updateUserRestriction } = useAuthApi();

  const { mutate: unFreezeUserStatus, isLoading: loadingUnFreezeUserStatus } =
    useMutation<IResData<object>, Error, { freeze: boolean; id: string }>(
      (data) => updateUserRestriction({ freeze: data.freeze }, data.id),
      {
        onError: (error) => {
          errorHandler(error);
        },
        onSuccess: (data) => {
          refetch();
          queryClient.invalidateQueries("userInformationForAdmin");
          successHandler(data.message);
        },
      }
    );

  const { mutate: unBlockUserStatus, isLoading: loadingUnBlockUserStatus } =
    useMutation<IResData<object>, Error, { block: boolean; id: string }>(
      (data) => updateUserRestriction({ block: data.block }, data.id),
      {
        onError: (error) => {
          errorHandler(error);
        },
        onSuccess: (data) => {
          refetch();
          queryClient.invalidateQueries("userInformationForAdmin");
          successHandler(data.message);
        },
      }
    );

  const [openBlockingUserModal, setOpenBlockingUserModal] = useState(false);
  const [openFreezingUserModal, setOpenFreezingUserModal] = useState(false);

  const handleOpenBlockingUserModal = () => setOpenBlockingUserModal(true);
  const handleOpenFreezingUserModal = () => setOpenFreezingUserModal(true);

  const countryUser = Object.entries(countryList).find(
    (countryFlag) => countryFlag[1] === user.country
  );

  const unFreezeUser = async () =>
    unFreezeUserStatus({ freeze: false, id: user._id });

  const unBlockUser = async () =>
    unBlockUserStatus({ block: false, id: user._id });

  return (
    <>
      <div>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <div className="relative w-fit">
            <Avatar
              alt={user.firstName}
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${user.image}`}
              sx={{ width: 96, height: 96 }}
            />
            {user.block && (
              <SvgIcon
                className="bg-white absolute rounded-full top-3 -right-1"
                color="error"
                inheritViewBox
                component={MdNotInterested}
              />
            )}
            {user.freeze && (
              <SvgIcon
                className="bg-primary-700 absolute p-1 w-6 h-6 text-white rounded-full top-3 -right-1"
                inheritViewBox
                component={SlDislike}
              />
            )}
          </div>
          {user.block && (
            <Typography className="text-error-700 text-center" variant="body1">
              This user is currently blocked
            </Typography>
          )}
        </div>

        <div className="mt-6 lg:mt-10">
          <div className="flex justify-between gap-x-6 gap-y-2 items-center flex-wrap mb-5">
            <div className="flex-1">
              <label htmlFor="full-name">
                <Typography
                  variant="body1"
                  className="futura font-medium text-primary-700"
                >
                  Fullname
                </Typography>
              </label>
              <div
                id="full-name"
                className="min-w-[180px] p-3 border border-gray-300 rounded-lg"
              >
                <Typography className="leading-normal">
                  {user.firstName} {user.lastName}
                </Typography>
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="email-address">
                <Typography
                  variant="body1"
                  className="futura font-medium text-primary-700"
                >
                  Email Address
                </Typography>
              </label>
              <div
                id="email-address"
                className="min-w-[180px] p-3 border border-gray-300 rounded-lg overflow-hidden grid"
              >
                <Tooltip title={user.email}>
                  <Typography className="leading-normal overflow-ellipsis whitespace-nowrap overflow-hidden">
                    {user.email}
                  </Typography>
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-x-6 gap-y-2 items-center flex-wrap mb-5">
            <div className="flex-1">
              <label htmlFor="country">
                <Typography
                  variant="body1"
                  className="futura font-medium text-primary-700"
                >
                  Country
                </Typography>
              </label>
              <div
                id="country"
                className="min-w-[180px] p-3 border border-gray-300 rounded-lg flex gap-1"
              >
                {countryUser && (
                  <Image
                    width={37}
                    height={21}
                    src={`https://flagcdn.com/w40/${countryUser[0]}.png`}
                    alt={`${countryUser[1]} flag`}
                  />
                )}
                <Typography className="leading-normal">
                  {user.country}
                </Typography>
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="gender">
                <Typography
                  variant="body1"
                  className="futura font-medium text-primary-700"
                >
                  Gender
                </Typography>
              </label>
              <div
                id="gender"
                className="min-w-[180px] p-3 border border-gray-300 rounded-lg"
              >
                <Typography className="leading-normal">
                  {user.gender}
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-x-6 gap-y-2 items-center flex-wrap mb-8 lg:mb-11">
            <div className="flex-1">
              <label htmlFor="category">
                <Typography
                  variant="body1"
                  className="futura font-medium text-primary-700"
                >
                  Category
                </Typography>
              </label>
              <div
                id="category"
                className="min-w-[180px] p-3 border border-gray-300 rounded-lg"
              >
                <Typography className="leading-normal">
                  {user.userType}
                </Typography>
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="scripts-sold">
                <Typography
                  variant="body1"
                  className="futura font-medium text-primary-700"
                >
                  Scripts sold
                </Typography>
              </label>
              <div
                id="scripts-sold"
                className="min-w-[180px] p-3 border border-gray-300 rounded-lg"
              >
                <Typography className="leading-normal">
                  {user.soldScripts}
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-4 flex-wrap w-full">
            {user.freeze ? (
              <LoadingButton
                loading={loadingUnFreezeUserStatus}
                onClick={unFreezeUser}
                variant="outlined"
                className="py-2 px-3 lg:py-3 lg:px-6 flex-1 min-w-[180px] sm:flex-grow-0"
                color="primary"
                startIcon={
                  <SvgIcon fontSize="small" component={SlLike} inheritViewBox />
                }
              >
                Unfreeze user
              </LoadingButton>
            ) : (
              <Button
                variant="outlined"
                className="py-2 px-3 lg:py-3 lg:px-6 flex-1 min-w-[180px] sm:flex-grow-0"
                color="primary"
                onClick={handleOpenFreezingUserModal}
                startIcon={
                  <SvgIcon
                    fontSize="small"
                    component={SlDislike}
                    inheritViewBox
                  />
                }
              >
                Freeze user
              </Button>
            )}
            {user.block ? (
              <LoadingButton
                loading={loadingUnBlockUserStatus}
                onClick={unBlockUser}
                variant="outlined"
                className="py-2 px-3 lg:py-3 lg:px-6 flex-1 min-w-[180px] sm:flex-grow-0"
                color="success"
                startIcon={
                  <SvgIcon
                    fontSize="small"
                    component={MdNotInterested}
                    inheritViewBox
                  />
                }
              >
                Unblock user
              </LoadingButton>
            ) : (
              <Button
                variant="outlined"
                className="py-2 px-3 lg:py-3 lg:px-6 flex-1 min-w-[180px] sm:flex-grow-0"
                color="error"
                onClick={handleOpenBlockingUserModal}
                startIcon={
                  <SvgIcon
                    fontSize="small"
                    component={MdNotInterested}
                    inheritViewBox
                  />
                }
              >
                Block user
              </Button>
            )}
          </div>
        </div>
      </div>
      <Suspense fallback={null}>
        {openBlockingUserModal ? (
          <BlockingUserModal
            refetch={refetch}
            user={user}
            setOpenBlockingUserModal={setOpenBlockingUserModal}
            openBlockingUserModal={openBlockingUserModal}
          />
        ) : null}
      </Suspense>
      <Suspense fallback={null}>
        {openFreezingUserModal ? (
          <FreezingUserModal
            refetch={refetch}
            user={user}
            setOpenFreezingUserModal={setOpenFreezingUserModal}
            openFreezingUserModal={openFreezingUserModal}
          />
        ) : null}
      </Suspense>
    </>
  );
};

export default UserInformation;
