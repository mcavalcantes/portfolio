export function LogoBlack({ className }: { className?: string }) {
  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_31_136)">
        <path d="M6 58L64 0V64L0 128V0H6V58Z" fill="black" />
        <path d="M128 128H122V70L64 128V64L128 0V128Z" fill="black" />
      </g>
      <defs>
        <clipPath id="clip0_31_136">
          <rect width="128" height="128" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
