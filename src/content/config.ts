import { z, defineCollection } from "astro:content";

const docsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(), // Nombre del componente
    date: z.date(), // Última vez que se actualizo el componente
    description: z.string(),
    version: z.string(), // Version del componente
    usage: z.string().optional(), // Usos que se le puede dar al componente (ideas)
    category: z.array(z.string()).optional(), // Categoria del componente
    author: z.string().optional(), // Autor del componente (ya sea si se baso o presto la idea)
  }),
});

export const collections = {
  docs: docsCollection,
};
