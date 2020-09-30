import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogListingComponent } from './blog-listing/blog-listing.component';
import { CreateBlogentryComponent } from './create-blogentry/create-blogentry.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogListingComponent,
    CreateBlogentryComponent,
    HeaderComponent,
    FooterComponent,
    EntryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
