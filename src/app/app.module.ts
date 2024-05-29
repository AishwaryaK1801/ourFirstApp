import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ProductComponent } from './shared/components/product/product.component';
import { StudentComponent } from './shared/components/student/student.component';
import { PostsCardsComponent } from './shared/components/posts-cards/posts-cards.component';
import { skillsComponent } from './shared/components/skills/skills.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { FormsModule } from '@angular/forms';
import { TabComponent } from './shared/components/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    StudentComponent,
    PostsCardsComponent,
    skillsComponent,
    ProductsComponent,
    TabComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
