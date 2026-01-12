"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function Home() {
  const projects = useQuery(api.projects.get);

  return (
    <div>
      {projects?.map((project) => (
        <div key={project._id}>
          <span>{JSON.stringify(project)}</span>
        </div>
      )) ?? <p>Loading projects...</p>}
    </div>
  );
}
