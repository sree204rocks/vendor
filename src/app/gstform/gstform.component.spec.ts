import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstformComponent } from './gstform.component';

describe('GstformComponent', () => {
  let component: GstformComponent;
  let fixture: ComponentFixture<GstformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GstformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GstformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
