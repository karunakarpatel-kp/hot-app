interface TextToImageServiceListProps {
  name: string;
  url: string;
}

export const TextToImageServiceList: TextToImageServiceListProps[] = [
  {
    name: "Stable Diffusion 2-1",
    url: process.env.STABLE_DIFFUSION_2_1_URL!,
  },
  {
    name: "Open Journey",
    url: process.env.OPEN_JOURNEY_URL!,
  },
  {
    // url: process.env.STABLE_DIFFUSION_2_1!,
    name: "IP Adapter FaceID",
    url: process.env.IP_ADAPTER_FACE_ID_URL!,
  },
  {
    name: "Stable Diffusion 1-5",
    url: process.env.STABLE_DIFFUSION_1_5_URL!,
  },
  {
    name: "Stable Diffusion Base 1.0",
    url: process.env.STABLE_DIFFUSION_BASE_1_0_URL!,
  },
  {
    name: "Epic PhotoGasm",
    url: process.env.EPIC_PHOTOGASM_URL!,
  },
];
