import { useNavigate } from "react-router";
import { useState } from "react";
import { 
  ArrowLeft,
  Plus,
  Clock, 
  User,
  X,
  Calendar,
  Tag,
  AlertCircle,
  CheckCircle2,
  Circle
} from "lucide-react";
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

type Task = {
  id: number;
  title: string;
  description: string;
  assignee: string;
  dueDate: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  status: "NEW" | "IN PROGRESS" | "COMPLETED";
  tags: string[];
  createdDate: string;
  completedDate?: string;
  initials: string;
};

type TabType = "active" | "history";

export default function ClientTasksPage() {
  const navigate = useNavigate();
  
  // Sarah Smith's tasks - both active and completed
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Tax Planning Check-in",
      description: "Annual tax planning strategy review session",
      assignee: "Sarah Smith",
      dueDate: "2024-11-05",
      priority: "MEDIUM",
      status: "NEW",
      tags: ["Tax", "Planning"],
      createdDate: "2024-10-01",
      initials: "SS"
    },
    {
      id: 2,
      title: "Q4 Portfolio Review",
      description: "Review portfolio performance and discuss rebalancing opportunities",
      assignee: "Sarah Smith",
      dueDate: "2024-10-30",
      priority: "HIGH",
      status: "IN PROGRESS",
      tags: ["Portfolio", "Review"],
      createdDate: "2024-09-15",
      initials: "SS"
    },
    {
      id: 3,
      title: "TFSA Contribution Planning",
      description: "Plan TFSA contributions for the upcoming year",
      assignee: "Sarah Smith",
      dueDate: "2024-11-15",
      priority: "MEDIUM",
      status: "NEW",
      tags: ["TFSA", "Planning"],
      createdDate: "2024-10-05",
      initials: "SS"
    },
    // Historical completed tasks
    {
      id: 4,
      title: "Annual KYC Update",
      description: "Update Know Your Customer documentation for compliance",
      assignee: "Sarah Smith",
      dueDate: "2024-09-15",
      priority: "HIGH",
      status: "COMPLETED",
      tags: ["KYC", "Compliance"],
      createdDate: "2024-08-20",
      completedDate: "2024-09-14",
      initials: "SS"
    },
    {
      id: 5,
      title: "Q3 Portfolio Review",
      description: "Quarterly portfolio performance review",
      assignee: "Sarah Smith",
      dueDate: "2024-08-30",
      priority: "MEDIUM",
      status: "COMPLETED",
      tags: ["Portfolio", "Review"],
      createdDate: "2024-08-01",
      completedDate: "2024-08-28",
      initials: "SS"
    },
    {
      id: 6,
      title: "Estate Planning Documentation Review",
      description: "Review and update estate planning documents",
      assignee: "Sarah Smith",
      dueDate: "2024-07-20",
      priority: "HIGH",
      status: "COMPLETED",
      tags: ["Estate", "Legal"],
      createdDate: "2024-06-15",
      completedDate: "2024-07-18",
      initials: "SS"
    },
    {
      id: 7,
      title: "RRSP Contribution Review",
      description: "Review RRSP contribution room and plan contributions",
      assignee: "Sarah Smith",
      dueDate: "2024-06-30",
      priority: "MEDIUM",
      status: "COMPLETED",
      tags: ["RRSP", "Tax"],
      createdDate: "2024-05-10",
      completedDate: "2024-06-25",
      initials: "SS"
    },
    {
      id: 8,
      title: "Insurance Policy Review",
      description: "Annual review of life and disability insurance policies",
      assignee: "Sarah Smith",
      dueDate: "2024-05-15",
      priority: "LOW",
      status: "COMPLETED",
      tags: ["Insurance", "Review"],
      createdDate: "2024-04-01",
      completedDate: "2024-05-12",
      initials: "SS"
    }
  ]);

  const [activeTab, setActiveTab] = useState<TabType>("active");
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [isTaskDetailModalOpen, setIsTaskDetailModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  
  // New task form state
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "MEDIUM" as Task["priority"],
    tags: ""
  });

  const handleCreateTask = () => {
    const task: Task = {
      id: tasks.length + 1,
      title: newTask.title,
      description: newTask.description,
      assignee: "Sarah Smith",
      dueDate: newTask.dueDate,
      priority: newTask.priority,
      status: "NEW",
      tags: newTask.tags.split(",").map(t => t.trim()).filter(t => t),
      createdDate: new Date().toISOString().split('T')[0],
      initials: "SS"
    };

    setTasks([...tasks, task]);
    setIsNewTaskModalOpen(false);
    setNewTask({
      title: "",
      description: "",
      dueDate: "",
      priority: "MEDIUM",
      tags: ""
    });
  };

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    setIsTaskDetailModalOpen(true);
  };

  const handleUpdateTaskStatus = (status: Task["status"]) => {
    if (!selectedTask) return;
    
    const updatedTasks = tasks.map(t => {
      if (t.id === selectedTask.id) {
        return {
          ...t,
          status,
          completedDate: status === "COMPLETED" ? new Date().toISOString().split('T')[0] : undefined
        };
      }
      return t;
    });
    
    setTasks(updatedTasks);
    setSelectedTask({ ...selectedTask, status });
  };

  const handleDeleteTask = () => {
    if (!selectedTask) return;
    setTasks(tasks.filter(t => t.id !== selectedTask.id));
    setIsTaskDetailModalOpen(false);
    setSelectedTask(null);
  };

  const activeTasks = tasks.filter(t => t.status !== "COMPLETED");
  const completedTasks = tasks.filter(t => t.status === "COMPLETED").sort((a, b) => {
    return new Date(b.completedDate || b.dueDate).getTime() - new Date(a.completedDate || a.dueDate).getTime();
  });

  const displayedTasks = activeTab === "active" ? activeTasks : completedTasks;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "HIGH": return "text-red-600 bg-red-50";
      case "MEDIUM": return "text-yellow-600 bg-yellow-50";
      case "LOW": return "text-green-600 bg-green-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "COMPLETED": return <CheckCircle2 className="text-green-600" size={20} />;
      case "IN PROGRESS": return <Clock className="text-blue-600" size={20} />;
      case "NEW": return <Circle className="text-gray-400" size={20} />;
      default: return <Circle className="text-gray-400" size={20} />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate("/clients/sarah-smith")}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-[#2e3338]">Sarah Smith - Tasks</h1>
            <p className="text-sm text-[#657381] mt-1">Manage and track all tasks for Sarah Smith</p>
          </div>
        </div>

        {/* Tabs and Actions */}
        <div className="flex items-center justify-between">
          <div className="flex gap-6 border-b border-gray-200">
            <button 
              onClick={() => setActiveTab("active")}
              className={`pb-3 text-sm font-medium transition-colors relative ${
                activeTab === "active"
                  ? "text-[#0645ad] border-b-2 border-[#0645ad]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Active Tasks ({activeTasks.length})
            </button>
            <button 
              onClick={() => setActiveTab("history")}
              className={`pb-3 text-sm font-medium transition-colors relative ${
                activeTab === "history"
                  ? "text-[#0645ad] border-b-2 border-[#0645ad]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Task History ({completedTasks.length})
            </button>
          </div>

          <Button
            onClick={() => setIsNewTaskModalOpen(true)}
            className="bg-[#0645ad] hover:bg-[#053d99] text-white flex items-center gap-2"
          >
            <Plus size={18} />
            Add Task
          </Button>
        </div>
      </div>

      {/* Task List */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-5xl mx-auto space-y-3">
          {displayedTasks.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-500">
                {activeTab === "active" ? "No active tasks" : "No completed tasks"}
              </p>
            </div>
          ) : (
            displayedTasks.map((task) => (
              <div
                key={task.id}
                onClick={() => handleTaskClick(task)}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="mt-1">
                      {getStatusIcon(task.status)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[#2e3338] mb-1">{task.title}</h3>
                      <p className="text-sm text-[#657381] mb-3">{task.description}</p>
                      
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <div className="flex items-center gap-1 text-[#657381]">
                          <Calendar size={14} />
                          <span>Due: {formatDate(task.dueDate)}</span>
                        </div>
                        {task.completedDate && (
                          <div className="flex items-center gap-1 text-green-600">
                            <CheckCircle2 size={14} />
                            <span>Completed: {formatDate(task.completedDate)}</span>
                          </div>
                        )}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                      </div>

                      {task.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {task.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* New Task Modal */}
      <Dialog open={isNewTaskModalOpen} onOpenChange={setIsNewTaskModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Create New Task for Sarah Smith</DialogTitle>
            <DialogDescription>
              Add a new task to Sarah Smith's workflow
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="title">Task Title *</Label>
              <Input
                id="title"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                placeholder="Enter task title"
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                placeholder="Enter task description"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="dueDate">Due Date *</Label>
                <Input
                  id="dueDate"
                  type="date"
                  value={newTask.dueDate}
                  onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="priority">Priority</Label>
                <Select
                  value={newTask.priority}
                  onValueChange={(value) => setNewTask({ ...newTask, priority: value as Task["priority"] })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="HIGH">High</SelectItem>
                    <SelectItem value="MEDIUM">Medium</SelectItem>
                    <SelectItem value="LOW">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="tags">Tags (comma-separated)</Label>
              <Input
                id="tags"
                value={newTask.tags}
                onChange={(e) => setNewTask({ ...newTask, tags: e.target.value })}
                placeholder="e.g., Tax, Planning"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsNewTaskModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleCreateTask}
              disabled={!newTask.title || !newTask.dueDate}
              className="bg-[#0645ad] hover:bg-[#053d99] text-white"
            >
              Create Task
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Task Detail Modal */}
      <Dialog open={isTaskDetailModalOpen} onOpenChange={setIsTaskDetailModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          {selectedTask && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3">
                  {getStatusIcon(selectedTask.status)}
                  {selectedTask.title}
                </DialogTitle>
                <DialogDescription>
                  Task details and management
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <div>
                  <Label className="text-xs text-gray-500">Description</Label>
                  <p className="text-sm mt-1">{selectedTask.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs text-gray-500">Assignee</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <User size={16} className="text-gray-400" />
                      <span className="text-sm">{selectedTask.assignee}</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-xs text-gray-500">Priority</Label>
                    <div className="mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(selectedTask.priority)}`}>
                        {selectedTask.priority}
                      </span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-xs text-gray-500">Due Date</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar size={16} className="text-gray-400" />
                      <span className="text-sm">{formatDate(selectedTask.dueDate)}</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-xs text-gray-500">Created Date</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock size={16} className="text-gray-400" />
                      <span className="text-sm">{formatDate(selectedTask.createdDate)}</span>
                    </div>
                  </div>

                  {selectedTask.completedDate && (
                    <div className="col-span-2">
                      <Label className="text-xs text-gray-500">Completed Date</Label>
                      <div className="flex items-center gap-2 mt-1">
                        <CheckCircle2 size={16} className="text-green-600" />
                        <span className="text-sm">{formatDate(selectedTask.completedDate)}</span>
                      </div>
                    </div>
                  )}
                </div>

                {selectedTask.tags.length > 0 && (
                  <div>
                    <Label className="text-xs text-gray-500">Tags</Label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {selectedTask.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <Label className="text-xs text-gray-500">Status</Label>
                  <Select
                    value={selectedTask.status}
                    onValueChange={(value) => handleUpdateTaskStatus(value as Task["status"])}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="NEW">New</SelectItem>
                      <SelectItem value="IN PROGRESS">In Progress</SelectItem>
                      <SelectItem value="COMPLETED">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <DialogFooter className="flex justify-between">
                <Button
                  variant="destructive"
                  onClick={handleDeleteTask}
                >
                  Delete Task
                </Button>
                <Button
                  onClick={() => setIsTaskDetailModalOpen(false)}
                >
                  Close
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
