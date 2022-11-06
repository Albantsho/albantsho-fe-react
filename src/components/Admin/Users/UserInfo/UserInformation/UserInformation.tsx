import { Avatar, Button, SvgIcon, Typography } from "@mui/material";
import CustomInput from "@shared/CustomInput/CustomInput";
import { useState } from "react";
import { MdNotInterested } from "react-icons/md";
import { SlDislike, SlLike } from "react-icons/sl";
import BlockingUserModal from "../Modals/BlockingUserModal/BlockingUserModal";
import FreezingUserModal from "../Modals/FreezingUserModal/FreezingUserModal";

interface IProps {
  user:
    | {
        id: number;
        name: string;
        role: string;
        status?: "Freeze" | "Block" | undefined;
      }
    | undefined;
}

const UserInformation = ({ user }: IProps) => {
  const [openBlockingUserModal, setOpenBlockingUserModal] = useState(false);
  const [openFreezingUserModal, setOpenFreezingUserModal] = useState(false);

  const handleOpenBlockingUserModal = () => setOpenBlockingUserModal(true);
  const handleOpenFreezingUserModal = () => setOpenFreezingUserModal(true);

  return (
    <>
      <div>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <div className="relative w-fit">
            <Avatar
              alt="Remy Sharp"
              src="./assets/user-photo.jpg"
              sx={{ width: 96, height: 96 }}
            />
            {user?.status === "Block" && (
              <SvgIcon
                className="bg-white absolute rounded-full top-3 -right-1"
                color="error"
                inheritViewBox
                component={MdNotInterested}
              />
            )}
            {user?.status === "Freeze" && (
              <SvgIcon
                className="bg-primary-700 absolute p-1 w-6 h-6 text-white rounded-full top-3 -right-1"
                inheritViewBox
                component={SlDislike}
              />
            )}
          </div>
          {user?.status === "Block" && (
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
              <CustomInput
                fullWidth
                defaultValue={user?.name}
                id="full-name"
                variant="outlined"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-input": { py: 1.5 },
                }}
                className="min-w-[180px]"
              />
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
              <CustomInput
                fullWidth
                id="email-address"
                variant="outlined"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-input": { py: 1.5 },
                }}
                className="min-w-[180px]"
              />
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
              <CustomInput
                fullWidth
                id="country"
                variant="outlined"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-input": { py: 1.5 },
                }}
                className="min-w-[180px]"
              />
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
              <CustomInput
                fullWidth
                id="gender"
                variant="outlined"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-input": { py: 1.5 },
                }}
                className="min-w-[180px]"
              />
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
              <CustomInput
                fullWidth
                id="category"
                variant="outlined"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-input": { py: 1.5 },
                }}
                className="min-w-[180px]"
              />
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
              <CustomInput
                fullWidth
                id="scripts-sold"
                variant="outlined"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-input": { py: 1.5 },
                }}
                className="min-w-[180px]"
              />
            </div>
          </div>
          <div className="flex gap-2 sm:gap-4">
            {user && user?.status === "Freeze" ? (
              <Button
                variant="outlined"
                className="py-2 px-3 lg:py-3 lg:px-6"
                color="primary"
                startIcon={
                  <SvgIcon fontSize="small" component={SlLike} inheritViewBox />
                }
              >
                Unfreeze user
              </Button>
            ) : (
              <Button
                variant="outlined"
                className="py-2 px-3 lg:py-3 lg:px-6"
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
            {user && user?.status === "Block" ? (
              <Button
                variant="outlined"
                className="py-2 px-3 lg:py-3 lg:px-6"
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
              </Button>
            ) : (
              <Button
                variant="outlined"
                className="py-2 px-3 lg:py-3 lg:px-6"
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
      <BlockingUserModal
        setOpenBlockingUserModal={setOpenBlockingUserModal}
        openBlockingUserModal={openBlockingUserModal}
      />
      <FreezingUserModal
        setOpenFreezingUserModal={setOpenFreezingUserModal}
        openFreezingUserModal={openFreezingUserModal}
      />
    </>
  );
};

export default UserInformation;
