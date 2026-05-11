import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FawjDashboardComponent } from './fawj-dashboard.component';

describe('FawjDashboardComponent', () => {
  let component: FawjDashboardComponent;
  let fixture: ComponentFixture<FawjDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FawjDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FawjDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
