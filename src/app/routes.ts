import { createBrowserRouter } from "react-router";
import ClientPage from "@/app/pages/ClientPage";
import TasksPage from "@/app/pages/TasksPage";
import ClientTasksPage from "@/app/pages/ClientTasksPage";
import HouseholdsPage from "@/app/pages/HouseholdsPage";
import OverviewPage from "@/app/pages/OverviewPage";
import WorkflowsPage from "@/app/pages/WorkflowsPage";
import WealthAdvisorDashboardPage from "@/app/pages/WealthAdvisorDashboardPage";
import AppLayout from "@/app/components/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        path: "/",
        Component: OverviewPage,
      },
      {
        path: "/overview",
        Component: OverviewPage,
      },
      {
        path: "/households",
        Component: HouseholdsPage,
      },
      {
        path: "/workflows",
        Component: WorkflowsPage,
      },
      {
        path: "/client",
        Component: ClientPage,
      },
      {
        path: "/clients/sarah-smith",
        Component: ClientPage,
      },
      {
        path: "/clients/sarah-smith/tasks",
        Component: ClientTasksPage,
      },
      {
        path: "/tasks",
        Component: TasksPage,
      },
      {
        path: "/wealth-advisor-dashboard",
        Component: WealthAdvisorDashboardPage,
      },
    ],
  },
]);