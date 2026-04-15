import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import {
  Info,
  Home,
  Workflow,
  TrendingUp,
  Shield,
  BarChart3,
  Users,
  MessageSquare,
  FileText,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  User as UserIcon,
  ListTodo
} from "lucide-react";

type NavItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  path?: string;
  badge?: string;
  badgeColor?: string;
};

export default function PrimaryNavigation() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    { id: "overview", label: "Overview", icon: <Info size={18} />, path: "/" },
    { id: "households", label: "Households & Clients", icon: <Home size={18} />, path: "/households" },
    { id: "workflows", label: "Workflows", icon: <Workflow size={18} />, path: "/workflows" },
    { id: "tasks", label: "Tasks and activities", icon: <ListTodo size={18} />, path: "/tasks" },
    { id: "money", label: "Money movement", icon: <TrendingUp size={18} /> },
    { id: "portfolio", label: "Portfolio details", icon: <BarChart3 size={18} /> },
    { id: "compliance", label: "Compliance", icon: <Shield size={18} /> },
    { id: "insights", label: "Insights & Reports", icon: <BarChart3 size={18} />, path: "/wealth-advisor-dashboard" },
    { id: "user", label: "User management", icon: <Users size={18} /> },
    { id: "d1g1t", label: "d1g1t", icon: <MessageSquare size={18} /> },
    { id: "conquest", label: "Conquest", icon: <FileText size={18} /> }
  ];

  const handleNavClick = (item: NavItem) => {
    if (item.path) {
      navigate(item.path);
    }
  };

  const isActive = (item: NavItem) => {
    if (!item.path) return false;
    if (item.path === "/" && location.pathname === "/") return true;
    if (item.path === "/" && location.pathname === "/overview") return true;
    return location.pathname === item.path;
  };

  return (
    <>
      <div
        className={`h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-52"
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          {!isCollapsed && (
            <h2 className="text-lg font-semibold text-[#2e3338]">Purpose</h2>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 hover:bg-gray-100 rounded transition-colors ml-auto"
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors relative ${
                isActive(item)
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-[#657381] hover:bg-gray-50 hover:text-[#2e3338]"
              } ${isCollapsed ? "justify-center" : ""}`}
              title={isCollapsed ? item.label : undefined}
            >
              <div className="shrink-0">{item.icon}</div>
              {!isCollapsed && (
                <>
                  <span className="text-sm flex-1">{item.label}</span>
                  {item.badge && (
                    <span
                      className={`${item.badgeColor} text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold`}
                    >
                      {item.badge}
                    </span>
                  )}
                </>
              )}
              {isCollapsed && item.badge && (
                <div className={`absolute top-2 right-2 ${item.badgeColor} w-2 h-2 rounded-full`} />
              )}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-200">
          <button
            className={`w-full flex items-center gap-3 px-4 py-3 text-[#657381] hover:bg-gray-50 hover:text-[#2e3338] transition-colors ${
              isCollapsed ? "justify-center" : ""
            }`}
            title={isCollapsed ? "Help centre" : undefined}
          >
            <HelpCircle size={18} />
            {!isCollapsed && <span className="text-sm">Help centre</span>}
          </button>
          <button
            className={`w-full flex items-center gap-3 px-4 py-3 text-[#657381] hover:bg-gray-50 hover:text-[#2e3338] transition-colors ${
              isCollapsed ? "justify-center" : ""
            }`}
            title={isCollapsed ? "Advisor Name" : undefined}
          >
            <UserIcon size={18} />
            {!isCollapsed && (
              <>
                <span className="text-sm flex-1">Advisor Name</span>
                <ChevronRight size={16} />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Floating Reopen Button (when collapsed) */}
      {isCollapsed && (
        <button
          onClick={() => setIsCollapsed(false)}
          className="fixed left-16 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-r-lg p-2 shadow-lg hover:bg-gray-50 transition-colors z-50"
          aria-label="Expand navigation"
        >
          <ChevronRight size={20} />
        </button>
      )}
    </>
  );
}