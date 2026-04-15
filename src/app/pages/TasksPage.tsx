import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import {
  Filter,
  Grid3x3,
  List,
  ChevronRight,
  Clock,
  User,
  X,
  Calendar,
  Tag,
  AlertCircle,
  Loader2
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
import { tasksApi, Task } from "@/services/api";

type ViewMode = "list" | "grid";
type TabType = "all" | "my" | "team";

export default function TasksPage() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [showFilters, setShowFilters] = useState(false);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [isTaskDetailModalOpen, setIsTaskDetailModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // New task form state
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    assignee: "",
    dueDate: "",
    priority: "MEDIUM" as Task["priority"],
    tags: ""
  });

  // Edit task form state
  const [editTask, setEditTask] = useState({
    title: "",
    description: "",
    assignee: "",
    dueDate: "",
    priority: "MEDIUM" as Task["priority"],
    tags: ""
  });

  // Filter state
  const [filters, setFilters] = useState({
    priority: "all",
    status: "all",
    assignee: "all"
  });

  // Fetch tasks on mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await tasksApi.getAll();
      setTasks(data);
    } catch (err) {
      setError("Failed to load tasks. Make sure the API server is running (npm run api).");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateTask = async () => {
    try {
      setIsSaving(true);
      const task: Omit<Task, 'id'> = {
        title: newTask.title,
        description: newTask.description,
        assignee: newTask.assignee,
        dueDate: newTask.dueDate,
        priority: newTask.priority,
        status: "NEW",
        tags: newTask.tags.split(",").map(t => t.trim()).filter(t => t),
        phase: null,
        statusBadge: null,
        statusBadgeColor: null,
        initials: newTask.assignee.split(" ").map(n => n[0]).join("").toUpperCase()
      };

      const createdTask = await tasksApi.create(task);
      setTasks([...tasks, createdTask]);
      setIsNewTaskModalOpen(false);
      setNewTask({
        title: "",
        description: "",
        assignee: "",
        dueDate: "",
        priority: "MEDIUM",
        tags: ""
      });
    } catch (err) {
      console.error("Failed to create task:", err);
      alert("Failed to create task. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    setEditTask({
      title: task.title,
      description: task.description,
      assignee: task.assignee,
      dueDate: task.dueDate,
      priority: task.priority,
      tags: task.tags.join(", ")
    });
    setIsEditMode(false);
    setIsTaskDetailModalOpen(true);
  };

  const handleUpdateTaskStatus = async (status: Task["status"]) => {
    if (selectedTask) {
      try {
        setIsSaving(true);
        const updatedTask = await tasksApi.update(selectedTask.id, { status });
        const updatedTasks = tasks.map(t =>
          t.id === selectedTask.id ? updatedTask : t
        );
        setTasks(updatedTasks);
        setSelectedTask(updatedTask);
      } catch (err) {
        console.error("Failed to update task status:", err);
        alert("Failed to update task status. Please try again.");
      } finally {
        setIsSaving(false);
      }
    }
  };

  const handleSaveTask = async () => {
    if (selectedTask) {
      try {
        setIsSaving(true);
        const updates: Partial<Task> = {
          title: editTask.title,
          description: editTask.description,
          assignee: editTask.assignee,
          dueDate: editTask.dueDate,
          priority: editTask.priority,
          tags: editTask.tags.split(",").map(t => t.trim()).filter(t => t),
          initials: editTask.assignee.split(" ").map(n => n[0]).join("").toUpperCase()
        };
        const updatedTask = await tasksApi.update(selectedTask.id, updates);
        const updatedTasks = tasks.map(t =>
          t.id === selectedTask.id ? updatedTask : t
        );
        setTasks(updatedTasks);
        setSelectedTask(updatedTask);
        setIsEditMode(false);
      } catch (err) {
        console.error("Failed to save task:", err);
        alert("Failed to save task. Please try again.");
      } finally {
        setIsSaving(false);
      }
    }
  };

  const handleDeleteTask = async () => {
    if (selectedTask && confirm("Are you sure you want to delete this task?")) {
      try {
        setIsSaving(true);
        await tasksApi.delete(selectedTask.id);
        setTasks(tasks.filter(t => t.id !== selectedTask.id));
        setIsTaskDetailModalOpen(false);
        setSelectedTask(null);
      } catch (err) {
        console.error("Failed to delete task:", err);
        alert("Failed to delete task. Please try again.");
      } finally {
        setIsSaving(false);
      }
    }
  };

  const getFilteredTasks = () => {
    return tasks.filter(task => {
      if (filters.priority !== "all" && task.priority !== filters.priority) return false;
      if (filters.status !== "all" && task.status !== filters.status) return false;
      if (filters.assignee !== "all" && task.assignee !== filters.assignee) return false;

      // Tab filtering
      if (activeTab === "my") {
        return task.assignee === "Sarah Smith"; // Current user
      } else if (activeTab === "team") {
        return task.assignee !== "Sarah Smith";
      }

      return true;
    });
  };

  const filteredTasks = getFilteredTasks();
  const uniqueAssignees = Array.from(new Set(tasks.map(t => t.assignee)));

  if (isLoading) {
    return (
      <div className="w-full h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          <p className="text-gray-600">Loading tasks...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 max-w-md text-center">
          <AlertCircle className="w-12 h-12 text-red-500" />
          <h2 className="text-xl font-semibold text-gray-900">Error Loading Tasks</h2>
          <p className="text-gray-600">{error}</p>
          <Button onClick={fetchTasks}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-white flex flex-col">
      {/* Header Section */}
      <div className="border-b border-gray-200">
        <div className="px-6 py-4">
          {/* Action buttons */}
          <div className="flex items-center justify-end mb-6">
            <button
              onClick={() => setIsNewTaskModalOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              + New Task
            </button>
          </div>

          {/* Filters and View Controls */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2 transition-colors ${
                showFilters ? "bg-gray-100 text-gray-900" : "text-gray-700"
              }`}
            >
              <Filter size={16} />
              Filters
            </button>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 border border-gray-300 rounded-lg transition-colors ${
                  viewMode === "grid" ? "bg-blue-50 border-blue-300" : "hover:bg-gray-50"
                }`}
              >
                <Grid3x3 size={16} className={viewMode === "grid" ? "text-blue-600" : "text-gray-600"} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 border border-gray-300 rounded-lg transition-colors ${
                  viewMode === "list" ? "bg-blue-50 border-blue-300" : "hover:bg-gray-50"
                }`}
              >
                <List size={16} className={viewMode === "list" ? "text-blue-600" : "text-gray-600"} />
              </button>
            </div>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label className="text-sm font-medium mb-2 block">Priority</Label>
                  <Select value={filters.priority} onValueChange={(value) => setFilters({...filters, priority: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Priorities</SelectItem>
                      <SelectItem value="HIGH">High</SelectItem>
                      <SelectItem value="MEDIUM">Medium</SelectItem>
                      <SelectItem value="LOW">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm font-medium mb-2 block">Status</Label>
                  <Select value={filters.status} onValueChange={(value) => setFilters({...filters, status: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="NEW">New</SelectItem>
                      <SelectItem value="IN PROGRESS">In Progress</SelectItem>
                      <SelectItem value="COMPLETED">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm font-medium mb-2 block">Assignee</Label>
                  <Select value={filters.assignee} onValueChange={(value) => setFilters({...filters, assignee: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Assignees</SelectItem>
                      {uniqueAssignees.map(assignee => (
                        <SelectItem key={assignee} value={assignee}>{assignee}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-3 flex justify-end">
                <button
                  onClick={() => setFilters({ priority: "all", status: "all", assignee: "all" })}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("all")}
              className={`pb-2 text-sm font-medium transition-colors ${
                activeTab === "all"
                  ? "text-gray-900 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              All Tasks ({tasks.length})
            </button>
            <button
              onClick={() => setActiveTab("my")}
              className={`pb-2 text-sm font-medium transition-colors ${
                activeTab === "my"
                  ? "text-gray-900 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              My Tasks ({tasks.filter(t => t.assignee === "Sarah Smith").length})
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className={`pb-2 text-sm font-medium transition-colors ${
                activeTab === "team"
                  ? "text-gray-900 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Team ({tasks.filter(t => t.assignee !== "Sarah Smith").length})
            </button>
          </div>
        </div>
      </div>

      {/* Tasks List */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {filteredTasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <AlertCircle size={48} className="text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks found</h3>
            <p className="text-sm text-gray-500 mb-4">Try adjusting your filters or create a new task</p>
            <button
              onClick={() => setIsNewTaskModalOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
            >
              + New Task
            </button>
          </div>
        ) : (
          <div className={viewMode === "grid" ? "grid grid-cols-2 gap-4" : "space-y-3"}>
            {filteredTasks.map((task) => (
              <div
                key={task.id}
                onClick={() => handleTaskClick(task)}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer hover:border-blue-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    {/* Task Title and Badges */}
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-base font-medium text-gray-900">{task.title}</h3>
                      {task.phase && (
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-md">
                          {task.phase}
                        </span>
                      )}
                      {task.statusBadge && (
                        <span className={`px-2 py-1 ${
                          task.statusBadgeColor === "orange"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-gray-100 text-gray-700"
                        } text-xs rounded-md flex items-center gap-1`}>
                          <Clock size={12} />
                          {task.statusBadge}
                        </span>
                      )}
                    </div>

                    {/* Assignee and Due Date */}
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{task.assignee}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{task.dueDate}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`px-2 py-1 ${
                        task.priority === "HIGH"
                          ? "bg-red-100 text-red-700"
                          : task.priority === "MEDIUM"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      } text-xs font-medium rounded`}>
                        {task.priority}
                      </span>
                      <span className={`px-2 py-1 ${
                        task.status === "COMPLETED"
                          ? "bg-green-100 text-green-700"
                          : task.status === "IN PROGRESS"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-700"
                      } text-xs font-medium rounded`}>
                        {task.status}
                      </span>
                      {task.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded flex items-center gap-1">
                          <Tag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Initials and Arrow */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-medium">
                      {task.initials}
                    </div>
                    <ChevronRight size={20} className="text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* New Task Modal */}
      <Dialog open={isNewTaskModalOpen} onOpenChange={setIsNewTaskModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Create New Task</DialogTitle>
            <DialogDescription>
              Add a new task for the client. Fill in the details below.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="title">Task Title *</Label>
              <Input
                id="title"
                value={newTask.title}
                onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                placeholder="Enter task title"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newTask.description}
                onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                placeholder="Enter task description"
                className="mt-1"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="assignee">Assignee *</Label>
                <Input
                  id="assignee"
                  value={newTask.assignee}
                  onChange={(e) => setNewTask({...newTask, assignee: e.target.value})}
                  placeholder="Assignee name"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="dueDate">Due Date *</Label>
                <Input
                  id="dueDate"
                  type="date"
                  value={newTask.dueDate}
                  onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="priority">Priority</Label>
              <Select value={newTask.priority} onValueChange={(value: Task["priority"]) => setNewTask({...newTask, priority: value})}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="HIGH">High</SelectItem>
                  <SelectItem value="MEDIUM">Medium</SelectItem>
                  <SelectItem value="LOW">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="tags">Tags (comma-separated)</Label>
              <Input
                id="tags"
                value={newTask.tags}
                onChange={(e) => setNewTask({...newTask, tags: e.target.value})}
                placeholder="e.g., KYC, Compliance, Tax"
                className="mt-1"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsNewTaskModalOpen(false)} disabled={isSaving}>
              Cancel
            </Button>
            <Button
              onClick={handleCreateTask}
              disabled={!newTask.title || !newTask.assignee || !newTask.dueDate || isSaving}
            >
              {isSaving ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating...</> : "Create Task"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Task Detail Modal */}
      <Dialog open={isTaskDetailModalOpen} onOpenChange={setIsTaskDetailModalOpen}>
        <DialogContent className="max-w-2xl">
          {selectedTask && (
            <>
              <DialogHeader>
                <DialogTitle>{isEditMode ? "Edit Task" : selectedTask.title}</DialogTitle>
                <DialogDescription>
                  {isEditMode ? "Update task details below" : "Task details and actions"}
                </DialogDescription>
              </DialogHeader>

              {isEditMode ? (
                // Edit Mode
                <div className="grid gap-4 py-4">
                  <div>
                    <Label htmlFor="edit-title">Task Title *</Label>
                    <Input
                      id="edit-title"
                      value={editTask.title}
                      onChange={(e) => setEditTask({...editTask, title: e.target.value})}
                      placeholder="Enter task title"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="edit-description">Description</Label>
                    <Textarea
                      id="edit-description"
                      value={editTask.description}
                      onChange={(e) => setEditTask({...editTask, description: e.target.value})}
                      placeholder="Enter task description"
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="edit-assignee">Assignee *</Label>
                      <Input
                        id="edit-assignee"
                        value={editTask.assignee}
                        onChange={(e) => setEditTask({...editTask, assignee: e.target.value})}
                        placeholder="Assignee name"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="edit-dueDate">Due Date *</Label>
                      <Input
                        id="edit-dueDate"
                        type="date"
                        value={editTask.dueDate}
                        onChange={(e) => setEditTask({...editTask, dueDate: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="edit-priority">Priority</Label>
                    <Select value={editTask.priority} onValueChange={(value: Task["priority"]) => setEditTask({...editTask, priority: value})}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="HIGH">High</SelectItem>
                        <SelectItem value="MEDIUM">Medium</SelectItem>
                        <SelectItem value="LOW">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="edit-tags">Tags (comma-separated)</Label>
                    <Input
                      id="edit-tags"
                      value={editTask.tags}
                      onChange={(e) => setEditTask({...editTask, tags: e.target.value})}
                      placeholder="e.g., KYC, Compliance, Tax"
                      className="mt-1"
                    />
                  </div>
                </div>
              ) : (
                // View Mode
                <div className="py-4 space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-700">Description</Label>
                    <p className="mt-1 text-sm text-gray-600">{selectedTask.description || "No description provided"}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-700">Assignee</Label>
                      <div className="mt-1 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-medium">
                          {selectedTask.initials}
                        </div>
                        <span className="text-sm">{selectedTask.assignee}</span>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-700">Due Date</Label>
                      <p className="mt-1 text-sm text-gray-600">{selectedTask.dueDate}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-700">Priority</Label>
                      <div className="mt-1">
                        <span className={`px-2 py-1 ${
                          selectedTask.priority === "HIGH"
                            ? "bg-red-100 text-red-700"
                            : selectedTask.priority === "MEDIUM"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        } text-xs font-medium rounded`}>
                          {selectedTask.priority}
                        </span>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-700">Status</Label>
                      <div className="mt-1">
                        <Select value={selectedTask.status} onValueChange={(value: Task["status"]) => handleUpdateTaskStatus(value)}>
                          <SelectTrigger className="w-full">
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
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700">Tags</Label>
                    <div className="mt-1 flex gap-2 flex-wrap">
                      {selectedTask.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded flex items-center gap-1">
                          <Tag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedTask.phase && (
                    <div>
                      <Label className="text-sm font-medium text-gray-700">Phase</Label>
                      <p className="mt-1">
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-md">
                          {selectedTask.phase}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              )}

              <DialogFooter className="flex justify-between">
                <div className="flex gap-2">
                  <Button variant="destructive" onClick={handleDeleteTask} disabled={isSaving}>
                    {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : "Delete"}
                  </Button>
                </div>
                <div className="flex gap-2">
                  {isEditMode ? (
                    <>
                      <Button variant="outline" onClick={() => setIsEditMode(false)} disabled={isSaving}>
                        Cancel
                      </Button>
                      <Button onClick={handleSaveTask} disabled={isSaving}>
                        {isSaving ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...</> : "Save Changes"}
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" onClick={() => setIsEditMode(true)}>
                        Edit
                      </Button>
                      <Button onClick={() => setIsTaskDetailModalOpen(false)}>
                        Close
                      </Button>
                    </>
                  )}
                </div>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
