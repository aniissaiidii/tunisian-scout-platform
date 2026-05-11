import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalDashboardComponent } from './international-dashboard.component';

describe('InternationalDashboardComponent', () => {
  let component: InternationalDashboardComponent;
  let fixture: ComponentFixture<InternationalDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternationalDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternationalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
