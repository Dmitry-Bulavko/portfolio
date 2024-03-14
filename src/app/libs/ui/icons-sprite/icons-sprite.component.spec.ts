import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsSpriteComponent } from './icons-sprite.component';

describe('IconsSpriteComponent', () => {
  let component: IconsSpriteComponent;
  let fixture: ComponentFixture<IconsSpriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconsSpriteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconsSpriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
