import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { glob } from "glob";

const PROJECTS_PATH = path.join(process.cwd(), "src/content/projects");

export interface ProjectMeta {
  published: boolean;
  title: string;
  description: string;
  date?: string;
  url?: string;
  repository?: string;
}

export interface Project {
  meta: ProjectMeta;
  slug: string;
  content: string;
}

export async function getProjects(): Promise<Project[]> {
  const files = glob.sync(`${PROJECTS_PATH}/**/*.mdx`);

  const projects = files.map(file => {
    const slug = path.basename(file, '.mdx');
    const source = fs.readFileSync(file, "utf8");
    const { data, content } = matter(source);

    return {
      meta: data as ProjectMeta,
      slug,
      content,
    };
  });

  return projects;
}

export async function getProject(slug: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find(p => p.slug === slug);
}
