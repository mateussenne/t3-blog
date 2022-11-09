import { prisma } from '../../db/client';
import { publicProcedure, t } from '../trpc';
import { z } from "zod";

const createInput = z.object({
  title: z.string(),
  body: z.string()
})

export const postRouter = t.router({
  indexPost: publicProcedure
    .query(async ({ctx}) => {
      return await prisma.post.findMany()
    }),

  createPost: publicProcedure
    .input(createInput)
    .mutation(async ({ctx, input}) => {
      return await prisma.post.create({
        data:{
          ...input
        }
      })
    })
})

