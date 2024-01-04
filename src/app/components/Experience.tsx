import React from "react";

interface Props {
  children: React.ReactNode;
}

const Experience = ({ children }: Props) => {
  return (
    <div className="w-2/5">
      <div className="flex items-center w-full gap-6 pt-10">
        <div className="flex items-center gap-3">
          <p className="text-greenlight text-2xl">02.</p>
          <p className="text-gray font-semibold text-3xl">Expérience </p>
        </div>
        <div className="w-2/5 border-t-[0.5px] border-y-graydark"></div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum,
        libero et tincidunt iaculis, felis sapien ultricies ligula, vel cursus
        elit elit ut ipsum. Fusce id leo vel justo eleifend vulputate. Sed non
        fringilla neque. Ut id lacus vel velit feugiat facilisis. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Curabitur vitae justo a ex dapibus posuere. Maecenas ultrices
        tortor vel lacinia fringilla. Aenean eleifend justo in justo luctus, eu
        venenatis velit dapibus. Sed ullamcorper ex vitae nisi semper, ac congue
        ligula tincidunt. Nullam ultrices felis vitae sapien tincidunt, vitae
        accumsan nunc tincidunt. Nulla facilisi. Sed tincidunt lacinia justo, in
        tincidunt eros cursus vel. Proin sed efficitur lacus. Suspendisse
        potenti. Nulla facilisi. Sed suscipit mi ac dapibus bibendum.
      </p>
    </div>
  );
};

export default Experience;
