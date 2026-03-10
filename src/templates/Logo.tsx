type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  return (
    <span className="inline-flex items-center">
      <img
        src="/logo.png"
        alt="Built By Dave logo"
        className={props.xl ? 'h-10 w-auto' : 'h-8 w-auto'}
      />
    </span>
  );
};

export { Logo };
