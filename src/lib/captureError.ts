import { NextFunction, Request, Response } from 'express'

export const ce = (fn:any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next)
    } catch (e) {
      next(e)
    }
  }
}
