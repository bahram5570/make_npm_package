declare module "make_npm_package" {
  export const useTimer: (text?: string) => {
    seconds: number;
    reset: () => void;
  };
}
