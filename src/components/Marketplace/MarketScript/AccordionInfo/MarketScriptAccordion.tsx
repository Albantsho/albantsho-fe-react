import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import lock from "./assets/lock.png";
import Image from "next/image";
import Btn from "@shared/Btn/Btn";
import Link from "next/link";
import AccordionCustom from "./AccordionCustom/AccordionCustom";
import routes from "routes/routes";
import { IProduct } from "interfaces/product";
import { IFullInformationScript } from "interfaces/script";

interface IProps {
  script: IFullInformationScript;
}

export default function MarketScriptAccordion({ script }: IProps) {
  return (
    <div className=" flex-1">
      <AccordionCustom title="LOGLINE">
        <Typography variant="body2" className="text-[#484848]">
          {script.log_line}
        </Typography>
      </AccordionCustom>
      <AccordionCustom title="SYNOPSIS">
        <div>
          {/* {!user.subscription_count ? ( */}
          <div className="flex gap-5 sm:p-12 items-center flex-col mb-3 sm:flex-row">
            <div className="max-w-[106px] flex-shrink-0">
              <Image src={lock} alt="lock" />
            </div>
            <div className="flex flex-col sm:max-w-xs">
              <Typography
                color="primary.700"
                variant="h4"
                className="futura leading-normal"
              >
                oops!
              </Typography>
              <Typography variant="body1" mb={2} className="text-tinted-500">
                You’re unable to view this content because you’re not
                subscribed.
              </Typography>
              <Link href={`${routes.marketplace}/subscription`} passHref>
                <Btn
                  size="large"
                  sx={{ padding: { xs: "6px 12px", md: "12px 24px" } }}
                  className="mr-auto"
                >
                  View plans
                </Btn>
              </Link>
            </div>
          </div>
          {/* ) : (
            <Typography variant="body2" className="text-[#484848]">
              {script.synopsis}
            </Typography>
          )} */}
        </div>
      </AccordionCustom>
      <AccordionCustom title="STORY WORLD">
        <Typography variant="body2" className="text-[#484848]">
          {script.story_world}
        </Typography>
      </AccordionCustom>
      <AccordionCustom title="MOTIVATION & PERSONAL NOTE">
        <Typography variant="body2" className="text-[#484848]">
          {script.motivation}
        </Typography>
      </AccordionCustom>
      <AccordionCustom title="THEME">
        <div className="flex gap-3 flex-wrap">
          <Chip
            className="text-primary-700 text-sm rounded-3xl bg-tinted-50/60 py-5 px-4"
            size="medium"
            label="Love"
          />
          <Chip
            className="text-primary-700 text-sm rounded-3xl bg-tinted-50/60 py-5 px-4"
            size="medium"
            label="Fantasy"
          />
          <Chip
            className="text-primary-700 text-sm rounded-3xl bg-tinted-50/60 py-5 px-4"
            size="medium"
            label="Patriotism"
          />
        </div>
      </AccordionCustom>
      <AccordionCustom title="ACT STRUCTURE">
        <Typography variant="body2" className="text-[#484848]">
          {script.act_structure}
        </Typography>
      </AccordionCustom>
      <AccordionCustom title="INSPIRATION">
        <Typography variant="body2" className="text-[#484848]">
          {script.inspiration}
        </Typography>
      </AccordionCustom>
    </div>
  );
}
