import { demoContent } from "../content/demo";
import { useDemo } from "./useDemo";

const DemoNotice = () => {
  const { info } = useDemo();
  return <span>{demoContent.legal.notice(info.business)}</span>;
};

export default DemoNotice;
