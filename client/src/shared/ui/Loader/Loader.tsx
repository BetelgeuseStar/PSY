import { Spin } from "antd";

type Props = {
  isLoading: boolean;
};

export function Loader({ isLoading }: Props) {
  return <Spin fullscreen spinning={isLoading} />;
}
