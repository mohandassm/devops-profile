import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tools: string[] = [
    'Jenkins',
    'Docker',
    'Kubernetes',
    'Terraform',
    'Git',
    'AWS',
    'Azure DevOps',
    'Ansible',
    'Maven',
  ];
}
