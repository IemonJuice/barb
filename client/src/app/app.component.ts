import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {MatButton, MatMiniFabButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MatButton, MatMiniFabButton, MatDivider],
  selector: 'trombonix-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';
}
