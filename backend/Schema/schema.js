
const z=require("zod");

const courseSchema = z.object({
  week: z.number(),
  title: z.string(),
  img_src: z.string(),
  new_field: z.string()
});

const course_daySchema=z.object({
    day:z.number(),
    link:z.string()
});

module.exports={
    courseSchema,
    course_daySchema
}

