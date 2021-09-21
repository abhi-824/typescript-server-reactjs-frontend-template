import { Router } from 'express'
import { ce } from "../../lib/captureError"
import {
  handleCreateUser,
  handleDeleteUser,
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUser,
} from './controller'

export const router = Router()

router.get('/', ce(handleGetAllUsers))
router.get('/:id', ce(handleGetUserById))
router.post('/', ce(handleCreateUser))
router.patch('/:id', ce(handleUpdateUser))
router.delete('/:id', ce(handleDeleteUser))

export default router
