"use client"

import Link from "next/link";
import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"
import { useInviteCode } from "../hooks/use-workspace-id copy";
import { useJoinWorkspace } from "../api/use-join-workspace";
import { useWorkspaceId } from "../hooks/use-workspace-id";
import { useRouter } from "next/router";

interface JoinWorkspaceFormProps {
  initialValues: {
    name: string;
  }
}

export const JoinWorkspaceForm = ({
  initialValues
} : JoinWorkspaceFormProps) => {
  const router = useRouter();

  const workspaceId = useWorkspaceId();

  const inviteCode = useInviteCode();
  const { mutate, isPending } = useJoinWorkspace();

  const onSubmit = () => {
    mutate({
      param: { workspaceId },
      json: { code: inviteCode }
    }, {
      onSuccess: ({ data }) => {
        router.push(`/workspaces/${data.id}`)
      }
    } 
  )}

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="p-7">
        <CardTitle className="text-xl font-bold">
          Join Workspace
        </CardTitle>
        <CardDescription>
          You&apos;ve been invited to join <strong>{initialValues.name}</strong> workspace
        </CardDescription>
        <div className="p-7">
          <DottedSeparator />
        </div>
        <CardContent className="p-7">
          <div className="flex flex-col lg:flex-row gap-2  items-center justify-between">
            <Button className="lg:w-fit w-full" size="lg" variant="secondary" type="button" asChild disabled={isPending}>
              <Link href="/">
                Cancel
              </Link>
            </Button>
            <Button className="lg:fit w-full" size="lg" type="button" disabled={isPending} onClick={onSubmit}>
              Join Workspace
            </Button>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  )
}