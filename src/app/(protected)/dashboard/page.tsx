import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import useProject from "@/hooks/use-project";
import CommitLog from "./commit-log";

const DashboardPage = () => {
  const { project } = useProject();
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-y-4">
        <div className="bg-primary w-fit rounded-xs px-4 py-3">
          <div className="flex items-center">
            <Github className="size-5 text-white" />
            <div className="ml-2">
              <p className="text-sm font-medium text-white">
                This project is linked to{" "}
                <Link
                  href={project?.githubUrl ?? ""}
                  className="inline-flex items-center text-white/80 hover:underline"
                >
                  {project?.githubUrl}
                  <ExternalLink className="mt-2 size-4" />
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="h-4" />

        <div className="flex items-center gap-4">
          TeamMembers InviteButton ArchiveButton
        </div>

        <div className="mt-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
            AskQuestionCard MeetingCard
          </div>
        </div>

        <div className="mt-8" />
        <CommitLog />
      </div>
    </div>
  );
};

export default DashboardPage;
