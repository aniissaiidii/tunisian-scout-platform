import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../shared/safe-url.pipe';

type DashboardKey = 'overall' | 'treasury' | 'international' | 'unit';

@Component({
  selector: 'app-fawj-dashboard',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './fawj-dashboard.component.html',
  styleUrls: ['./fawj-dashboard.component.css']
})
export class FawjDashboardComponent {
  activeDashboard: DashboardKey = 'overall';

  dashboards: Record<DashboardKey, string> = {
    overall: 'https://app.powerbi.com/reportEmbed?reportId=c9272f68-147c-411f-99a6-89d764eecd0f&pageName=fea8b8360ec57261ea36&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730',
    treasury: 'https://app.powerbi.com/reportEmbed?reportId=c9272f68-147c-411f-99a6-89d764eecd0f&pageName=345ee17b37933ab4a534&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730',
    international: 'https://app.powerbi.com/reportEmbed?reportId=c9272f68-147c-411f-99a6-89d764eecd0f&pageName=d09b854b349c3f93d16c&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730',
    unit: 'https://app.powerbi.com/reportEmbed?reportId=c9272f68-147c-411f-99a6-89d764eecd0f&pageName=fc7d4d30d65fe3ae776e&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730'
  };

  setDashboard(dashboard: DashboardKey) {
    this.activeDashboard = dashboard;
  }
}