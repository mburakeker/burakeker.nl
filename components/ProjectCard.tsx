import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, githubLink, liveLink }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
    <CardFooter className="justify-end gap-4">
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="icon">
            <FaGithub size={28} className="hover:text-ring" />
          </Button>
        </a>
      )}
      {liveLink && (
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="icon">
            <FaArrowUpRightFromSquare size={28} className="hover:text-ring" />
          </Button>
        </a>
      )}
    </CardFooter>
  </Card>
);

export default ProjectCard;