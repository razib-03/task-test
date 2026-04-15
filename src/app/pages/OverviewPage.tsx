import { useNavigate } from "react-router";
import {
  ArrowRight,
  TrendingUp,
  Plus,
  Search,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { tasksApi, clientsApi, summaryApi, Task, Client, Summary } from "@/services/api";

type TimePeriod = "3M" | "6M" | "9M" | "1Y" | "2Y";

export default function OverviewPage() {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("9M");

  // Data state
  const [tasks, setTasks] = useState<Task[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Task filters and search state
  const [taskSearchQuery, setTaskSearchQuery] = useState("");
  const [taskTimePeriod, setTaskTimePeriod] = useState("Last 7 days");
  const [taskStatusFilter, setTaskStatusFilter] = useState("All status");
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);
  const [isAUMModalOpen, setIsAUMModalOpen] = useState(false);
  const [selectedClientTab, setSelectedClientTab] = useState<"Individuals" | "Households" | "Legal Entities">("Individuals");

  // New task form state
  const [newTask, setNewTask] = useState({
    title: "",
    clientName: "",
    dueDate: "",
    priority: "Medium" as "High" | "Medium" | "Low",
    status: "NEW" as Task["status"]
  });
  const [isSaving, setIsSaving] = useState(false);

  const userName = "James";

  // Fetch data on mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const [tasksData, clientsData, summaryData] = await Promise.all([
        tasksApi.getAll(),
        clientsApi.getAll(),
        summaryApi.get()
      ]);
      setTasks(tasksData);
      setClients(clientsData);
      setSummary(summaryData);
    } catch (err) {
      setError("Failed to load data. Make sure the API server is running (npm run api).");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  // Filter clients by type for top clients
  const getTopClientsByType = () => {
    let filtered = clients;
    if (selectedClientTab === "Individuals") {
      filtered = clients.filter(c => c.type === "Individual");
    } else if (selectedClientTab === "Households") {
      filtered = clients.filter(c => c.type === "Household");
    } else {
      filtered = clients.filter(c => c.type === "Legal Entity");
    }
    return filtered.sort((a, b) => b.aumValue - a.aumValue).slice(0, 10);
  };

  const topClients = getTopClientsByType();

  // Map task status for display
  const getTaskDisplayStatus = (status: Task["status"]) => {
    switch (status) {
      case "NEW": return "To do";
      case "IN PROGRESS": return "In progress";
      case "COMPLETED": return "Complete";
      default: return status;
    }
  };

  // Generate chart data based on selected period
  const getChartData = (period: TimePeriod) => {
    const months = {
      "3M": ["Jan", "Feb", "Mar"],
      "6M": ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
      "9M": ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
      "1Y": ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
      "2Y": ["Mar '24", "Jun '24", "Sep '24", "Dec '24", "Mar '25", "Jun '25", "Sep '25", "Dec '25", "Mar '26"],
    };

    const baseValue = summary?.totalAum || 300000000;
    const data = months[period].map((month, index) => ({
      month,
      aum: baseValue + index * 5000000 + (Math.random() * 10000000 - 5000000),
    }));

    return data;
  };

  const chartData = getChartData(selectedPeriod);

  const handleClientClick = (clientId: number) => {
    navigate("/client");
  };

  const getTaskStatusColor = (status: string) => {
    switch (status) {
      case "To do":
      case "NEW":
        return "text-[#657381]";
      case "In progress":
      case "IN PROGRESS":
        return "text-[#657381]";
      case "Complete":
      case "COMPLETED":
        return "text-[#00a36c]";
      case "Overdue":
        return "text-[#dc2020]";
      default:
        return "text-[#657381]";
    }
  };

  const handleCreateTask = async () => {
    try {
      setIsSaving(true);
      const task: Omit<Task, 'id'> = {
        title: newTask.title,
        description: "",
        assignee: newTask.clientName,
        dueDate: newTask.dueDate,
        priority: newTask.priority.toUpperCase() as Task["priority"],
        status: newTask.status,
        tags: [],
        phase: null,
        statusBadge: null,
        statusBadgeColor: null,
        initials: newTask.clientName.split(" ").map(n => n[0]).join("").toUpperCase()
      };

      const createdTask = await tasksApi.create(task);
      setTasks([...tasks, createdTask]);
      setIsCreateTaskModalOpen(false);
      setNewTask({
        title: "",
        clientName: "",
        dueDate: "",
        priority: "Medium",
        status: "NEW"
      });
    } catch (err) {
      console.error("Failed to create task:", err);
      alert("Failed to create task. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-screen bg-[#f9fafe] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-[#0645ad]" />
          <p className="text-[#657381]">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen bg-[#f9fafe] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 max-w-md text-center">
          <AlertCircle className="w-12 h-12 text-red-500" />
          <h2 className="text-xl font-semibold text-[#2e3338]">Error Loading Dashboard</h2>
          <p className="text-[#657381]">{error}</p>
          <button
            onClick={fetchData}
            className="px-4 py-2 bg-[#0645ad] text-white rounded-lg text-sm font-medium hover:bg-[#053d8a]"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-[#f9fafe] overflow-y-auto">
      <div className="max-w-[1600px] mx-auto px-10 py-8">
        {/* Greeting */}
        <h1 className="text-4xl font-['Libre_Baskerville'] text-[#2e3338] mb-8">
          {getGreeting()}, {userName}
        </h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div
            onClick={() => setIsAUMModalOpen(true)}
            className="bg-white rounded-lg p-6 border border-[#e9ecef] cursor-pointer hover:shadow-lg hover:border-[#0645ad] transition-all"
          >
            <div className="text-sm text-[#657381] font-medium mb-2">
              Total AUM
            </div>
            <div className="text-3xl font-semibold text-[#2e3338]">
              ${summary?.totalAum.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || '0.00'}
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-[#e9ecef]">
            <div className="text-sm text-[#657381] font-medium mb-2">
              Total clients
            </div>
            <div className="text-3xl font-semibold text-[#2e3338]">
              {summary?.totalClients || clients.length}
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-[#e9ecef]">
            <div className="text-sm text-[#657381] font-medium mb-2">
              Total households
            </div>
            <div className="text-3xl font-semibold text-[#2e3338]">
              {summary?.totalHouseholds || 0}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Tasks */}
          <div className="bg-white rounded-lg p-6 border border-[#e9ecef]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-[#2e3338]">
                Tasks
              </h2>
              <button
                onClick={() => setIsCreateTaskModalOpen(true)}
                className="flex items-center gap-2 px-3 py-2 bg-[#0645ad] text-white rounded-lg text-sm font-medium hover:bg-[#053d8a] transition-colors"
              >
                <Plus size={16} />
                New Task
              </button>
            </div>

            <div className="flex gap-2 mb-6">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#657381]"
                />
                <input
                  type="text"
                  placeholder="Search..."
                  value={taskSearchQuery}
                  onChange={(e) => setTaskSearchQuery(e.target.value)}
                  className="pl-9 pr-3 py-2 border border-[#e9ecef] rounded-lg text-sm text-[#2e3338] focus:outline-none focus:ring-2 focus:ring-[#0645ad] w-full"
                />
              </div>

              {/* Time Period Filter */}
              <select
                value={taskTimePeriod}
                onChange={(e) => setTaskTimePeriod(e.target.value)}
                className="px-3 py-2 border border-[#e9ecef] rounded-lg text-sm text-[#2e3338] font-medium focus:outline-none focus:ring-2 focus:ring-[#0645ad]"
              >
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>

              {/* Status Filter */}
              <select
                value={taskStatusFilter}
                onChange={(e) => setTaskStatusFilter(e.target.value)}
                className="px-3 py-2 border border-[#e9ecef] rounded-lg text-sm text-[#2e3338] font-medium focus:outline-none focus:ring-2 focus:ring-[#0645ad]"
              >
                <option>All status</option>
                <option>To do</option>
                <option>In progress</option>
                <option>Complete</option>
              </select>
            </div>

            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {tasks
                .filter((task) => {
                  // Search filter
                  if (
                    taskSearchQuery &&
                    !task.title.toLowerCase().includes(taskSearchQuery.toLowerCase()) &&
                    !task.assignee.toLowerCase().includes(taskSearchQuery.toLowerCase())
                  ) {
                    return false;
                  }
                  // Status filter
                  if (taskStatusFilter !== "All status") {
                    const displayStatus = getTaskDisplayStatus(task.status);
                    if (displayStatus !== taskStatusFilter) {
                      return false;
                    }
                  }
                  return true;
                })
                .map((task) => (
                  <div
                    key={task.id}
                    onClick={() => navigate("/tasks")}
                    className="p-4 rounded-lg hover:bg-[#f9fafe] cursor-pointer transition-colors group border border-transparent hover:border-[#e9ecef]"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-[#2e3338] mb-1">
                          {task.title}
                        </h3>
                        <p className="text-xs text-[#657381]">
                          {task.assignee}
                        </p>
                      </div>
                      <ArrowRight
                        size={16}
                        className="text-[#657381] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1"
                      />
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-xs text-[#657381]">
                        {task.dueDate}
                      </span>
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          task.priority === "HIGH"
                            ? "bg-[#fee] text-[#dc2020]"
                            : task.priority === "MEDIUM"
                              ? "bg-[#fff4e6] text-[#f59e0b]"
                              : "bg-[#e8f5e9] text-[#00a36c]"
                        }`}
                      >
                        {task.priority.charAt(0) + task.priority.slice(1).toLowerCase()}
                      </span>
                      <span
                        className={`text-xs font-medium ${getTaskStatusColor(task.status)}`}
                      >
                        {getTaskDisplayStatus(task.status)}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Top Clients */}
          <div className="bg-white rounded-lg p-6 border border-[#e9ecef]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-[#2e3338]">
                Top Clients
              </h2>
              <button
                onClick={() => navigate("/households")}
                className="text-sm font-medium text-[#0645ad] hover:underline"
              >
                VIEW ALL
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 mb-6 border-b border-[#e9ecef]">
              {(["Individuals", "Households", "Legal Entities"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedClientTab(tab)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    selectedClientTab === tab
                      ? "text-[#0645ad] border-b-2 border-[#0645ad]"
                      : "text-[#657381] hover:text-[#2e3338]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-2">
              {topClients.map((client, index) => (
                <div
                  key={client.id}
                  onClick={() => handleClientClick(client.id)}
                  className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-[#f9fafe] cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-sm text-[#657381] font-medium w-6">
                      {index + 1}.
                    </span>
                    <span className="text-sm text-[#2e3338] font-medium">
                      {client.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-[#2e3338] font-semibold">
                      {client.aum}
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-[#657381] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              ))}
              {topClients.length === 0 && (
                <div className="text-center py-8 text-[#657381]">
                  No clients found in this category
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Create Task Modal */}
      {isCreateTaskModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-[#2e3338]">
                Create New Task
              </h3>
              <button
                onClick={() => setIsCreateTaskModalOpen(false)}
                className="text-[#657381] hover:text-[#2e3338] transition-colors"
              >
                x
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#2e3338] mb-1">
                  Task title
                </label>
                <input
                  type="text"
                  value={newTask.title}
                  onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                  className="w-full px-3 py-2 border border-[#e9ecef] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0645ad]"
                  placeholder="Enter task title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2e3338] mb-1">
                  Client
                </label>
                <select
                  value={newTask.clientName}
                  onChange={(e) => setNewTask({...newTask, clientName: e.target.value})}
                  className="w-full px-3 py-2 border border-[#e9ecef] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0645ad]"
                >
                  <option value="">Select client</option>
                  {clients.filter(c => c.type === "Individual").map(client => (
                    <option key={client.id} value={client.name}>{client.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2e3338] mb-1">
                  Due date
                </label>
                <input
                  type="date"
                  value={newTask.dueDate}
                  onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
                  className="w-full px-3 py-2 border border-[#e9ecef] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0645ad]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#2e3338] mb-1">
                    Priority
                  </label>
                  <select
                    value={newTask.priority}
                    onChange={(e) => setNewTask({...newTask, priority: e.target.value as "High" | "Medium" | "Low"})}
                    className="w-full px-3 py-2 border border-[#e9ecef] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0645ad]"
                  >
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2e3338] mb-1">
                    Status
                  </label>
                  <select
                    value={newTask.status}
                    onChange={(e) => setNewTask({...newTask, status: e.target.value as Task["status"]})}
                    className="w-full px-3 py-2 border border-[#e9ecef] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0645ad]"
                  >
                    <option value="NEW">To do</option>
                    <option value="IN PROGRESS">In progress</option>
                    <option value="COMPLETED">Complete</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setIsCreateTaskModalOpen(false)}
                disabled={isSaving}
                className="flex-1 px-4 py-2 border border-[#e9ecef] text-[#2e3338] rounded-lg text-sm font-medium hover:bg-[#f9fafe] transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateTask}
                disabled={!newTask.title || !newTask.clientName || !newTask.dueDate || isSaving}
                className="flex-1 px-4 py-2 bg-[#0645ad] text-white rounded-lg text-sm font-medium hover:bg-[#053d8a] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSaving ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create task"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AUM Over Time Modal */}
      {isAUMModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
        >
          <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-[#2e3338]">
                  AUM Over Time
                </h3>
                <p className="text-sm text-[#657381] mt-1">
                  Total AUM: ${summary?.totalAum.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || '0.00'}
                </p>
              </div>
              <button
                onClick={() => setIsAUMModalOpen(false)}
                className="text-[#657381] hover:text-[#2e3338] transition-colors text-3xl leading-none"
              >
                x
              </button>
            </div>

            <div className="mb-6 flex justify-end">
              <div className="flex gap-2">
                {(["3M", "6M", "9M", "1Y", "2Y"] as TimePeriod[]).map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedPeriod === period
                        ? "bg-[#0645ad] text-white"
                        : "bg-[#f5f5f5] text-[#657381] hover:bg-[#e9ecef]"
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>

            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="month"
                  tick={{ fill: "#657381", fontSize: 12 }}
                  axisLine={{ stroke: "#e9ecef" }}
                />
                <YAxis
                  tick={{ fill: "#657381", fontSize: 12 }}
                  axisLine={{ stroke: "#e9ecef" }}
                  tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
                />
                <Tooltip
                  formatter={(value: number) => [
                    `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                    "AUM",
                  ]}
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e9ecef",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="aum"
                  stroke="#0645ad"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsAUMModalOpen(false)}
                className="px-6 py-2 bg-[#0645ad] text-white rounded-lg text-sm font-medium hover:bg-[#053d8a] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
