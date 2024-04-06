"use client";

import React, { useState } from "react";
import RadioOption from "./RadioOption";

const RadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="grid justify-center sm:grid-cols-2 sm:grid-rows-3 gap-4 mb-[48px]">
      <RadioOption
        value="Collaboration"
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      >
        Collaboration
      </RadioOption>
      <RadioOption
        value="Investment"
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      >
        Investment
      </RadioOption>
      <RadioOption
        value="Influencer"
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      >
        Influencer
      </RadioOption>
      <RadioOption
        value="Vouch"
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      >
        Vouch
      </RadioOption>
      <RadioOption
        value="Team"
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      >
        Team
      </RadioOption>
    </div>
  );
};

export default RadioButtons;
