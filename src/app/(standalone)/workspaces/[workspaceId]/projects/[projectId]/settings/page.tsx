import React from 'react'
import { redirect } from 'next/navigation'

import { getCurrent } from '@/features/auth/queries'
import { getProject } from '@/features/projects/queries'
import { EditProjectForm } from '@/features/projects/components/edit-workspace-form'

interface ProjectIdSettingsPageProps {
  params: {
    projectId: string
  }
}

const ProjectIdSettingsPage = async ({
  params
} : ProjectIdSettingsPageProps) => {
  const user = await getCurrent();
  if(!user) redirect("/sign-in");

  const initialValues = await getProject({
    projectId: params.projectId
  });

  if(!initialValues) {
    throw new Error("Project Not Found")
  }

  return (
    <div className='w-full lg:max-w-xl'>
      <EditProjectForm initialValues={initialValues} />
    </div>
  )
}

export default ProjectIdSettingsPage