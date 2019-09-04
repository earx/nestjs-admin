import { Module } from '@nestjs/common'
import { AdminUserEntity, CoreAdminModuleFactory } from '@app/nestjs-admin'
import { AdminSite } from './admin'
import { AdminController } from './admin.controller'
import { DefaultAdminUserModule } from '@app/nestjs-admin/adminUser.module'

export const AdminModuleInstance = CoreAdminModuleFactory.createAdminModule({
  adminSite: AdminSite,
  adminController: AdminController,
})

@Module({
  imports: [AdminModuleInstance, DefaultAdminUserModule],
  exports: [AdminModuleInstance],
})
export class AdminModule {
  constructor(private readonly adminSite: AdminSite) {
    adminSite.register('Administration', AdminUserEntity)
  }
}
