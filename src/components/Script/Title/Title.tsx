import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { IFullInformationScript } from "interfaces/script";
import TitlePageNav from "./TitlePageNav/TitlePageNav";
import useTitle from "./useTitle";

interface IProps {
  script: IFullInformationScript;
}

const Title = ({ script }: IProps) => {
  const {
    errors,
    handleSubmit,
    loading,
    onSubmit,
    register,
    dateValue,
    handleChangeDateValue,
  } = useTitle({ script });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TitlePageNav loading={loading} />
      <section className="bg-tinted-50/50 w-full h-screen px-5 sm:px-10 lg:px-20 mt-5 lg:mt-0 text-center">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="max-w-3xl bg-white w-full h-full mx-auto  px-5 sm:px-10 lg:px-20 py-20 lg:py-40 flex flex-col gap-y-7 lg:gap-y-12">
            <div>
              <input
                {...register("title")}
                className={`${
                  errors.title ? "border-error-500" : "border-white"
                } text-center w-full h-10 rounded-md duration-100 outline-none px-2 py-3 border-2 focus:border-primary-700 placeholder:text-center placeholder:font-bold placeholder:text-black font-bold underline courier`}
                defaultValue={script.title}
                placeholder="YOUR SCRIPT TITLE"
              />
              {errors.title?.message && (
                <span className="text-error-700 text-base">
                  {errors.title.message}
                </span>
              )}
            </div>

            <div>
              <input
                {...register("writer")}
                className={`${
                  errors.writer ? "border-error-500" : "border-white"
                } text-center w-full h-10 rounded-md duration-100 outline-none px-2 py-3 border-2 focus:border-primary-700 placeholder:text-center placeholder:font-bold placeholder:text-black font-bold underline courier`}
                placeholder="Written by"
              />
              {errors.writer?.message && (
                <span className="text-error-700 text-base">
                  {errors.writer.message}
                </span>
              )}
            </div>

            <div>
              <input
                {...register("names")}
                className={`${
                  errors.names ? "border-error-500" : "border-white"
                } text-center w-full h-10 rounded-md duration-100 outline-none px-2 py-3 border-2 focus:border-primary-700 placeholder:text-center placeholder:font-bold placeholder:text-black font-bold underline courier`}
                placeholder="THIS IS WHERE THE NAMES GO"
              />
              {errors.names?.message && (
                <span className="text-error-700 text-base">
                  {errors.names.message}
                </span>
              )}
            </div>

            <div>
              <input
                {...register("any")}
                className={`${
                  errors.any ? "border-error-500 " : "border-white"
                } text-center w-full h-10 rounded-md duration-100 outline-none px-2 py-3 border-2 focus:border-primary-700 placeholder:text-center placeholder:font-bold placeholder:text-black font-bold underline courier`}
                placeholder="Based on (if any)"
              />
              {errors.any?.message && (
                <span className="text-error-700 text-base">
                  {errors.any.message}
                </span>
              )}
            </div>
            <div className="fle text-center items-center justify-center">
              <MobileDatePicker
                inputFormat="MM/DD/YYYY"
                value={dateValue}
                onChange={handleChangeDateValue}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": {
                          borderColor: "white",
                          textAlign: "center",
                        },
                      },
                      "& .MuiOutlinedInput-root:hover": {
                        "& > fieldset": {
                          borderColor: "white",
                        },
                      },
                    }}
                    InputProps={{
                      className: "h-10 rounded-md font-bold courier",
                      // inputProps: {
                      //   style: { textAlign: "center" },
                      // },
                    }}
                  />
                )}
              />
            </div>
          </div>
        </LocalizationProvider>
      </section>
    </form>
  );
};

export default Title;
