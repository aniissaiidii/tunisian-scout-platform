import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasurerDashboardComponent } from './treasurer-dashboard.component';

describe('TreasurerDashboardComponent', () => {
  let component: TreasurerDashboardComponent;
  let fixture: ComponentFixture<TreasurerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreasurerDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreasurerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
