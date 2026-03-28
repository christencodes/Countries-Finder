import { useTheme } from "./ThemeProvider";

export default function MainContainer({ children }) {
  const { theme } = useTheme();
  return (
    <div
      className={`main flex items-start gap-4 h-full px-10 ${theme ? "bg-white" : "bg-blue950"} py-10  `}
    >
      {children}
    </div>
  );
}
