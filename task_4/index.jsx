import { useState } from "react";

type CommonBlockProps = {
  mouseEnterCallback: () => void;
  children: React.ReactNode;
};

const CommonBlock = ({ mouseEnterCallback, children }: CommonBlockProps) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallback();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {children}
    </div>
  );
};

export const Block1 = ({
  mouseEnterCallback,
  imgSrc,
  imgAlt,
}: {
  mouseEnterCallback: () => void;
  imgSrc: string;
  imgAlt: string;
}) => (
  <CommonBlock mouseEnterCallback={mouseEnterCallback}>
    <img src={imgSrc} alt={imgAlt} />
  </CommonBlock>
);

export const Block2 = ({
  mouseEnterCallback,
  content,
}: {
  mouseEnterCallback: () => void;
  content: string;
}) => (
  <CommonBlock mouseEnterCallback={mouseEnterCallback}>
    <p>{content}</p>
  </CommonBlock>
);

export const Block3 = ({
  mouseEnterCallback,
  userData,
}: {
  mouseEnterCallback: () => void;
  userData: { country: string; street: string };
}) => (
  <CommonBlock mouseEnterCallback={mouseEnterCallback}>
    <address>
      country: {userData.country}, street: {userData.street}
    </address>
  </CommonBlock>
);
