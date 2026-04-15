const API_BASE_URL = 'http://localhost:3001';

// Types
export type Task = {
  id: number;
  title: string;
  description: string;
  assignee: string;
  dueDate: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  status: "NEW" | "IN PROGRESS" | "COMPLETED";
  tags: string[];
  phase: string | null;
  statusBadge: string | null;
  statusBadgeColor: string | null;
  initials: string;
};

export type Client = {
  id: number;
  name: string;
  aum: string;
  aumValue: number;
  type: "Individual" | "Household" | "Legal Entity";
};

export type Activity = {
  id: number;
  clientName: string;
  workflow: string;
  step: string;
  status: "Needs attention" | "In progress" | "Complete";
};

export type Household = {
  id: number;
  name: string;
  members: string[];
  totalAum: string;
  totalAumValue: number;
  accountCount: number;
};

export type Workflow = {
  id: number;
  name: string;
  description: string;
  steps: string[];
  status: "Active" | "Inactive";
  assignedCount: number;
};

export type Summary = {
  totalAum: number;
  totalClients: number;
  totalHouseholds: number;
};

// Generic fetch helper
async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// Tasks API
export const tasksApi = {
  getAll: () => fetchApi<Task[]>('/tasks'),

  getById: (id: number) => fetchApi<Task>(`/tasks/${id}`),

  create: (task: Omit<Task, 'id'>) =>
    fetchApi<Task>('/tasks', {
      method: 'POST',
      body: JSON.stringify(task),
    }),

  update: (id: number, task: Partial<Task>) =>
    fetchApi<Task>(`/tasks/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(task),
    }),

  delete: (id: number) =>
    fetchApi<void>(`/tasks/${id}`, {
      method: 'DELETE',
    }),
};

// Clients API
export const clientsApi = {
  getAll: () => fetchApi<Client[]>('/clients'),

  getById: (id: number) => fetchApi<Client>(`/clients/${id}`),

  getByType: (type: Client['type']) =>
    fetchApi<Client[]>(`/clients?type=${type}`),

  create: (client: Omit<Client, 'id'>) =>
    fetchApi<Client>('/clients', {
      method: 'POST',
      body: JSON.stringify(client),
    }),

  update: (id: number, client: Partial<Client>) =>
    fetchApi<Client>(`/clients/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(client),
    }),

  delete: (id: number) =>
    fetchApi<void>(`/clients/${id}`, {
      method: 'DELETE',
    }),
};

// Activities API
export const activitiesApi = {
  getAll: () => fetchApi<Activity[]>('/activities'),

  getById: (id: number) => fetchApi<Activity>(`/activities/${id}`),

  create: (activity: Omit<Activity, 'id'>) =>
    fetchApi<Activity>('/activities', {
      method: 'POST',
      body: JSON.stringify(activity),
    }),

  update: (id: number, activity: Partial<Activity>) =>
    fetchApi<Activity>(`/activities/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(activity),
    }),

  delete: (id: number) =>
    fetchApi<void>(`/activities/${id}`, {
      method: 'DELETE',
    }),
};

// Households API
export const householdsApi = {
  getAll: () => fetchApi<Household[]>('/households'),

  getById: (id: number) => fetchApi<Household>(`/households/${id}`),

  create: (household: Omit<Household, 'id'>) =>
    fetchApi<Household>('/households', {
      method: 'POST',
      body: JSON.stringify(household),
    }),

  update: (id: number, household: Partial<Household>) =>
    fetchApi<Household>(`/households/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(household),
    }),

  delete: (id: number) =>
    fetchApi<void>(`/households/${id}`, {
      method: 'DELETE',
    }),
};

// Workflows API
export const workflowsApi = {
  getAll: () => fetchApi<Workflow[]>('/workflows'),

  getById: (id: number) => fetchApi<Workflow>(`/workflows/${id}`),

  create: (workflow: Omit<Workflow, 'id'>) =>
    fetchApi<Workflow>('/workflows', {
      method: 'POST',
      body: JSON.stringify(workflow),
    }),

  update: (id: number, workflow: Partial<Workflow>) =>
    fetchApi<Workflow>(`/workflows/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(workflow),
    }),

  delete: (id: number) =>
    fetchApi<void>(`/workflows/${id}`, {
      method: 'DELETE',
    }),
};

// Summary API
export const summaryApi = {
  get: () => fetchApi<Summary>('/summary'),

  update: (summary: Partial<Summary>) =>
    fetchApi<Summary>('/summary', {
      method: 'PATCH',
      body: JSON.stringify(summary),
    }),
};
