import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaperCellComponent } from './saper-cell.component';

describe('SaperCellComponent', () => {
  let component: SaperCellComponent;
  let fixture: ComponentFixture<SaperCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaperCellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaperCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
