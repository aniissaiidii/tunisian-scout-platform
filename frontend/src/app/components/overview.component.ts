import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { FawjDashboardComponent } from '../fawj-dashboard/fawj-dashboard.component';
import { UnitDashboardComponent } from '../unit-dashboard/unit-dashboard.component';
import { TreasurerDashboardComponent } from '../treasurer-dashboard/treasurer-dashboard.component';
import { InternationalDashboardComponent } from '../international-dashboard/international-dashboard.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    CommonModule,
    FawjDashboardComponent,
    UnitDashboardComponent,
    TreasurerDashboardComponent,
    InternationalDashboardComponent
  ],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  constructor(public authService: AuthService) {}
  get userRole(): string | null {
    return this.authService.userRole;
  }
}