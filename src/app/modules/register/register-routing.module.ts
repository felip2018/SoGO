import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterAdminComponent } from "./pages/register-admin/register-admin.component";
import { RegisterBusinessComponent } from "./pages/register-business/register-business.component";

const routes: Routes = [
    {
        path: 'business',
        component: RegisterBusinessComponent
    },
    {
        path: 'person',
        component: RegisterAdminComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegisterRoutingModule {}