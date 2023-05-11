import DefaultImage from "@assets/default-image-script.svg";
import {
  Autocomplete,
  Avatar,
  createFilterOptions,
  InputAdornment,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import Btn from "@shared/Btn/Btn";
import CancelBtn from "@shared/CancelBtn/CancelBtn";
import useReviewsApi from "apis/Reviews.api";
import { COLORS } from "constants/color.constant";
import { IResData } from "interfaces/response";
import { IReviewer } from "interfaces/reviews";
import { IFullInformationScript } from "interfaces/script";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useMutation } from "react-query";
import errorHandler from "utils/error-handler";
import routes from "utils/routes";
import successHandler from "utils/success-handler";

interface IProps {
  script: IFullInformationScript;
  readonly reviewersList: IReviewer[];
}

interface IReviewersListOptionType {
  inputValue?: string;
  firstName: string;
  lastName: string;
  image: string | null;
  _id: string;
}

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option: IReviewersListOptionType) =>
    `${option.firstName} ${option.lastName}`,
});

const OneRequest = ({ reviewersList, script }: IProps) => {
  const { assignReviewRequestToReviewer } = useReviewsApi();
  const [selectedReviewer, setSelectedReviewer] =
    useState<IReviewersListOptionType | null>(null);
  const { back, replace } = useRouter();

  const {
    mutate: assignedReviewToReviewerMutation,
    isLoading: loadingAssignedReviewToReviewer,
  } = useMutation<
    IResData<object>,
    Error,
    { scriptId: string; userId: string }
  >((data) => assignReviewRequestToReviewer(data), {
    onSuccess: (data) => {
      successHandler(data.message);
      replace(routes.reviewersAdminDashboard.url);
    },
    onError: (error) => errorHandler(error),
  });

  const assignedReviewToReviewer = async () => {
    if (selectedReviewer) {
      assignedReviewToReviewerMutation({
        scriptId: script._id,
        userId: selectedReviewer._id,
      });
    }
  };

  const backgroundColor = useMemo(
    () => COLORS[Math.floor(Math.random() * 14)],
    []
  );

  return (
    <div>
      <div className="mb-4">
        {script.image ? (
          <Image
            width={180}
            height={180}
            className="rounded-lg"
            alt={script.title}
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${script.image}`}
            unoptimized
          />
        ) : (
          <div className="flex justify-center w-[64px] h-[64px] items-center self-start  bg-tinted-100/60 rounded-md">
            <SvgIcon inheritViewBox fontSize="large" component={DefaultImage} />
          </div>
        )}
      </div>
      <div className="flex justify-between gap-x-6 gap-y-2 items-center flex-wrap mb-5">
        <div className="flex-1">
          <label htmlFor="title">
            <Typography
              variant="body1"
              className="futura font-medium text-primary-700"
            >
              Title
            </Typography>
          </label>
          <div
            id="title"
            className="min-w-[180px] p-3 border border-gray-300 rounded-lg"
          >
            <Typography className="leading-normal">{script.title}</Typography>
          </div>
        </div>
        <div className="flex-1">
          <label htmlFor="genre">
            <Typography
              variant="body1"
              className="futura font-medium text-primary-700"
            >
              Genre
            </Typography>
          </label>
          <div
            id="genre"
            className="min-w-[180px] p-3 border border-gray-300 rounded-lg"
          >
            <Typography className="leading-normal">
              {script.primaryGenre || <span className="opacity-0">.</span>}
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex-1 mb-5">
        <label htmlFor="short-description">
          <Typography
            variant="body1"
            className="futura font-medium text-primary-700"
          >
            Short description
          </Typography>
        </label>
        <div
          id="short-description"
          className=" p-3 border border-gray-300 rounded-lg"
        >
          <Typography className="leading-normal">{script.tagline}</Typography>
        </div>
      </div>

      <div className="mb-5 flex flex-col gap-2">
        <label htmlFor="assigned-reviewer" className="futura font-medium block">
          <Typography
            variant="body1"
            className="futura font-medium text-primary-700"
          >
            Assigned Reviewer
          </Typography>
        </label>
        <Autocomplete
          size="medium"
          id="assigned-reviewer"
          sx={{
            "& .MuiOutlinedInput-notchedOutline": { borderRadius: "12px" },
            "&.MuiButtonBase-root": { color: "#7953B5" },
          }}
          value={selectedReviewer}
          onChange={(
            value,
            newValue: IReviewersListOptionType | null
          ): void => {
            setSelectedReviewer(newValue);
          }}
          options={reviewersList}
          getOptionLabel={(option) => `${option.firstName} ${option.lastName}`}
          renderOption={(props, option) => (
            <ListItem
              disablePadding
              key={option._id}
              {...props}
              className={` px-2 sm:px-4 md:px-6`}
              sx={{ "&:last-child": { border: 0 } }}
            >
              <ListItemButton
                sx={{
                  "&.MuiListItemButton-root": {
                    borderBottom: "1px solid #EEEBF1",
                  },
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    className="w-8 h-8"
                    style={{
                      backgroundColor,
                    }}
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${option.image}`}
                    alt={option.firstName}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={`${option.firstName} ${option.lastName}`}
                  primaryTypographyProps={{
                    color: (theme) => theme.palette.primary.main,
                    fontSize: 20,
                    fontWeight: 500,
                    fontFamily: "futura",
                  }}
                />
              </ListItemButton>
            </ListItem>
          )}
          filterOptions={filterOptions}
          renderInput={({ InputProps, ...params }) => (
            <TextField
              {...params}
              InputProps={{
                ...InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <>
                      <SvgIcon
                        fontSize="medium"
                        component={AiOutlineSearch}
                        inheritViewBox
                      />
                    </>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </div>
      <div className="mt-8 flex items-stretch  gap-3">
        <Btn
          loading={loadingAssignedReviewToReviewer}
          size="large"
          className="py-3 px-5 rounded-lg  text-white bg-primary-700"
          onClick={assignedReviewToReviewer}
        >
          Assign Review
        </Btn>
        <CancelBtn onClick={() => back()} />
      </div>
    </div>
  );
};

export default OneRequest;
