import { FC } from "react";

export type MintedNftsViewProps = {
  name: string;
  navigateToHome: () => void;
};
export const MintedNftsView: FC<MintedNftsViewProps> = ({
  name,
  navigateToHome,
}) => (
  <div>
    <a href="#" onClick={navigateToHome}>
      Go Back
    </a>
    <br />
    Hi ! {name}{" "}
  </div>
);