import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificarComponent } from './clasificar.component';

describe('ClasificarComponent', () => {
  let component: ClasificarComponent;
  let fixture: ComponentFixture<ClasificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
