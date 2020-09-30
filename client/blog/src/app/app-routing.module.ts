import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListingComponent } from './blog-listing/blog-listing.component';
import { CreateBlogentryComponent } from './create-blogentry/create-blogentry.component';
import { HomeComponent } from './home/home.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';



const routes: Routes = [
    {path:  "", pathMatch:  "full",redirectTo:  "home"},
    {path: "home", component: HomeComponent},
    {path: "entry-create", component: CreateBlogentryComponent},
    {path: "blog-list", component: BlogListingComponent},  
    {path: "entry-detail/:id", component: EntryDetailComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
