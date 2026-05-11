import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../shared/safe-url.pipe';

@Component({
  selector: 'app-treasurer-dashboard',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './treasurer-dashboard.component.html',
  styleUrls: ['./treasurer-dashboard.component.css']
})
export class TreasurerDashboardComponent {
  treasurerReportUrl = 'https://app.powerbi.com/reportEmbed?reportId=c9272f68-147c-411f-99a6-89d764eecd0f&pageName=345ee17b37933ab4a534&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730';
}