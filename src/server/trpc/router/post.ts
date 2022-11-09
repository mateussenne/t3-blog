import { prisma } from '../../db/client';
import { publicProcedure, t } from '../trpc';
import { z } from "zod";

export const postRouter = t.router({
  indexPost: publicProcedure
    .query(async ({ctx}) => {
      return await prisma.post.findMany()
    }),
})

