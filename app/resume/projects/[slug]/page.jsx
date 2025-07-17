// app/resume/projects/[slug]/page.jsx
import { notFound } from "next/navigation";
import projects from "@/data/dataProjects";
import Link from "next/link";

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="project-detail-container">
      {/* Tombol kembali */}
      <Link href="/resume" className="flex items-center gap-1 mb-6">
        ← Kembali ke Resume
      </Link>

      {/* Judul */}
      <h1 className="text-3xl font-bold">{project.title}</h1>

      {/* Deskripsi */}
      <p className="mt-4 text-lg">{project.description}</p>

      {/* Tambahkan bagian yang hilang: */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Teknologi</h2>
        <ul className="mt-2 flex gap-2 flex-wrap">
          {project.techStack?.map((tech) => (
            <li key={tech} className="bg-gray-100 px-3 py-1 rounded-full">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Contoh menampilkan gambar */}
      {project.image && (
        <div className="mt-6">
          {/* <img 
            src={project.image} 
            alt={project.title}
            className="rounded-lg border shadow-md"
          /> */}
        </div>
      )}
    </div>
  );
}
