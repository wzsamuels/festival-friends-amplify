import {ReactElement, ReactNode} from "react";

interface ConditionalWrapperProps {
  condition: boolean;
  wrapper: (children: ReactNode) => ReactElement | null;
  children: ReactNode;
}

const ConditionalWrapper = ({
                              condition,
                              wrapper,
                              children,
                            }: ConditionalWrapperProps) =>
  condition ? wrapper(children) : (children as ReactElement);

export default ConditionalWrapper;