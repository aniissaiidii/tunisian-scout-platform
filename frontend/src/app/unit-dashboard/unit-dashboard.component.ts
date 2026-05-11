import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../shared/safe-url.pipe';

@Component({
  selector: 'app-unit-dashboard',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './unit-dashboard.component.html',
  styleUrls: ['./unit-dashboard.component.css']
})
export class UnitDashboardComponent {
  // Direct Power BI embed URL for unit leader (from your earlier mapping)
  unitReportUrl = 'https://app.powerbi.com/reportEmbed?reportId=c9272f68-147c-411f-99a6-89d764eecd0f&pageName=fc7d4d30d65fe3ae776e&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730';
}