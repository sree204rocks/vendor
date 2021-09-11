import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NogstformComponent } from './nogstform.component';

describe('NogstformComponent', () => {
  let component: NogstformComponent;
  let fixture: ComponentFixture<NogstformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NogstformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NogstformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
