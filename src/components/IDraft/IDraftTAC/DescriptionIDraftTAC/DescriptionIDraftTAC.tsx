import { Typography } from "@mui/material";
import Btn from "@shared/Btn/Btn";
import Link from "next/link";
import React from "react";

const IDraftTAC = () => {
  return (
    <div className="pt-8 lg:pt-14 pb-20 px-5 sm:px-10  max-w-screen-xl mx-auto">
      <Typography variant="body2" color="grey.500" paragraph>
        By applying to this workshop (i.e. The idraft Workshop), you as an
        applicant writer agree and confirm that:
      </Typography>
      <Typography variant="body2" color="grey.500" paragraph>
        a. All intellectual property concerning or related to the idea and
        script submitted by you vests solely on you and you grant us the right
        to reasonably use your intellectual property rights right concerning or
        attached to the submitted idea and script for the purpose of publicity
        and training.
      </Typography>
      <Typography variant="body2" color="grey.500" paragraph>
        b. That in the event that there is a 3rd party claim in respect of all
        or any part of the intellectual property or any other right concerning
        or attached to the idea and script submitted by you in your application
        for the idraft workshop, you undertake to personally bear all
        liabilities and further agree that you absolve Albantsho form any
        liability connected thereto whether imminent or in the long run.
      </Typography>
      <Typography variant="body2" color="grey.500" paragraph>
        c. Notwithstanding the above and/or any other communication from
        Albantsho Limited whether written or oral, all ideas and scripts you
        send to Albantsho and that does not comply with the terms herein and/or
        the eligibility requirement prescribed for applying for this workshop,
        will be treated as an unsolicited submission or application. In such
        case, you agree that Albantsho is under no obligation for any and all
        claims or liability (whether from you or 3rd party) in respect of all or
        any part of the intellectual property or any other right concerning or
        attached to the unsolicited idea and script submitted by you.
        Furthermore, you undertake to personally bear all liabilities and agree
        that you absolve Albantsho form any liability connected thereto whether
        imminent or in the long run.
      </Typography>
      <Typography variant="body2" color="grey.500" paragraph>
        d. You are a beginner or intermediate writer and that you have disclosed
        same in your application. If selected, you will sell the script
        developed within the workshop at the end of same through the platform
        (i.e. Albantsho Platform) to the purchasers (i.e. partners production
        companies and brands) and subject to the applicable selection and
        platform terms and policy thereon. In this regard, you agree that you
        will waive and transfer to the purchaser, all intellectual property
        (which you undertake vests solely on you) concerning or related to the
        idea and script submitted and subsequently developed by you to the final
        draft. In the event that you are selected as a participant, Albantsho
        Limited is NOT obligated to sell your script at the end of the workshop
        and that Albantsho Limited makes NO such commitment or undertaken.
      </Typography>
      <Typography variant="body2" color="grey.500" paragraph>
        e. Albantsho is not obligated to send feedback (detailed or otherwise)
        on ideas or scripts submitted by you provided that you are entitled to
        communications concerning confirmation of application, and acceptance or
        otherwise of your application. If selected, participation is subject to
        you executing a ‘participation contract’ with Albantsho Limited and that
        selection to participate in the workshop itself places no legal
        obligation whatsoever on Albantsho Limited until the said participation
        contract is executed. Upon submission of your application, the writer’s
        obligations contained in the terms of use and privacy policy on the
        Albantsho platform are automatically binding on you.
      </Typography>

      <Typography variant="body2" color="grey.500">
        f. The applicable law governing the application process is the Law of
        the Federal Republic of Nigeria. All disputes arising from or connected
        to this workshop and application process shall first be subject to
        Mediation at the Lagos multidoor courthouse and subsequently,
        Arbitration with the seat in Nigeria and the governing law being the
        Arbitration and Conciliation Act of Nigeria. All terms and conditions
        apply severally such that in the event that one or more parts are
        considered illegal under Nigerian Law, the other unaffected parts will
        continue to apply.
      </Typography>

      <div className="flex justify-center mt-16 lg:mt-14 sm:justify-start">
        <Link
          href="https://docs.google.com/forms/u/2/d/e/1FAIpQLSd-p3Eg4h00ok2RlKv778U6yBWirxbLLsGieN5FoRyiSZZ7Vw/viewform?usp=send_form"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <Btn className="lg:py-6 lg:px-8 py-3 px-6" size="large">
            I agree
          </Btn>
        </Link>
      </div>
    </div>
  );
};

export default IDraftTAC;
