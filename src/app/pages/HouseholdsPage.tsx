import { useNavigate } from "react-router";
import { Search, ChevronDown, ChevronUp, UserPlus, Home } from "lucide-react";
import { useState } from "react";

type Household = {
  id: number;
  name: string;
  members: number;
  primary: string;
  team: string;
  advisor: string;
  aum: string;
};

type Client = {
  id: number;
  name: string;
  household: string;
  status: "Active" | "Inactive" | "Pending";
  team: string;
  advisor: string;
  aum: string;
};

export default function HouseholdsPage() {
  const navigate = useNavigate();
  const [sortField, setSortField] = useState<keyof Household | keyof Client>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [activeTab, setActiveTab] = useState<"households" | "clients">("households");

  const households: Household[] = [
    {
      id: 1,
      name: "Smith Family Trust",
      members: 5,
      primary: "Sarah Smith",
      team: "Wealth Management Alpha",
      advisor: "Jennifer Martinez",
      aum: "$2,450,000 CAD"
    },
    {
      id: 2,
      name: "The Johnson Estate",
      members: 3,
      primary: "Michael Johnson",
      team: "Private Banking",
      advisor: "David Chen",
      aum: "$5,925,000 CAD"
    },
    {
      id: 3,
      name: "Rodriguez Holdings",
      members: 7,
      primary: "Maria Rodriguez",
      team: "Family Office",
      advisor: "Emily Wong",
      aum: "$15,780,000 CAD"
    },
    {
      id: 4,
      name: "Chen Investments",
      members: 4,
      primary: "Robert Chen",
      team: "Wealth Management Alpha",
      advisor: "Jennifer Martinez",
      aum: "$3,250,000 CAD"
    },
    {
      id: 5,
      name: "Williams Retirement Fund",
      members: 2,
      primary: "Patricia Williams",
      team: "Retirement Planning",
      advisor: "James Thompson",
      aum: "$1,875,000 CAD"
    },
    {
      id: 6,
      name: "Anderson Partnership",
      members: 6,
      primary: "Thomas Anderson",
      team: "Corporate Advisory",
      advisor: "Sarah Miller",
      aum: "$8,340,000 CAD"
    },
    {
      id: 7,
      name: "Taylor Family Office",
      members: 8,
      primary: "Elizabeth Taylor",
      team: "Family Office",
      advisor: "Emily Wong",
      aum: "$22,100,000 CAD"
    },
    {
      id: 8,
      name: "Martinez Trust",
      members: 3,
      primary: "Carlos Martinez",
      team: "Wealth Management Beta",
      advisor: "Michael Brown",
      aum: "$4,650,000 CAD"
    },
    {
      id: 9,
      name: "Lee Holdings",
      members: 5,
      primary: "Jennifer Lee",
      team: "Private Banking",
      advisor: "David Chen",
      aum: "$7,920,000 CAD"
    },
    {
      id: 10,
      name: "Thompson Enterprises",
      members: 4,
      primary: "William Thompson",
      team: "Corporate Advisory",
      advisor: "Sarah Miller",
      aum: "$6,450,000 CAD"
    },
    {
      id: 11,
      name: "White Family Trust",
      members: 6,
      primary: "Jessica White",
      team: "Wealth Management Alpha",
      advisor: "Jennifer Martinez",
      aum: "$3,780,000 CAD"
    },
    {
      id: 12,
      name: "Garcia Portfolio",
      members: 2,
      primary: "Daniel Garcia",
      team: "Investment Advisory",
      advisor: "Robert Wilson",
      aum: "$2,150,000 CAD"
    },
    {
      id: 13,
      name: "Harris Estate Planning",
      members: 5,
      primary: "Linda Harris",
      team: "Estate Planning",
      advisor: "Amanda Clark",
      aum: "$5,560,000 CAD"
    },
    {
      id: 14,
      name: "Martin Wealth",
      members: 3,
      primary: "Christopher Martin",
      team: "Wealth Management Beta",
      advisor: "Michael Brown",
      aum: "$4,230,000 CAD"
    },
    {
      id: 15,
      name: "Lewis Charitable Foundation",
      members: 7,
      primary: "Barbara Lewis",
      team: "Philanthropy Services",
      advisor: "Karen Davis",
      aum: "$12,890,000 CAD"
    }
  ];

  const clients: Client[] = [
    {
      id: 1,
      name: "Sarah Smith",
      household: "Smith Family Trust",
      status: "Active",
      team: "Wealth Management Alpha",
      advisor: "Jennifer Martinez",
      aum: "$2,450,000 CAD"
    },
    {
      id: 2,
      name: "John Smith",
      household: "Smith Family Trust",
      status: "Active",
      team: "Wealth Management Alpha",
      advisor: "Jennifer Martinez",
      aum: "$850,000 CAD"
    },
    {
      id: 3,
      name: "Michael Johnson",
      household: "The Johnson Estate",
      status: "Active",
      team: "Private Banking",
      advisor: "David Chen",
      aum: "$5,925,000 CAD"
    },
    {
      id: 4,
      name: "Emily Johnson",
      household: "The Johnson Estate",
      status: "Active",
      team: "Private Banking",
      advisor: "David Chen",
      aum: "$1,200,000 CAD"
    },
    {
      id: 5,
      name: "Maria Rodriguez",
      household: "Rodriguez Holdings",
      status: "Active",
      team: "Family Office",
      advisor: "Emily Wong",
      aum: "$15,780,000 CAD"
    },
    {
      id: 6,
      name: "Robert Chen",
      household: "Chen Investments",
      status: "Active",
      team: "Wealth Management Alpha",
      advisor: "Jennifer Martinez",
      aum: "$3,250,000 CAD"
    },
    {
      id: 7,
      name: "Patricia Williams",
      household: "Williams Retirement Fund",
      status: "Active",
      team: "Retirement Planning",
      advisor: "James Thompson",
      aum: "$1,875,000 CAD"
    },
    {
      id: 8,
      name: "Thomas Anderson",
      household: "Anderson Partnership",
      status: "Active",
      team: "Corporate Advisory",
      advisor: "Sarah Miller",
      aum: "$8,340,000 CAD"
    },
    {
      id: 9,
      name: "Elizabeth Taylor",
      household: "Taylor Family Office",
      status: "Active",
      team: "Family Office",
      advisor: "Emily Wong",
      aum: "$22,100,000 CAD"
    },
    {
      id: 10,
      name: "Carlos Martinez",
      household: "Martinez Trust",
      status: "Active",
      team: "Wealth Management Beta",
      advisor: "Michael Brown",
      aum: "$4,650,000 CAD"
    },
    {
      id: 11,
      name: "Jennifer Lee",
      household: "Lee Holdings",
      status: "Active",
      team: "Private Banking",
      advisor: "David Chen",
      aum: "$7,920,000 CAD"
    },
    {
      id: 12,
      name: "William Thompson",
      household: "Thompson Enterprises",
      status: "Inactive",
      team: "Corporate Advisory",
      advisor: "Sarah Miller",
      aum: "$6,450,000 CAD"
    },
    {
      id: 13,
      name: "Jessica White",
      household: "White Family Trust",
      status: "Active",
      team: "Wealth Management Alpha",
      advisor: "Jennifer Martinez",
      aum: "$3,780,000 CAD"
    },
    {
      id: 14,
      name: "Daniel Garcia",
      household: "Garcia Portfolio",
      status: "Active",
      team: "Investment Advisory",
      advisor: "Robert Wilson",
      aum: "$2,150,000 CAD"
    },
    {
      id: 15,
      name: "Linda Harris",
      household: "Harris Estate Planning",
      status: "Active",
      team: "Estate Planning",
      advisor: "Amanda Clark",
      aum: "$5,560,000 CAD"
    },
    {
      id: 16,
      name: "Christopher Martin",
      household: "Martin Wealth",
      status: "Pending",
      team: "Wealth Management Beta",
      advisor: "Michael Brown",
      aum: "$4,230,000 CAD"
    },
    {
      id: 17,
      name: "Barbara Lewis",
      household: "Lewis Charitable Foundation",
      status: "Active",
      team: "Philanthropy Services",
      advisor: "Karen Davis",
      aum: "$12,890,000 CAD"
    },
    {
      id: 18,
      name: "Richard Anderson",
      household: "Anderson Partnership",
      status: "Active",
      team: "Corporate Advisory",
      advisor: "Sarah Miller",
      aum: "$2,450,000 CAD"
    },
    {
      id: 19,
      name: "Margaret Chen",
      household: "Chen Investments",
      status: "Active",
      team: "Wealth Management Alpha",
      advisor: "Jennifer Martinez",
      aum: "$1,820,000 CAD"
    },
    {
      id: 20,
      name: "David Taylor",
      household: "Taylor Family Office",
      status: "Active",
      team: "Family Office",
      advisor: "Emily Wong",
      aum: "$8,750,000 CAD"
    }
  ];

  const handleSort = (field: keyof Household | keyof Client) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const handleRowClick = (id: number) => {
    navigate("/client");
  };

  const getStatusBadgeColor = (status: Client["status"]) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Inactive":
        return "bg-gray-100 text-gray-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="w-full h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="px-10 py-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-['Libre_Baskerville'] text-[#2e3338]">
            Households & Clients
          </h1>
          <div className="flex gap-6">
            <button className="px-4 py-3 bg-[#2e3338] text-white rounded-full flex items-center gap-2 hover:bg-[#3d4349] transition-colors">
              <UserPlus size={20} />
              <span className="font-semibold">New client</span>
            </button>
            <button className="px-4 py-3 bg-[#e9ecef] text-[#2e3338] rounded-full flex items-center gap-2 hover:bg-[#dee2e6] transition-colors">
              <Home size={20} />
              <span className="font-semibold">Create household</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-[#dee2e6] mb-6">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab("households")}
              className={`px-10 py-2 relative ${
                activeTab === "households"
                  ? "text-[#0645ad] font-medium"
                  : "text-[#657381] font-medium"
              }`}
            >
              Households ({households.length})
              {activeTab === "households" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0645ad]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("clients")}
              className={`px-10 py-2 relative ${
                activeTab === "clients"
                  ? "text-[#0645ad] font-medium"
                  : "text-[#657381] font-medium"
              }`}
            >
              Clients ({clients.length})
              {activeTab === "clients" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0645ad]" />
              )}
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex gap-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#657381]" size={20} />
            <input
              type="text"
              placeholder={activeTab === "households" ? "Search households" : "Search clients"}
              className="w-full pl-12 pr-4 py-3 border-2 border-[#dee2e6] rounded-full text-[#657381] font-medium focus:outline-none focus:border-[#0645ad]"
            />
          </div>
          <button className="px-4 py-3 bg-white border border-[#dee2e6] rounded-full flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <span className="font-medium text-[#2e3338]">Filter team</span>
            <ChevronDown size={16} />
          </button>
          <button className="px-4 py-3 bg-white border border-[#dee2e6] rounded-full flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <span className="font-medium text-[#2e3338]">Advisor</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        {activeTab === "households" ? (
          <table className="w-full">
            <thead className="bg-[#fafafa] sticky top-0">
              <tr className="border-b border-[#dee2e6]">
                <th className="text-left pl-10 pr-4 py-4">
                  <button
                    onClick={() => handleSort("name")}
                    className="flex items-center gap-2 text-[#949494] text-sm font-semibold hover:text-[#2e3338] transition-colors"
                  >
                    Name
                    {sortField === "name" && (
                      sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    )}
                  </button>
                </th>
                <th className="text-left px-4 py-4">
                  <button
                    onClick={() => handleSort("members")}
                    className="flex items-center gap-2 text-[#949494] text-sm font-semibold hover:text-[#2e3338] transition-colors"
                  >
                    Members
                    {sortField === "members" && (
                      sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    )}
                  </button>
                </th>
                <th className="text-left px-4 py-4">
                  <button
                    onClick={() => handleSort("primary")}
                    className="flex items-center gap-2 text-[#949494] text-sm font-semibold hover:text-[#2e3338] transition-colors"
                  >
                    Primary
                    {sortField === "primary" && (
                      sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    )}
                  </button>
                </th>
                <th className="text-left px-4 py-4">
                  <button
                    onClick={() => handleSort("team")}
                    className="flex items-center gap-2 text-[#949494] text-sm font-semibold hover:text-[#2e3338] transition-colors"
                  >
                    Team
                    {sortField === "team" && (
                      sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    )}
                  </button>
                </th>
                <th className="text-left px-4 py-4">
                  <button
                    onClick={() => handleSort("advisor")}
                    className="flex items-center gap-2 text-[#949494] text-sm font-semibold hover:text-[#2e3338] transition-colors"
                  >
                    Advisor
                    {sortField === "advisor" && (
                      sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    )}
                  </button>
                </th>
                <th className="text-left px-4 py-4 pr-10">
                  <button
                    onClick={() => handleSort("aum")}
                    className="flex items-center gap-2 text-[#949494] text-sm font-semibold hover:text-[#2e3338] transition-colors"
                  >
                    AUM
                    {sortField === "aum" && (
                      sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    )}
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {households.map((household) => (
                <tr
                  key={household.id}
                  onClick={() => handleRowClick(household.id)}
                  className="border-b border-[#dee2e6] hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <td className="pl-10 pr-4 py-5">
                    <span className="text-[#2e3338] font-semibold text-sm">{household.name}</span>
                  </td>
                  <td className="px-4 py-5">
                    <span className="text-[#2e3338] font-medium text-sm">{household.members}</span>
                  </td>
                  <td className="px-4 py-5">
                    <span className="text-[#2e3338] font-medium text-sm">{household.primary}</span>
                  </td>
                  <td className="px-4 py-5">
                    <span className="text-[#2e3338] font-medium text-sm">{household.team}</span>
                  </td>
                  <td className="px-4 py-5">
                    <span className="text-[#2e3338] font-medium text-sm">{household.advisor}</span>
                  </td>
                  <td className="px-4 py-5 pr-10">
                    <span className="text-[#2e3338] font-medium text-sm">{household.aum}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="w-full">
            <thead className="bg-[#fafafa] sticky top-0">
              <tr className="border-b border-[#dee2e6]">
                <th className="text-left pl-10 pr-4 py-4">
                  <button
                    onClick={() => handleSort("name")}
                    className="flex items-center gap-2 text-[#949494] text-sm font-semibold hover:text-[#2e3338] transition-colors"
                  >
                    Name
                    {sortField === "name" && (
                      sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    )}
                  </button>
                </th>
                <th className="text-left px-4 py-4">
                  <button
                    onClick={() => handleSort("household")}
                    className="flex items-center gap-2 text-[#949494] text-sm font-semibold hover:text-[#2e3338] transition-colors"
                  >
                    Household
                    {sortField === "household" && (
                      sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    )}
                  </button>
                </th>
                <th className="text-left px-4 py-4">
                  <button
                    onClick={() => handleSort("status")}
                    className="flex items-center gap-2 text-[#949494] text-sm font-semibold hover:text-[#2e3338] transition-colors"
                  >
                    Status
                    {sortField === "status" && (
                      sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    )}
                  </button>
                </th>
                <th className="text-left px-4 py-4">
                  <button
                    onClick={() => handleSort("team")}
                    className="flex items-center gap-2 text-[#949494] text-sm font-semibold hover:text-[#2e3338] transition-colors"
                  >
                    Team
                    {sortField === "team" && (
                      sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    )}
                  </button>
                </th>
                <th className="text-left px-4 py-4">
                  <button
                    onClick={() => handleSort("advisor")}
                    className="flex items-center gap-2 text-[#949494] text-sm font-semibold hover:text-[#2e3338] transition-colors"
                  >
                    Advisor
                    {sortField === "advisor" && (
                      sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    )}
                  </button>
                </th>
                <th className="text-left px-4 py-4 pr-10">
                  <button
                    onClick={() => handleSort("aum")}
                    className="flex items-center gap-2 text-[#949494] text-sm font-semibold hover:text-[#2e3338] transition-colors"
                  >
                    AUM
                    {sortField === "aum" && (
                      sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    )}
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr
                  key={client.id}
                  onClick={() => handleRowClick(client.id)}
                  className="border-b border-[#dee2e6] hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <td className="pl-10 pr-4 py-5">
                    <span className="text-[#2e3338] font-semibold text-sm">{client.name}</span>
                  </td>
                  <td className="px-4 py-5">
                    <span className="text-[#2e3338] font-medium text-sm">{client.household}</span>
                  </td>
                  <td className="px-4 py-5">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(client.status)}`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="px-4 py-5">
                    <span className="text-[#2e3338] font-medium text-sm">{client.team}</span>
                  </td>
                  <td className="px-4 py-5">
                    <span className="text-[#2e3338] font-medium text-sm">{client.advisor}</span>
                  </td>
                  <td className="px-4 py-5 pr-10">
                    <span className="text-[#2e3338] font-medium text-sm">{client.aum}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
