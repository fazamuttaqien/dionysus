"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import useProject from "@/hooks/use-project";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";

const CommitLog = () => {
  const { project, projectId } = useProject();
  const { data: commits } = api.project.getCommits.useQuery({ projectId });
  return (
    <>
      <ul className="space-y-8">
        {commits?.map((commit, commitIndex) => {
          return (
            <li key={commitIndex} className="relative flex gap-x-4">
              <div
                className={cn(
                  commitIndex === commits.length - 1 ? "h-6" : "-bottom-6",
                  "absolute top-0 left-0 flex w-6 justify-center",
                )}
              >
                <div className="w-px translate-x-1 bg-gray-200" />
              </div>
              <>
                <img
                  src={commit.commitAuthorAvatar}
                  alt="commit avatar"
                  className="relative mt-4 size-8 flex-none rounded-full bg-gray-50"
                />
                <div className="flex-auto rounded-md bg-white p-3 ring-1 ring-gray-200 ring-inset">
                  <div className="flex justify-between gap-x-4">
                    <Link
                      target="_blank"
                      href={`${project?.githubUrl}/commits/${commit.commitHash}`}
                      className="py-0.5 text-xs leading-5 text-gray-500"
                    >
                      <span className="font-medium text-gray-900">
                        {commit.commitMessage}
                      </span>{" "}
                      <span className="inline-flex items-center">
                        commited
                        <ExternalLink className="ml-1 size-4" />
                      </span>
                    </Link>
                  </div>
                  <span className="font-semibold">{commit.commitMessage}</span>
                  <pre className="mt-2 text-sm leading-6 whitespace-pre-wrap text-gray-500">
                    {commit.summary}
                  </pre>
                </div>
              </>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CommitLog;
