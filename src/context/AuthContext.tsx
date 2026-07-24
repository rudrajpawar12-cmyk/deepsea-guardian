import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export interface Officer {
  name: string;
  role: string;
  agency: string;
  clearance: string;
  loggedIn: boolean;
}

interface AuthContextType {
  officer: Officer | null;
  login: (officer: Officer) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [officer, setOfficer] = useState<Officer | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("deepsea-officer");

    if (saved) {
      setOfficer(JSON.parse(saved));
    }
  }, []);

  const login = (data: Officer) => {
    setOfficer(data);

    localStorage.setItem(
      "deepsea-officer",
      JSON.stringify(data)
    );
  };

  const logout = () => {
    setOfficer(null);

    localStorage.removeItem("deepsea-officer");
  };

  return (
    <AuthContext.Provider
      value={{
        officer,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}