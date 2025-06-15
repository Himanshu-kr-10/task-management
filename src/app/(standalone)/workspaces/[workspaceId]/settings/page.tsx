import { redirect } from "next/navigation";
import { WorkspaceIdSettingsClient } from "./client";

import { getCurrent } from "@/features/auth/queries";
import { getWorkspace } from "@/features/workspaces/queries";

const WorkspaceIdSettingsPage = async () => {

  const user = await getCurrent();
  if(!user) redirect("/sign-in");

  return (
    <WorkspaceIdSettingsClient />
  )
}

export default WorkspaceIdSettingsPage