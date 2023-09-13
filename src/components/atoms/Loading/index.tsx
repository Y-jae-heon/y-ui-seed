import Lottie from "react-lottie";
import loadingJson from "../../../../public/assets/lottie/lottie-loading.json";

export default function Loading() {
  return (
    <figure>
      <Lottie
        options={{ loop: true, autoplay: true, animationData: loadingJson }}
        style={{ width: "100%", height: "100%" }}
        isClickToPauseDisabled
      />
    </figure>
  );
}
