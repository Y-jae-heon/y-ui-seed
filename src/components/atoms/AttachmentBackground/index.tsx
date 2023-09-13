import { AttachmentBackgroundProps } from "./types";

export default function AttachmentBackground(props: AttachmentBackgroundProps) {
  const { children, src } = props;

  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      className=" bg-no-repeat bg-cover bg-center bg-fixed"
    >
      {children}
    </div>
  );
}
