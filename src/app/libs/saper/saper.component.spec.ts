import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaperComponent } from './saper.component';

describe('SaperComponent', () => {
  let component: SaperComponent;
  let fixture: ComponentFixture<SaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
