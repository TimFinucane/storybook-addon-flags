import * as React from "react";

interface IconProps extends React.SVGAttributes<SVGElement> {
  color?: string;
  size?: number;
}

export const FlagIcon = /* @__PURE__ */ React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      ref={forwardedRef}
      {...props}
      fill={color}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
    </svg>
  );
});
