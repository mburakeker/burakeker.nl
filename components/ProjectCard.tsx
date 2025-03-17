import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  githubLink,
  liveLink,
}) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
    <CardFooter className="justify-end gap-4">
      {githubLink && (
        <Button variant="outline" size="icon" asChild>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to GitHub Code"
          >
            <FaGithub size={28} className="hover:text-ring" />
          </a>
        </Button>
      )}
      {liveLink && (
        <Button variant="outline" size="icon" asChild>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to website"
          >
            <FaArrowUpRightFromSquare size={28} className="hover:text-ring" />
          </a>
        </Button>
      )}
    </CardFooter>
  </Card>
);

export default ProjectCard;
