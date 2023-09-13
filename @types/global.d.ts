import { IChannelIO } from "../src/marketing/channelTalk/ChannelTalkService/types";
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare global {
  interface Window {
    ChannelIO?: IChannelIO;
    ChannelIOInitialized?: boolean;
    dataLayer: any[];
  }
}
