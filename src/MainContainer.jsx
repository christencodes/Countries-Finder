import { useTheme } from "./ThemeProvider";

export default function MainContainer({ children }) {
  const { currentTheme } = useTheme();

  return (
    <div
      className={`h-full py-12 px-5 ${currentTheme ? "bg-blue950" : "bg-white"}`}
    >
      {children}
    </div>
  );
}
