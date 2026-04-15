import { useState } from "react";
import { useNavigate } from "react-router";
import { Plus, Search, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

type Workflow = {
  id: number;
  type: string;
  client: string;
  step: string;
  status: "Needs Attention" | "In Progress" | "Complete";
  updated: string;
};

type NewTask = {
  title: string;
  description: string;
  assignee: string;
  dueDate: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  tags: string;
};

export default function WorkflowsPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    type: "all",
    status: "Needs Attention",
    step: "all",
  });

  const [newTask, setNewTask] = useState<NewTask>({
    title: "",
    description: "",
    assignee: "",
    dueDate: "",
    priority: "MEDIUM",
    tags: "",
  });

  const [workflows, setWorkflows] = useState<Workflow[]>([
    { id: 1, type: "Funding", client: "Felicia OstOne", step: "Pre-process Validation", status: "Needs Attention", updated: "November 1, 2024" },
    { id: 2, type: "Funding", client: "Felicia OstOne", step: "Pre-process Validation", status: "Needs Attention", updated: "November 1, 2024" },
    { id: 3, type: "Funding", client: "Felicia OstOne", step: "Pre-process Validation", status: "Needs Attention", updated: "November 1, 2024" },
    { id: 4, type: "Funding", client: "Thom Yorke", step: "Pre-process Validation", status: "Needs Attention", updated: "September 17, 2024" },
    { id: 5, type: "Funding", client: "First testing", step: "Pre-process Validation", status: "Needs Attention", updated: "August 27, 2024" },
    { id: 6, type: "Funding", client: "First testing", step: "Pre-process Validation", status: "Needs Attention", updated: "August 27, 2024" },
    { id: 7, type: "Funding", client: "First testing", step: "Pre-process Validation", status: "Needs Attention", updated: "August 27, 2024" },
    { id: 8, type: "Funding", client: "Funding besti", step: "Pre-process Validation", status: "Needs Attention", updated: "July 22, 2024" },
    { id: 9, type: "Funding", client: "Thom Yorke", step: "Pre-process Validation", status: "Needs Attention", updated: "June 27, 2024" },
    { id: 10, type: "Funding", client: "Custodian Service", step: "Pre-process Validation", status: "Needs Attention", updated: "May 15, 2024" },
    { id: 11, type: "Funding", client: "Second for transfer", step: "Pre-process Validation", status: "Needs Attention", updated: "May 14, 2024" },
    { id: 12, type: "Funding", client: "James Anderson", step: "Pre-process Validation", status: "Needs Attention", updated: "April 28, 2024" },
    { id: 13, type: "Onboarding", client: "Sarah Smith", step: "Document Review", status: "In Progress", updated: "February 1, 2024" },
    { id: 14, type: "Onboarding", client: "Michael Johnson", step: "Compliance Check", status: "In Progress", updated: "January 28, 2024" },
    { id: 15, type: "IPS group creation", client: "Taylor Family Office", step: "Approval Pending", status: "Complete", updated: "January 15, 2024" },
  ]);

  const handleCreateTask = () => {
    // Task creation logic
    console.log("Creating task:", newTask);
    
    // Close modal and reset form
    setIsNewTaskModalOpen(false);
    setNewTask({
      title: "",
      description: "",
      assignee: "",
      dueDate: "",
      priority: "MEDIUM",
      tags: "",
    });

    // Navigate to tasks page
    navigate("/tasks");
  };

  const handleWorkflowClick = (workflow: Workflow) => {
    navigate("/client");
  };

  const getStatusColor = (status: Workflow["status"]) => {
    switch (status) {
      case "Needs Attention":
        return "text-[#dc2020]";
      case "In Progress":
        return "text-[#657381]";
      case "Complete":
        return "text-[#00a36c]";
      default:
        return "text-[#657381]";
    }
  };

  const filteredWorkflows = workflows.filter((workflow) => {
    const matchesSearch = workflow.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         workflow.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         workflow.step.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = selectedFilters.status === "all" || workflow.status === selectedFilters.status;
    const matchesType = selectedFilters.type === "all" || workflow.type === selectedFilters.type;
    const matchesStep = selectedFilters.step === "all" || workflow.step === selectedFilters.step;

    return matchesSearch && matchesStatus && matchesType && matchesStep;
  });

  return (
    <div className="w-full h-screen bg-[#f9fafe] overflow-y-auto">
      <div className="max-w-[1600px] mx-auto px-10 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-['Libre_Baskerville'] text-[#2e3338]">
            Workflows
          </h1>
          <Button
            onClick={() => setIsNewTaskModalOpen(true)}
            className="bg-[#0645ad] hover:bg-[#053d99] text-white px-6 py-2 rounded-lg flex items-center gap-2"
          >
            <Plus size={18} />
            Add Task
          </Button>
        </div>

        {/* My Workflows Card */}
        <div className="bg-white rounded-lg border border-[#e9ecef]">
          {/* Card Header */}
          <div className="px-6 py-4 border-b border-[#e9ecef] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-semibold text-[#2e3338]">
                My Workflows <span className="text-sm text-[#657381] font-normal">(80)</span>
              </h2>
            </div>
            <button className="text-sm text-[#0645ad] hover:underline font-medium">
              Export List
            </button>
          </div>

          {/* Search and Filters */}
          <div className="px-6 py-4 border-b border-[#e9ecef] flex items-center justify-between gap-4">
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#657381]" size={16} />
              <input
                type="text"
                placeholder="Type search text here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[#e9ecef] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0645ad]"
              />
            </div>
            <div className="flex gap-3">
              <select
                value={selectedFilters.type}
                onChange={(e) => setSelectedFilters({ ...selectedFilters, type: e.target.value })}
                className="px-3 py-2 border border-[#e9ecef] rounded-lg text-sm text-[#2e3338] font-medium focus:outline-none focus:ring-2 focus:ring-[#0645ad] min-w-[120px]"
              >
                <option value="all">Type:</option>
                <option value="Funding">Funding</option>
                <option value="Onboarding">Onboarding</option>
                <option value="IPS group creation">IPS group creation</option>
              </select>
              <select
                value={selectedFilters.status}
                onChange={(e) => setSelectedFilters({ ...selectedFilters, status: e.target.value as any })}
                className="px-3 py-2 border border-[#e9ecef] rounded-lg text-sm text-[#2e3338] font-medium focus:outline-none focus:ring-2 focus:ring-[#0645ad] min-w-[160px]"
              >
                <option value="all">Status:</option>
                <option value="Needs Attention">Needs Attention</option>
                <option value="In Progress">In Progress</option>
                <option value="Complete">Complete</option>
              </select>
              <select
                value={selectedFilters.step}
                onChange={(e) => setSelectedFilters({ ...selectedFilters, step: e.target.value })}
                className="px-3 py-2 border border-[#e9ecef] rounded-lg text-sm text-[#2e3338] font-medium focus:outline-none focus:ring-2 focus:ring-[#0645ad] min-w-[120px]"
              >
                <option value="all">Step:</option>
                <option value="Pre-process Validation">Pre-process Validation</option>
                <option value="Document Review">Document Review</option>
                <option value="Compliance Check">Compliance Check</option>
                <option value="Approval Pending">Approval Pending</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#fafafa] border-b border-[#e9ecef]">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#949494] uppercase tracking-wider">
                    Type
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#949494] uppercase tracking-wider">
                    Client
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#949494] uppercase tracking-wider">
                    Step
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#949494] uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#949494] uppercase tracking-wider">
                    Updated
                  </th>
                  <th className="w-12"></th>
                </tr>
              </thead>
              <tbody>
                {filteredWorkflows.map((workflow) => (
                  <tr
                    key={workflow.id}
                    onClick={() => handleWorkflowClick(workflow)}
                    className="border-b border-[#e9ecef] hover:bg-[#f9fafe] cursor-pointer transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <span className="text-sm text-[#2e3338]">{workflow.type}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-[#2e3338]">{workflow.client}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-[#2e3338]">{workflow.step}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-sm font-medium ${getStatusColor(workflow.status)}`}>
                        {workflow.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-[#2e3338]">{workflow.updated}</span>
                    </td>
                    <td className="px-6 py-4">
                      <ArrowRight
                        size={16}
                        className="text-[#657381] opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* New Task Modal */}
      <Dialog open={isNewTaskModalOpen} onOpenChange={setIsNewTaskModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-[#2e3338]">Create New Task</DialogTitle>
            <DialogDescription className="text-sm text-[#657381]">
              Add a new task to your workflow. Fill in the details below.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="task-title" className="text-sm font-medium text-[#2e3338]">
                Task Title <span className="text-red-500">*</span>
              </Label>
              <Input
                id="task-title"
                placeholder="Enter task title"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                className="border-[#e9ecef] focus:ring-[#0645ad]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="task-description" className="text-sm font-medium text-[#2e3338]">
                Description
              </Label>
              <Textarea
                id="task-description"
                placeholder="Enter task description"
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                className="border-[#e9ecef] focus:ring-[#0645ad] min-h-[100px]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="task-assignee" className="text-sm font-medium text-[#2e3338]">
                  Assignee <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="task-assignee"
                  placeholder="Enter assignee name"
                  value={newTask.assignee}
                  onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
                  className="border-[#e9ecef] focus:ring-[#0645ad]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="task-duedate" className="text-sm font-medium text-[#2e3338]">
                  Due Date <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="task-duedate"
                  type="date"
                  value={newTask.dueDate}
                  onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                  className="border-[#e9ecef] focus:ring-[#0645ad]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="task-priority" className="text-sm font-medium text-[#2e3338]">
                  Priority
                </Label>
                <Select
                  value={newTask.priority}
                  onValueChange={(value: any) => setNewTask({ ...newTask, priority: value })}
                >
                  <SelectTrigger className="border-[#e9ecef] focus:ring-[#0645ad]">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="LOW">Low</SelectItem>
                    <SelectItem value="MEDIUM">Medium</SelectItem>
                    <SelectItem value="HIGH">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="task-tags" className="text-sm font-medium text-[#2e3338]">
                  Tags
                </Label>
                <Input
                  id="task-tags"
                  placeholder="e.g., KYC, Compliance"
                  value={newTask.tags}
                  onChange={(e) => setNewTask({ ...newTask, tags: e.target.value })}
                  className="border-[#e9ecef] focus:ring-[#0645ad]"
                />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsNewTaskModalOpen(false)}
              className="border-[#e9ecef] text-[#657381] hover:bg-[#f9fafe]"
            >
              Cancel
            </Button>
            <Button
              onClick={handleCreateTask}
              disabled={!newTask.title || !newTask.assignee || !newTask.dueDate}
              className="bg-[#0645ad] hover:bg-[#053d99] text-white"
            >
              Create Task
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
