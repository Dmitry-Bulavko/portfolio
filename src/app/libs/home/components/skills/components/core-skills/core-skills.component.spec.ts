import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreSkillsComponent } from './core-skills.component';

describe('CoreSkillsComponent', () => {
  let component: CoreSkillsComponent;
  let fixture: ComponentFixture<CoreSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreSkillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoreSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
